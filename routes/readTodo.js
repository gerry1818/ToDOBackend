const express = require("express");
const router = express.Router();
const todo = require('../models/todoModel');


router.get("/", (req, res) => {

    //Read all Todo Items available
    todo.getItem((err, result) => {
        if (err) {
            res.json(err);
        }
        if (result.length != 0) {
            res.json(result.rows)
        }
        else {
            res.json({ "message": "No todoItem found" });
        }
    });
});

module.exports = router;
