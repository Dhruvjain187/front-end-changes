export const ProductData = [
    {
        id: '66d3f99d63791d69b99e780b',
        brand: 'Pierce Gym Short',
        price: 27,
        color: ["red", "brown"],
        size: ["S"],
        image: 'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh12-red_back.jpg.webp',
    },
    {
        id: '66d3f99d63791d69b99e780c',
        brand: 'Arcadio Gym Short',
        price: 20,
        color: ["blue", "black"],
        size: [],
        image: 'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh11-blue_back.jpg.webp',
    },
    {
        id: '66d3f99d63791d69b99e780d',
        brand: 'Sol Active Short',
        price: 32,
        color: ["white"],
        size: [],
        image: 'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh10-blue_alt1.jpg.webp',
    },
    {
        id: '66d3f99d63791d69b99e780e',
        brand: 'Troy Yoga Short',
        price: 24,
        color: ["white", "orange"],
        size: ["M", "S", "O", 32],
        image: 'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh09-blue_alt1.jpg.webp',
    },
    {
        id: '66d3f99d63791d69b99e780f',
        brand: 'Orestes Fitness Short',
        price: 35,
        color: ["white", "orange"],
        size: [],
        image: 'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh08-black_back.jpg.webp',
    },
    {
        id: '66d3f99d63791d69b99e7810',
        brand: 'Rapha Sports Short',
        price: 35,
        color: ["white"],
        size: ["XL", "XS", 32],
        image: 'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh07-black_alt1.jpg.webp',
    },
    {
        id: '66d3f99d63791d69b99e7811',
        brand: 'Lona Yoga Short',
        price: 32,
        color: ["yellow"],
        size: ["XL", "XS", "O", 34],
        image: 'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh06-gray_alt1.jpg.webp',
    },
    {
        id: '66d3f99d63791d69b99e7812',
        brand: 'Hawkeye Yoga Short',
        price: 29,
        color: ["white"],
        size: ["M", "S", "O", 32],
        image: 'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh05-gray_alt1.jpg.webp',
    },
    {
        id: '66d3f99d63791d69b99e7813',
        brand: 'Torque Power Short',
        price: 32.5,
        color: ["white"],
        size: ["XL", "XS", "O", 34],
        image: 'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh04-gray_back.jpg.webp',
    },
    {
        id: '66d3f99d63791d69b99e7814',
        brand: 'Meteor Workout Short',
        price: 32.5,
        color: ["white"],
        size: ["M", "S", "O", 32],
        image: 'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh03-blue_alt1.jpg.webp',
    },
    {
        id: '66d3f99d63791d69b99e7815',
        brand: 'Apollo Running Short',
        price: 32.5,
        color: ["black"],
        size: ["XL", "XS", "O", 34],
        image: 'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh02-black_alt1.jpg.webp',
    },
    {
        id: '66d3f99d63791d69b99e7816',
        brand: 'Cobalt CoolTech Fitness Short',
        price: 44,
        color: ["black"],
        size: ["M", "S", "O", 32],
        image: 'https://argento-breeze-m2.swissupdemo.com/media/catalog/product/cache/dd9d4b841b5fd12ad027fd4a762e5cf8/m/s/msh01-blue_back.jpg.webp',
    }
]


export const getProductData = (id) => {
    let product = ProductData.find(el => el.id === id);
    return product
}