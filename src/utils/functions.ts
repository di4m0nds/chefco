export const getDiscount = (cartCount: number, discount: number, individual: number): number | null => {
    let totalPriceDiscount = 0

    if (cartCount < 2) return null
    if (cartCount === 2) return discount

    const totalCountDiscount = getTotalCountDiscount(cartCount)
    totalPriceDiscount = totalCountDiscount * discount

    if (cartCount / 2 !== totalCountDiscount) {
        totalPriceDiscount += individual
    }

    return totalPriceDiscount
}

export const getTotalCountDiscount = (cartCount: number): number => Math.floor(cartCount / 2);