
export async function addProductsCartValidation (req, res, next) {
    const user = res.locals.user
    const { name, price, qtd, img } = req.body

    const cart = {
        name,
        price,
        qtd,
        img,
        user: user._id
    }

    res.locals.cart = cart

    next()
}