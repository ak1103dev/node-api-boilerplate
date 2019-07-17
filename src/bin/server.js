import app from '../app'
const port = process.env.API_PORT

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`listening on ${port}`))
