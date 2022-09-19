"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.createUser = exports.deleteUser = exports.getUserData = void 0;
const db_js_1 = __importDefault(require("../util/db.js"));
const getUserData = (req, res) => {
    db_js_1.default.query('SELECT * from users', (q_err, q_res) => {
        if (q_err) {
            console.log(q_err);
            res.code = 404;
            res.json("some error occur", q_err);
        }
        res.json(q_res.rows);
    });
};
exports.getUserData = getUserData;
const deleteUser = (req, res) => {
    const { id } = req.params;
    db_js_1.default.query('DELETE FROM users WHERE user_id = $1', [id], (q_err, q_res) => {
        if (q_err) {
            console.log(q_err);
            res.code = 404;
            res.json("some error occur", q_err);
        }
        res.json(q_res);
    });
};
exports.deleteUser = deleteUser;
const createUser = (req, res) => {
    const data = [req.body.firstName, req.body.middleName, req.body.lastName, req.body.email, req.body.phoneNumber, req.body.role, req.body.address, req.body.createdDate];
    db_js_1.default.query('insert into users (first_name,middle_name,last_name,email,phone_number,role,address,created_date) values ($1,$2,$3,$4,$5,$6,$7,$8)', data, (q_err, q_res) => {
        if (q_err) {
            console.log(q_err);
            res.code = 404;
            res.json("some error occur", q_err);
        }
        db_js_1.default.query('select user_id from users order by user_id desc limit 1', (q_err1, q_res1) => { res.json(q_res1); });
    });
};
exports.createUser = createUser;
const updateUser = (req, res) => {
    const { id } = req.params;
    const data = [req.body.firstName, req.body.middleName, req.body.lastName, req.body.email, req.body.phoneNumber, req.body.role, req.body.address, req.body.createdDate];
    db_js_1.default.query('UPDATE users SET first_name=$1,middle_name=$2, last_name=$3, email=$4, phone_number=$5, role=$6, address=$7, created_date=$8 WHERE user_id=$9', [...data, id], (q_err, q_res) => {
        if (q_err) {
            console.log(q_err);
            res.code = 404;
            res.json("some error occur", q_err);
        }
        res.json(q_res);
    });
};
exports.updateUser = updateUser;
