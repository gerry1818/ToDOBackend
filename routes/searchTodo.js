const express = require("express");
const router = express.Router();
const todo = require('../models/todoModel');

router.get("/", (req, res) => {

    //search todo item using id
    todo.searchItem(req.query, (err, result) => {
        if (err) {
            res.json({
                message: "could not search for item, please try again",
                err
            });
        }
        else {
            if (result.rows.length !== 0) {
                res.json(result.rows);
            }
            else {
                res.json({
                    message: "No Item found, please try again",
                });
            }

        }
    })
});

module.exports = router;
