
const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://product:ZHPqq3HENitThs49@cluster0.ilge5zc.mongodb.net/?retryWrites=true&w=majority"
  );
};

module.exports = connect;