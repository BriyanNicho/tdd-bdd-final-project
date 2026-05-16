const { faker } = require('@faker-js/faker');

/**
 * Membuat data Product palsu secara acak untuk keperluan testing
 */
const fakeProduct = () => {
    return {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        category: faker.commerce.department(),
        price: parseFloat(faker.commerce.price()),
        available: faker.datatype.boolean()
    };
};

module.exports = { fakeProduct };