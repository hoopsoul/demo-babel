
async function findById(model, id) {
  return new Promise((resolve, reject) => {
    try {
      model.findOne({ id }, (err, user) => {
        if (err) return reject(err)
        return resolve(user)
    })
    } catch(err) {
      return rejct(err)
    }
  })
}

export default { findById }
