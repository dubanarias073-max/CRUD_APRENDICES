require("dotenv").config()

const {prismapg} = require("@prisma/adapter-pg")
const {prismaClient} = require("@prisma/client")
const { connection } = require("mongoose")

const adaptador = prismapg({
    connectionString: precces.env.DATABASE_URL
})

const prisma = new prismaClient ({adaptador})

module.exports =prisma