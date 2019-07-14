import app from '../app'
import '../config'

const port = process.env.API_PORT

app.listen(port, () => console.log(`listening on ${port}`))
