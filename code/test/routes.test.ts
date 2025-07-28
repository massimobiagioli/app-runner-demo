import { test } from 'node:test'
import { strict as assert } from 'node:assert'
import { build } from '../src/app.js'
import { FastifyInstance } from 'fastify'

test('homepage should return HTML', async (t) => {
    let app: FastifyInstance | undefined
    
    try {
        app = await build({ logger: false })
        
        const response = await app.inject({
            method: 'GET',
            url: '/'
        })

        assert.equal(response.statusCode, 200)
        assert.ok(String(response.headers['content-type']).includes('text/html'))
        assert.ok(response.payload.includes('Fastify App'))
    } catch (error) {
        console.error('Homepage test error:', error)
        throw error
    } finally {
        if (app) {
            await app.close()
        }
    }
})

test('static files should be served', async (t) => {
    let app: FastifyInstance | undefined
    
    try {
        app = await build({ logger: false })
        
        const response = await app.inject({
            method: 'GET',
            url: '/public/css/style.css'
        })

        assert.equal(response.statusCode, 200)
        assert.ok(String(response.headers['content-type']).includes('text/css'))
    } catch (error) {
        console.error('Static files test error:', error)
        throw error
    } finally {
        if (app) {
            await app.close()
        }
    }
})