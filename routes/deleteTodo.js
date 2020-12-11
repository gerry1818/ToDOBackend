const express = require("express");
const router = express.Router();
const todo = require('../models/todoModel');

router.delete("/:id", (req, res) => {

    //Delete a TodoItem using item_id
    todo.deleteItem(req.params.id, (err, result) => {
        if (err) {
            res.json({
                message: "could not delete item, please try again",
                err
            });
        }
        else {
            if (result.rowCount !== 0) {
                res.json({
                    message: "Item Deleted Successfully.",
                });

            }
            else {
                res.json({
                    message: "Item ID not found.",
                });
            }
        }
    })


});

module.exports = router;
