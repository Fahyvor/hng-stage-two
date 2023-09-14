const express = require('express');
const bodyParser = require('body-parser');
const Person = require('./models/Person.js')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const { check } = require('express-validator');


const app = express();
dotenv.config()

app.use(bodyParser.json());

async function connectDB() {
  try {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Connected to the database');
  } catch (error) {
  console.error('Error in connecting to the database:', error.message);
  process.exit(1); //The application exits if the connection fails
  }
}

connectDB();

const validateNameorId = [
  check('param')
    .custom((value) => {
      //Check the validity of the name or id
      if (!mongoose.Types.ObjectId.isValid(value) && typeof value !== 'string') {
        throw new Error('Parameter is Invalid');
      }
      return true;
      })
      .withMessage('Parameter must be a valid name or ID'),
]

// Create Operation
app.post('/api', async (req, res) => {
  const {name} = req.body;

//Check if the "name" field is a string
if (typeof name !== 'string') {
  return res.status(400).json({ message: 'Name must be a string'});
}

try {
  const newPerson = new Person({ name });
  const savedPerson = await newPerson.save();
  res.status(201).json(savedPerson);
} catch (error) {
  res.status(400).json({ message: 'Account Creation Unsuccessful', error: error.message });
}
});

// Read Operation
app.get('/api/:nameOrId', validateNameorId, async (req, res) => {
  const nameOrId = req.params.nameOrId;

  try {
    let person;

    if (mongoose.Types.ObjectId.isValid(nameOrId)) {
      person = await Person.findById(nameOrId);
    } else {
      person = await Person.findOne({ name: nameOrId })
    }

    if (!person) {
      return res.status(404).json({ message: 'Person not found' });
    }

    res.json(person);

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update Operation
app.put('/api/:nameOrId', async (req, res) => {
  const nameOrId = req.params.nameOrId;
  const updatedPerson = req.body;

  try {
    let query;

    if (mongoose.Types.ObjectId.isValid(nameOrId)) {
      query = await Person.findByIdAndUpdate(nameOrId, updatedPerson, { new: true});
    } else {
      query = await Person.findOneAndUpdate({ name: nameOrId }, updatedPerson, { new: true });
    }

    if (!query) {
      return res.status(404).json({ message: 'This user is not found'});
    }

    res.json(query);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Delete Operation
app.delete('/api/:nameOrId', validateNameorId, async (req, res) => {
  const nameOrId = req.params.nameOrId;

  try {
    let query;

    if (mongoose.Types.ObjectId.isValid(nameOrId)) {
      query = await Person.findByIdAndRemove(nameOrId);
    } else {
      query = await Person.findOneAndRemove({ name: nameOrId });
    }

    if (!query) {
      return res.status(404).json({ message: 'This user is not found'});
    }

    res.json({ message: `You have deleted ${nameOrId}`})
  } catch (error) {
    res.status(500).json({ message: 'Error from Server', error: error.message});
  }
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
