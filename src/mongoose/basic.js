// import mongoose from 'mongoose'
import modelAsync from './model'
// mongoose.connect('mongodb://localhost/demo')

// const schema = mongoose.Schema({
//   id: Number,
//   name: String,
//   age: { type: Number, default: 20 }
// })

// const model = mongoose.model('user', schema)

// const john = new model({
//   id: 1,
//   name: 'John',
// })

// const jack = new model({
//   id: 1,
//   name: 'Jack'
// })

// model.findOne({id: 1}, (err, user) => {
//   console.log(user)
// })

// model.find((err, users) => {
//   console.log(users)
// })

async function test() {
  const user = await modelAsync.findById(1)
  console.log(user)
}

test()