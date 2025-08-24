const db = require("../db.js");
exports.get_dieties = (req, res, next) => {
  db.getDB()
    .collection("deity_list")
    .find({})
    .toArray()
    .then((result) => {
      res.json({ result: result });
    })
    .catch((err) => {
      console.log(err);
    });
};
