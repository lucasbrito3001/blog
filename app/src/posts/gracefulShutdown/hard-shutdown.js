export default `const express = require('express')
const app = express()

const PORT = 3000

app.get('/', (req, res) => {
    setTimeout(() => {
        res.status(200).send('Hello world!')
    }, 5000)
})

app.listen(PORT, () => console.log('The server is running on port: ' + PORT))`