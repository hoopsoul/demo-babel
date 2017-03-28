import crypto from 'crypto'
const hs = crypto.createHash('sha1')
hs.update('大家好ABC')
console.log(hs.digest('hex'))
