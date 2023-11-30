export function datetime(){
  const [ dateBr, time ] = new Date().toLocaleString('pt-BT').split(',')
  const date = dateBr.split('/').reverse().join('-').trim()
  return `${date} ${time.trim()}`
}