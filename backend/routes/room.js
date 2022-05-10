const express = require("express");
const pool = require("../config");
const path = require("path");

router = express.Router();

router.get("/rooms", async function (req, res, next) {
    try{
        const [rooms, columns] = await pool.query("SELECT * FROM rooms");
        return res.json(rooms);
    } catch (err) {
        return next(err);
    }
});

exports.router = router;