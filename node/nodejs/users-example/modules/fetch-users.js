const axios = require("axios");
const getData = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    // console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
getData();
module.exports = {
  getData,
};
