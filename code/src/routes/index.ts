import { FastifyPluginAsync } from 'fastify'

const indexPlugin: FastifyPluginAsync = async function (fastify, opts) {
  fastify.get('/', async (request, reply) => {
    return reply.view('index.ejs', {
      title: 'Fastify App',
      message: 'Benvenuto nella tua applicazione Fastify!'
    })
  })
}

export default indexPlugin