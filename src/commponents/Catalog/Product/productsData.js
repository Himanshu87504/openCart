// productsData.js
export const products = [
    {
        id: 1,
        image: "/img/apple-cinema-30.png",
        name: 'Apple Cinema 30"',
        status: "Enabled",
        model: "Product 15",
        priceOld: 100.0,
        priceNew: 90.0,
        quantity: 447,
    },
    {
        id: 2,
        image: "/img/canon-eos-5d.png",
        name: "Canon EOS 5D",
        status: "Enabled",
        model: "Product 3",
        priceOld: 100.0,
        priceNew: 80.0,
        quantity: 0,
    },
    // ...aur bhi similar objects
];

// simple loop se 40 bana lo
for (let i = 3; i <= 40; i++) {
    products.push({
        id: i,
        image: "/img/default.png",
        name: `Product ${i}`,
        status: "Enabled",
        model: `Model ${i}`,
        priceOld: 100.0,
        priceNew: 100.0,
        quantity: i % 2 === 0 ? 1000 : 0,
    });
}
