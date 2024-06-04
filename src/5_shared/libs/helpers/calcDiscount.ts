function calculateDiscount(oldPrice: number, newPrice: number): number {
    if (newPrice >= oldPrice) {
        throw new Error('Новая цена должна быть меньше старой цены');
    }

    const discount = oldPrice - newPrice;
    const discountPercentage = (discount / oldPrice) * 100;

    return Math.floor(discountPercentage);
}

export {
    calculateDiscount,
};
