const knex = require('knex');

const db = knex({
  client:'pg',
  connection: {
    host:'127.0.0.1',
    port:'5432',
    user: 'postgres',
    password:'123456',
    database:'dvdrental'
  }
})


db('country')
.insert([{country:'dar4'},{country:'dar5'}])
.returning('*')
.then(result => {
  console.log(result);
})
.catch(err=>{
  console.log(err);
})
// db('country')
// .select('country_id','country')
// .then(result => {
//   console.log(result);
// })
// .catch(err=>{
//   console.log(err);
// })
