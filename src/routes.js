export const routes = [
  {
    method: 'POST',
    path: '/tasks',
    handle: (req, res) => {
      console.log('POST')

      return res.writeHead(201).end()
    }
  },
  {
    method: 'GET',
    path: '/tasks',
    handle: (req, res) => {
      console.log('GET')
      return res.writeHead(200).end()
    }
  },
  {
    method: 'PUT',
    path: '/tasks/:id',
    handle: (req, res) => {
      console.log('PUT')
      return res.writeHead(204).end()
    }
  },
  {
    method: 'DELETE',
    path: '/tasks/:id',
    handle: (req, res) => {
      console.log('DELETE')
      return res.writeHead(204).end()
    }
  },
  {
    method: 'PATCH',
    path: '/tasks/:id/complete',
    handle: (req, res) => {
      console.log('PATCH')
      return res.writeHead(204).end()
    }
  },
  

]