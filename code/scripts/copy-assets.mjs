import { cpSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = join(__dirname, '..')

try {
  console.log('📦 Copying assets...')
  
  // Copy views directory
  cpSync(join(rootDir, 'views'), join(rootDir, 'dist', 'views'), { 
    recursive: true,
    force: true 
  })
  console.log('✅ Copied views/')
  
  // Copy public directory  
  cpSync(join(rootDir, 'public'), join(rootDir, 'dist', 'public'), { 
    recursive: true,
    force: true 
  })
  console.log('✅ Copied public/')
  
  console.log('✨ Assets copied successfully!')
} catch (error) {
  console.error('❌ Error copying assets:', error.message)
  process.exit(1)
}