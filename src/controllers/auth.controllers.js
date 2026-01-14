import { usersCollection, sessionsCollection } from "../database/db.js"
import {v4 as uuidV4 } from "uuid"
import bcrypt from "bcrypt"

export async function signUp(req, res) {
    const user = req.body
    const hashPassword = bcrypt.hashSync(user.password, 10)

    try {
        await usersCollection.insertOne({ ...user, password: hashPassword })
        res.sendStatus(201)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export async function signIn(req, res) {
    const user = res.locals.user

    const token = uuidV4()

    try {
        await sessionsCollection.insertOne({ token, userId: user._id })
        res.status(200).send({ token })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}