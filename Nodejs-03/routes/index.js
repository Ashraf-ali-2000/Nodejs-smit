const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    
// res.send("Hello from  Controller")
res.send(req.body)
})

// Dynamic route
router.get("/:categories", (req, res) => {
res.send(req.params.categories)
})



module.exports = router;