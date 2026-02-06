import { execSync } from 'node:child_process'
import { existsSync, rmSync, mkdirSync, cpSync } from 'node:fs'
import path from 'node:path'

const siteDir = process.cwd()
const blogDir = path.resolve(siteDir, '..', 'memejpg-website-blog')
const blogPublicDir = path.join(blogDir, 'public')
const targetDir = path.resolve(siteDir, 'public', 'blog')

if (!existsSync(blogDir)) {
  throw new Error(`Blog project not found at ${blogDir}`)
}

execSync('npm install --no-audit --no-fund', { cwd: blogDir, stdio: 'inherit' })
execSync('npm run build', { cwd: blogDir, stdio: 'inherit' })

if (!existsSync(blogPublicDir)) {
  throw new Error('Blog public output not found. Did the build succeed?')
}

rmSync(targetDir, { recursive: true, force: true })
mkdirSync(targetDir, { recursive: true })
cpSync(blogPublicDir, targetDir, { recursive: true })

console.log(`Blog assets copied to ${targetDir}`)
