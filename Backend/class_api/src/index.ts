import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { activityRoutes } from './routes/activityRoutes.js'

const app = new Hono()

app.get('/', (c) => {
  return c.text('API FUNCIONANDO!')
})

// Ruta principal para solicitudes relacionadas con actividades de servicio o prácticas.
app.route('/activities', activityRoutes)

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
