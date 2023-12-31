// 15. Calculate the percentage of the discount
// A retail store is offering a discount on its products and wants to calculate the percentage of the discount to
// show customers how much they can save. Given the original price and the discounted price of a product,
// implement an arrow function to calculate the percentage of the discount rounded off to two decimal places.
// This function could be useful for the store's marketing team to create promotions and offers that attract
// customers.

const discountPercentage = (originalPrice, discountPrice) => {

    const discountAmount = originalPrice - discountPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;

    console.log(discountPercentage.toFixed(2));
}

const originalPrice = 150;
const discountPrice = 55;

discountPercentage(originalPrice, discountPrice);