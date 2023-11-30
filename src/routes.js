import { randomUUID } from 'node:crypto'
import { Database } from "./database.js"
import { buildRoutePath } from "./utils/build-route-path.js"
import { paramsRequired, idExist } from './utils/validate-params.js'
import { datetime } from './utils/handle-date.js'

const database = new Database()

export const routes = [
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handle: (req, res) => {
      const { title, description } = req.body

      try {
        paramsRequired(title, description)
        const date_time = datetime()
      
        const task = {
          id: randomUUID(),
          title,
          description,
          completed_at: null,
          created_at: date_time,
          updated_at: date_time
        }
        
        database.insert('tasks', task)

      } catch (error) {
        return res.writeHead(400).end(error)
      }
      
      return res.writeHead(201).end()
    }
  },
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handle: (req, res) => {
      const { search } = req.query

      const users = database.select('tasks', search ? {
        title: search,
        description: search
      } : null)

			return res
				.writeHead(200, {
					'Content-Type': 'aplication/json'
				})
				.end(JSON.stringify(users))
    }
  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handle: (req, res) => {
      const { id } = req.params
      const { title, description } = req.body

      try {
        const tasks = database.select('tasks', null)
        idExist(id, tasks)
        paramsRequired(title, description)

        database.update('tasks', id, {
          title,
          description,
          updated_at: datetime()
        })

      } catch (error) {

        if (error === 'id não encontrado'){
          return res.writeHead(404).end(error)
        }

        return res.writeHead(400).end(error)
      }
    
      return res.writeHead(204).end()
    }
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handle: (req, res) => {
      const { id } = req.params

      try {
        const tasks = database.select('tasks', null)
        idExist(id, tasks)
        
        database.delete('tasks', id)

      } catch (error) {
        return res.writeHead(404).end(error)
      }

      return res.writeHead(204).end()
    }
  },
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    handle: (req, res) => {
      const { id } = req.params

      try {
        const tasks = database.select('tasks', null)
        idExist(id, tasks)
        
        database.update('tasks', id, {
          completed_at: true,
          updated_at: datetime()
        })

      } catch (error) {
        return res.writeHead(404).end(error)
      }
      return res.writeHead(204).end()
    }
  },


]