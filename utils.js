import csv2json from 'csv2json'
import fs from 'fs'


export const convertCsvToJSON = filename => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000)
    fs.createReadStream(`${filename}.csv`)
    .pipe(csv2json({
      separator:','
    }))
    .pipe(fs.createWriteStream(`${filename}.json`))
  })
}