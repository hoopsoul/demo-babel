async function sleep() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        console.log(222)
        return resolve()
      }, 1000)
    } catch(err) {
      return reject(err)
    }
  })
}

async function run() {
  console.log(111)
  await sleep()
  console.log(333)
}

run()