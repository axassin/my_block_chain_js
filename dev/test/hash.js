const Crypto = require('crypto-js')


const hash = Crypto.SHA256()

const transactions = [
  {
    sender: '123',
    recipient: '12345',
    value: 100
  },
  {
    sender: '1123',
    recipient: '112345',
    value: 200
  },
  {
    sender: '123qwe',
    recipient: '123qweqq45',
    value: 102
  },
  {
    sender: '1qqqq123',
    recipient: '11zaaa2345',
    value: 203
  }
]

const isEven = transactions.length % 2 == 0

console.log(Array(4).join('i'))
