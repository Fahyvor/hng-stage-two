const express = require('express');
const mongoose = require('mongoose')

const personSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        }
    },
    { timestamps: true}
);

const Person = mongoose.model('Person', personSchema);

module.exports = Person;