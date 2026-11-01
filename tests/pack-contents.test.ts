/// <reference types="node" />
import { execFileSync } from 'node:child_process'
import { mkdtempSync, readdirSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { afterAll, describe, expect, it } from 'vitest'

const PACK_TIMEOUT_MS = 60_000
const PACKAGE_ROOT = dirname(import.meta.dirname)

function packedFiles(destination: string): string[] {
  execFileSync('pnpm', ['pack', '--pack-destination', destination], {
    cwd: PACKAGE_ROOT,
    stdio: 'pipe'
  })
  const tarball = readdirSync(destination).find((name) => name.endsWith('.tgz'))
  if (!tarball) {
    throw new Error('pnpm pack did not produce a tarball')
  }
  return execFileSync('tar', ['-tzf', join(destination, tarball)], {
    encoding: 'utf-8'
  })
    .split('\n')
    .filter((line) => line.length > 0)
}

describe('npm package contents', () => {
  const destination = mkdtempSync(join(tmpdir(), 'quyuan-pack-'))

  afterAll(() => {
    rmSync(destination, { recursive: true, force: true })
  })

  it(
    'ships the entry files and leaves out test sources and their types',
    () => {
      const files = packedFiles(destination)

      expect(files.filter((file) => file.includes('.test.'))).toEqual([])
      expect(files).toEqual(
        expect.arrayContaining([
          'package/dist/index.d.ts',
          'package/dist/template.d.ts',
          'package/dist/quyuan.js'
        ])
      )
    },
    PACK_TIMEOUT_MS
  )
})
