import { FastifyPluginAsync } from 'fastify'

const healthPlugin: FastifyPluginAsync = async function (fastify, opts) {
  fastify.get('/health', async (request, reply) => {
    return { 
      status: 'ok', 
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: process.version
    }
  })
}

export default healthPlugin