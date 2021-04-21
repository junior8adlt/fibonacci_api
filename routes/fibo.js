"use strict";

const express = require("express");
let FiboController = require("../controllers/fibo");
const api = express.Router();

api.get("/fibo/:index", FiboController.getByIndex);
module.exports = api;
