const db = require("../db.js");
exports.get_dates = (req, res, next) => {
  var final_results = {};
  db.getDB()
    .collection("festivals")
    .find({})
    .toArray()
    .then((result) => {
      // res.json({ result: result });
      final_results["festivals"] = result;
      return db.getDB().collection("vastraseva_bookings").find({}).toArray();
    })
    .then((result) => {
      final_results["vastraseva_bookings"] = result;
      res.json(final_results);
    })
    .catch((err) => {
      console.log(err);
    });
};
