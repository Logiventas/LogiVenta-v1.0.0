import express, { Response } from 'express' // Uso de ES6 import

const app = express()
const port = process.env.PORT || 8080 // Establece el puerto

// Ejemplo de ajustes en las rutas
app.get('/', (_, res: Response) => {
  res.json({ mensaje: '¡Hola Mundo!' })
})

app.get('/cervezas', (_, res: Response) => {
  res.json({ mensaje: '¡A beber cerveza!' })
})

app.post('/', (_, res: Response) => {
  res.json({ mensaje: 'Método post' })
})

app.delete('/', (_, res: Response) => {
  res.json({ mensaje: 'Método delete' })
})

app.listen(port, () => {
  console.log(`API escuchando en el puerto ${port}`)
})
