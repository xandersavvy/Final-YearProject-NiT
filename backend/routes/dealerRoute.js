const router = require('express').Router();











router.get("/", (req,res,next) => {
    res.send("Dealer Route");
}
)




module.exports = router;