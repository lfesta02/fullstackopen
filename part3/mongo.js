const mongoose = require('mongoose')

if(process.argv.length !== 3 && process.argv.length !== 5) {
  console.log('incorrect format. should be "node mongo.js <password> (name number)"')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://lfesta11:${password}@cluster0.9meebow.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = new mongoose.model('Person', personSchema)

if(process.argv.length === 5) {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
  })

  person.save().then(result => {
    console.log(`added ${result.name} number ${result.number} to the phonebook`)
    mongoose.connection.close()
  })
}

if(process.argv.length === 3) {
  console.log('phonebook:')
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
}