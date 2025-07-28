#!/usr/bin/env node

import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, copyFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = join(__dirname, '..')

function copyDirectory(src, dest) {
  try {
    // Create destination directory if it doesn't exist
    mkdirSync(dest, { recursive: true })
    
    // Read source directory
    const entries = readdirSync(src, { withFileTypes: true })
    
    for (const entry of entries) {
      const srcPath = join(src, entry.name)
      const destPath = join(dest, entry.name)
      
      if (entry.isDirectory()) {
        copyDirectory(srcPath, destPath)
      } else {
        copyFileSync(srcPath, destPath)
      }
    }
    
    console.log(`✅ Copied ${src} -> ${dest}`)
  } catch (error) {
    console.error(`❌ Error copying ${src}:`, error.message)
    process.exit(1)
  }
}

console.log('📦 Copying assets for production build...')

// Copy views directory
const viewsSource = join(rootDir, 'views')
const viewsDest = join(rootDir, 'dist', 'views')
copyDirectory(viewsSource, viewsDest)

// Copy public directory
const publicSource = join(rootDir, 'public')
const publicDest = join(rootDir, 'dist', 'public')
copyDirectory(publicSource, publicDest)

console.log('✨ Assets copied successfully!')