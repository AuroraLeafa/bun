import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/', (c) => {
  return c.text('Hello Hono!')
})

app.put('/', (c) => {
  return c.text('Hello Hono!')
})

app.delete('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
