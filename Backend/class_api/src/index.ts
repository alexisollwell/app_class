import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { activityRoutes } from './routes/activityRoutes.js'
import { servicesRoutes } from './routes/servicesRoutes.js'
import { authMiddleware } from './middlewares/verifying.js'
import { auth } from './routes/login.js'
import { profile } from './routes/profileRoutes.js'


const app = new Hono()
//app.use("*", authMiddleware)
app.get('/', (c) => {
  return c.text('API FUNCIONANDO!')
})

// Ruta principal para solicitudes relacionadas con actividades de servicio o prácticas.
app.route('/auth', auth);
app.route('/activities', activityRoutes);
app.route('/service', servicesRoutes);
app.route('/profile', profile);

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
