var express = require("express");
var router = express.Router();
const Register = require("../public/javascript/registers");

// Home page
router.get("/", (req, res) => {
  console.log("welocome");
  res.render("home");
});

// Admission page
router.get("/admin", (req, res) => {
  res.render("partials/admission");
});

router.post("/admin", (req, res) => {
  console.log(req.body);
  var register = new Register({
    studname: req.body.studname,
    rollno: req.body.rollno,
    batch: req.body.batch,
    program: req.body.program,
    dob: req.body.dob,
    bloodgroup: req.body.bloodgroup,
    health: req.body.health,
    mob: req.body.mob,
    email: req.body.email,
    permaddress: req.body.permaddress,
    permcontact: req.body.permcontact,
    localaddress: req.body.localaddress,
    localcontact: req.body.localcontact,
    admissionno: req.body.admissionno,
    gm: req.body.gm,
    sc: req.body.sc,
    st: req.body.st,
    mq: req.body.mq,
    proposer: req.body.proposer,
    prevcourse: req.body.prevcourse,
    institute: req.body.institute,
    mark: req.body.mark,
    fathername: req.body.fathername,
    fatheroccupation: req.body.fatheroccupation,
    fathercontact: req.body.fathercontact,
    mothername: req.body.mothername,
    mothersoccupation: req.body.mothersoccupation,
    motherscontact: req.body.motherscontact,
    gurdiansname: req.body.gurdiansname,
    gurdiansoccupation: req.body.gurdiansoccupation,
    gurdianscontact: req.body.gurdianscontact,
    relativename: req.body.relativename,
    relativeprogram: req.body.relativeprogram,
    relativeyear: req.body.relativeyear,
  });
  register.save();
  res.render("partials/admission");
});

module.exports = router;
