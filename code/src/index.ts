import { build } from './app.js'

const start = async () => {
  try {
    const fastify = await build()

    const port = Number(process.env.PORT) || 3000
    const host = process.env.HOST || '0.0.0.0'

    await fastify.listen({ port, host })
    fastify.log.info(`Server listening on ${host}:${port}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()