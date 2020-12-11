const express = require("express");
const router = express.Router();
const todo = require('../models/todoModel');

router.put("/:id", (req, res) => {

    //Update state of an Item using item_id
    todo.updateItem(req.params.id, (err, result) => {
        if (err) {
            res.json({
                message: "Could not update todo item, try again!",
                err
            });
        }
        else {
            if (result.rowCount !== 0) {
                res.json({
                    message: "Item Updated Successfully.",
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
