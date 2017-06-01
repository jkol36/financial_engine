import { expect } from 'chai'
import { convertCsvToJSON } from './utils'
import fs from 'fs'

describe('financial_engine', () => {
  it('should convert csv to json', done => {
    let filename = 'sales'
    convertCsvToJSON(filename)
    .then(() => {
      if(fs.existsSync(`${filename}.json`)) {
        done()
      }
      else {
        let error = new Error('does not exist')
        done(error)
      }
    })
  })
})