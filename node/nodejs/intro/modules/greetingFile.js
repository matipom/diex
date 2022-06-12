const greeting = (name) => {
  console.log(`Hello ${name}, welcome to NodeJs`);
};

const hello = (name) => {
  console.log(`Hello ${name}`);
};

// module.exports.a = greeting;
// module.exports.b = hello;

module.exports = {
  greeting,
  hello,
};
