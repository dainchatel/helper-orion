const faker = require('faker')
const _ = require('lodash')

const [task, root] = process.argv.slice(2, 4)

var { times } = require('yargs')
    .option('times', {
        alias: 't',
        default: 1,
    })
    .argv

const obj = {
  name: () => faker.name.findName(),
  first: () => _.startCase(`${faker.name.firstName()} ${root}`),
  last: () => _.startCase(`${root} ${faker.name.lastName()}`),
  job: () => faker.name.jobTitle(),
  company: () => faker.company.companyName(),
  word: () => faker.random.words(),
  phrase: () => faker.hacker.phrase(),
  noun: () => faker.hacker.noun(),
  bs: () => faker.company.bs(),
  color: () => faker.commerce.color(),
  product: () => faker.commerce.productName(),
  slug: () => faker.company.catchPhrase(),
  list: () => Object.keys(obj)
}

_.times(times, () =>
  console.log(obj[task]())
)