const express = require("express");

const { Mentee } = require("../../db/models");

const router = express.Router();

//! Query for all Mentees
router.get("/", async (req, res) => {
  const menteesObj = await Mentee.findAll({
    attributes: { exclude: ["hashedPassword"] },
  });

  return res.json(menteesObj);
});

//! Query Mentee by Id
router.get("/:id", async (req, res) => {
  const menteeObj = await Mentee.findOne({
    where: { id: req.params.id },
    attributes: { exclude: ["hashedPassword"] },
  });

  return res.json(menteeObj);
});

module.exports = router;
