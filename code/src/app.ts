import Fastify, { FastifyInstance } from 'fastify'
import fastifyStatic from '@fastify/static'
import fastifyView from '@fastify/view'
import ejs from 'ejs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export async function build(opts = {}): Promise<FastifyInstance> {
  const fastify = Fastify({
    logger: true,
    ...opts
  })

  // Register static files plugin
  await fastify.register(fastifyStatic, {
    root: join(__dirname, '..', 'public'),
    prefix: '/public/'
  })

  // Register view engine
  await fastify.register(fastifyView, {
    engine: {
      ejs: ejs
    },
    root: join(__dirname, '..', 'views')
  })

  // Register routes inline to avoid import issues
  await fastify.register(async function (fastify) {
    fastify.get('/', async (request, reply) => {
      return reply.view('index.ejs', {
        title: 'Fastify App',
        message: 'Benvenuto nella tua applicazione Fastify!'
      })
    })
  })

  await fastify.register(async function (fastify) {
    fastify.get('/health', async (request, reply) => {
      return { 
        status: 'ok', 
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        version: process.version
      }
    })
  })

  return fastify
}