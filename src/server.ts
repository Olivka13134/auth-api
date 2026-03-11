import 'dotenv/config'

import app from "./app"
import { sequelize } from "./config/database"

const PORT = 3000

async function start() {
    console.log(process.env.DB_USER)

    await sequelize.sync()

    app.listen(PORT,()=>{
        console.log("Server running")
    })
}

start()