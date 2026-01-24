import { cartCollection } from "../database/db.js"


export async function addProductsCart(req, res) {
    const cart = res.locals.cart

    try {
        const existProduct = await cartCollection.findOne(cart)
        if(existProduct) {
            return res.sendStatus(401).console.log("produo já existe")
        }
        await cartCollection.insertOne(cart)
        res.sendStatus(201)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export async function findProducts(req, res) {
    const user = res.locals.user

    try {
        const carts = await cartCollection
            .find({ user: user._id })
            .toArray()

        delete user.password
        res.send({ carts, user })

    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}