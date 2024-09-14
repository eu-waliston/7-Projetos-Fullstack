const { default: mongoose } = require("mongoose");

const AdminSchema = mongoose.Schema({
  admin_name: { type: String, required: true, unique: true },
  admin_email: { type: Number, required: true, unique: true },
  admin_password: { type: String, required: true, unique: true, max: 16 },
  admin_phone: {
    type: String,
    validate: {
      validator: function (v) {
        return /\d{3}-\d{5}-\d{4}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number`,
    },
  },
});

module.exports = mongoose.model("Admin", AdminSchema);
