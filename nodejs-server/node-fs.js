const fs = require("fs");

fs.unlink("./myfilename2", (err) => {
  if (err) {
    console.log(err);
  }
});

// const obj = {
//   name:'dar',
//   food:'pasta',
//   status: 404
// }
// fs.writeFile('./myfilename1', JSON.stringify(obj), err=>{
//   if(err){
//     console.log(err);
//   }
// })

// const txt2 = ' and asking a lot of questions'
// fs.appendFile('./myfilename2', txt2, (err)=>{
//   if(err){
//     console.log(err);
//   }
// })

// console.log('before');
// fs.readFile('./myfilename', (err, data)=>{
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log(data.toString());
//   }
// });
// console.log('after');

// console.log('before');
// const f = fs.readFileSync('./myfilename');
// const data = f.toString();
// console.log(data);
// console.log('after');
