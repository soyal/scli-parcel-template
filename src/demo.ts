import Koa from 'koa'

const a = '123'

function test(a, b, c, d, e, f, g, h) {
  return a + b + c + d + e + f
}

test(
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  'bbbnbbbbbbbbbbbbbbbbbbbbbbbb',
  'ccc',
  'ddd',
  'eee',
  'fff',
  'ggg',
  'hhh'
)
