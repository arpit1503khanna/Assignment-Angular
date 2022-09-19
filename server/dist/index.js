"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const user_1 = __importDefault(require("./routes/user"));
const cors = require("cors");
const app = express();
app.use(express.json({ limit: "30mb" }));
app.use(cors());
app.use('/user', user_1.default);
app.listen(9010);
