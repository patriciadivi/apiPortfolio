import fastify from 'fastify';

const app = fastify()

app.get('/hello', () => {
  return 'Hello World.kkk.!'
})

app.listen({
  port: 3333,
}).then((port) => {
  console.log(`Server is running on http://localhost:${port}`)
})