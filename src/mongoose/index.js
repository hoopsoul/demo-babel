import mongoose from 'mongoose'
import modelAsync from './model'

const db = mongoose.connect('mongodb://localhost/demo')
const schema = new mongoose.Schema({
  id: Number,
  name: String,
  age: { type: Number, default: 20 },
})
const model = mongoose.model('user', schema)

// const jack = new model({ id: 2, name: 'Jack' })
// model.create([jack])
// // jack.save(() => {
//   // db.disconnect()
// mongoose.connection.close()
// })

model.findOneAndUpdate({id: 2}, {age: 30}, () => {
  model.findOne({id: 2}, (err, user) => {
    console.log(user)
    mongoose.connection.close()
  })
})

// async function test() {
//   const user = await modelAsync.findById(model, 2)
//   console.log(user)
// }
// test()
