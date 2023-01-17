import { H3Event } from 'h3'
import fs from 'fs';
export default defineEventHandler((event: H3Event) => {
  event.node.res.setHeader('Content-type', 'application/wasm')
  return fs.readFileSync('sum.wasm')
})

