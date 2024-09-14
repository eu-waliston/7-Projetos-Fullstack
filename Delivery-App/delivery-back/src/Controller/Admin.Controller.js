const Admin = require("../Model/Admin.Model");

async function getAdmin(req, res) {
  const id = req.params.id;
  try {
    let admin = await Admin.findById(id);
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
async function createAdmin(req, res) {
  const newAdmin = new Admin({
    admin_name: req.body.admin_name,
    admin_email: req.body.admin_email,
    admin_password: req.body.admin_password,
  });

  try {
    let nAdmin = await newAdmin.save();
    res.tatus(200).json(nAdmin);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
module.exports = {
    createAdmin,
    getAdmin
}
