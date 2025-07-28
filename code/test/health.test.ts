import { test } from 'node:test'
import { strict as assert } from 'node:assert'
import { build } from '../src/app.js'
import { FastifyInstance } from 'fastify'

test('health endpoint should return ok status', async (t) => {
    let app: FastifyInstance | undefined

    try {
        app = await build({ logger: false })

        const response = await app.inject({
            method: 'GET',
            url: '/health'
        })

        assert.equal(response.statusCode, 200)

        const payload = JSON.parse(response.payload)
        assert.equal(payload.status, 'ok')
        assert.ok(payload.timestamp)
        assert.ok(typeof payload.uptime === 'number')
        assert.ok(payload.version)
    } catch (error) {
        console.error('Test error:', error)
        throw error
    } finally {
        if (app) {
            await app.close()
        }
    }
})