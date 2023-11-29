import { buildRoutePath } from "./utils/build-route-path.js"

export const routes = [
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handle: (req, res) => {
      console.log('POST')

      return res.writeHead(201).end()
    }
  },
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handle: (req, res) => {
      console.log('GET')
      return res.writeHead(200).end()
    }
  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handle: (req, res) => {
      console.log('PUT')
      return res.writeHead(204).end()
    }
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handle: (req, res) => {
      console.log('DELETE')
      return res.writeHead(204).end()
    }
  },
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    handle: (req, res) => {
      console.log('PATCH')
      return res.writeHead(204).end()
    }
  },
  

]