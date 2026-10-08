
import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'

const files = ['src/cart.js', 'test/cart.test.js']
let errors = 0

for (const file of files) {
  // Check JavaScript syntax
  const result = spawnSync(
    process.execPath,
    ['--check', file],
    { encoding: 'utf8' }
  )

  if (result.status !== 0) {
    console.error(`Syntax error in ${file}`)
    console.error(result.stderr)
    errors++
  }

  const content = readFileSync(file, 'utf8')
  const lines = content.split(/\r?\n/)

  lines.forEach((line, index) => {
    const lineNumber = index + 1

    if (line.includes('\t')) {
      console.error(`${file}:${lineNumber}: Tab found`)
      errors++
    }

    if (/[ \t]+$/.test(line)) {
      console.error(`${file}:${lineNumber}: Trailing whitespace`)
      errors++
    }

    if (/^\s*var\s/.test(line)) {
      console.error(`${file}:${lineNumber}: Do not use var`)
      errors++
    }
  })

  if (!content.endsWith('\n')) {
    console.error(`${file}: Missing final newline`)
    errors++
  }
}

if (errors > 0) {
  console.error(`Lint failed: ${errors} problem(s)`)
  process.exitCode = 1
} else {
  console.log('Lint passed')
}
