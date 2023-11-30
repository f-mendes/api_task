import { parse } from "csv-parse"
import fs from 'node:fs'

(async () => {
  const pathCsv = new URL('./tasks.csv', import.meta.url)
  const csvData = fs.readFileSync(pathCsv, "utf8")

  const parser = parse(csvData, {
    columns: true,
    delimiter: ",",
    trim: true,
    skip_empty_lines: true,
  })

  for await (const record of parser) {
    fetch('http://localhost:3333/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(record)
    })
  
  }
})()