const express = require("express");
const router = express.Router();
const todo = require('../models/todoModel');

router.post("/", (req, res) => {
    
    //Create a new todo item
    todo.createItem(req.body, (err, result) => {
        if (err) {
            res.json({
                message: "could not create a new item, please try again",
                err
            });
        }
        else {
            if (result.rowCount !== 0) {
                res.json({
                    message: "Todo Item Added Successfully",
                });
            }
            else {
                res.json({
                    message: "Item already exists",
                });
            }
        }
    })
});

module.exports = router;
