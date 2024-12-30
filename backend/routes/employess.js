const express = require("express");

const router = express.Router();
const Employees = require("../models/employee");
const employee = require("../models/employee");

//test
router.get("/test",(req,res)=> res.send("Employee routes working"));

router.post("/",(req,res)=>{
    Employees.create(req.body)
    .then(()=> res.json({msg:"Employee added Successfully "}))
    .catch(()=> res.status(400).json({msg:"Employee adding failed" }));
});

router.get("/",(req,res)=>{
    Employees.find()
    .then((employees) => res.json(employees))
    .catch(() => res.status(400).json({msg: "No employees found"}));
});

router.get("/:id",(req,res)=>{
    Employees
    .findById(req.params.id)
    .then((employees)=> res.json(employees))
    .catch(() => res.status(400).json({msg: "cannot find this employee"}));
});

router.put("/:id", (req, res) => {
    Employees.findByIdAndUpdate(req.params.id, req.body)
      .then(() => 
        res.json({ msg: "Update Successfully" }))
      .catch(()=> res.status(400).json({msg: "Update Failed"}));
});

  router.delete("/:id",(req,res)=>{
    Employees.findByIdAndDelete(req.params.id).then(()=>
    res.json({msg : "Deleted Successfully"}))
    .catch(() => res.status(400).json({msg: "Cannot be Delete"}));
  });
  
  

module.exports = router;