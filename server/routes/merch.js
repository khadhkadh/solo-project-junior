const express = require("express");
const { getAll,getOne, addOne,update ,deleteOne} = require("../controller/merch");
const router = express.Router();
// controller modules

router.get("/",getAll);
router.get("/getOne/:modelname", getOne);
router.post("/add", addOne);
router.put("/:id_merch", update);
router.delete("/:id_merch",deleteOne)

module.exports = router;
