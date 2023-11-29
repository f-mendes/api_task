export function paramsRequired(...params) {
  params.forEach(param => {
    if (param === undefined || param === '') {
      throw 'Por favor, verifique os parâmetros obrigatórios.'
    }
  })
}

export function idExist(id, data) {
  const row = data.filter(row => row.id === id)
  if(row.length === 0){
    throw 'id não encontrado'
  }
}