const Reserve = require("../Model/Reserve.Model");

async function reserveTable(req, res) {
  const newReserve = new Reserve({
    table_number: req.body.table_number,
    reserve_date: req.body.reserve_date,
    reserve_hour: req.body.reserve_hour,
    reserve_name: req.body.reserve_name,
  });

  try {
    let nReserve = await newReserve.save();
    res.status(200).json(nReserve);
  } catch (error) {
    req.status(500).json({ message: error });
  }
}
async function changeReserve(req, res) {
  try {
    let nChange = await Reserve.updateOne(
      { _id: req.params.id },
      {
        $set: {
          table_number: req.body.table_number,
          reserve_date: req.body.reserve_date,
          reserve_hour: req.body.reserve_hour,
          reserve_name: req.body.reserve_name,
          table_status: req.body.table_status,
        },
      }
    );
    res.tatus(200).json(nChange);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
async function deleteReserve(req, res) {
  let id = req.params.id;
  try {
    await Reserve.findOneAndDelete(id);
    res.status(200).json("Operations Succesfull!");
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
module.exports = {
  reserveTable,
  changeReserve,
  deleteReserve,
};
