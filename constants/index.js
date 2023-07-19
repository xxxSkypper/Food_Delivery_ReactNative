export const categories = [
    {
        id: 1,
        name: 'All',
        image: require('../assets/categories/icons8-hamburger-96.png'),
    },
    {
        id: 2,
        name: 'Burger',
        image: require('../assets/categories/icons8-pizza-96.png'),
    },
    {
        id: 3,
        name: 'Italian',
        image: require('../assets/categories/icons8-cupcake-emoji-96.png'),
    },
    {
        id: 4,
        name: 'Chinese',
        image: require('../assets/categories/icons8-takeout-box-96.png'),
    },
    {
        id: 5,
        name: 'Noodles',
        image: require('../assets/categories/icons8-spaghetti-96.png'),
    },
    {
        id: 6,
        name: 'Sweets',
        image: require('../assets/categories/icons8-tropical-drink-96.png'),
    },

]


export const featured = {
            id: 1,
            title: ['Popular food', 'Recent food', 'All food'],
            
    restaurants: [
        {
            id: 1,
            name: 'Fries Fish',
            images: require('../assets/restaurants/image1.jpeg'),
            description: 'Hot and spicy chicken',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.7k',
            category: '3.7 ',
            dishes: [
                {
                   id: 1,
                   name: 'Pancakes',
                   description: 'sweet',
                   price: 8,
                   image:  require('../assets/dishes/download2.jpeg')
                },
                {
                   id: 2,
                   name: 'Samousa',
                   description: 'cheezy',
                   price: 10,
                   image:  require('../assets/dishes/download3.jpeg')
                },
                {
                   id: 3,
                   name: 'Soya',
                   description: 'jelly',
                   price: 6,
                   image:  require('../assets/dishes/download4.jpeg')
                },
            ]
    
        },
        {
            id: 2,
            name:'Chicken & Hot Pizza',
            images: require('../assets/restaurants/image2.jpg'),
            description: '1 1/2 cups(355 ml)warm water (105degree Celsius - 115degree Celsius), 1 package (2 1/4 teaspoons) active dry yeast, 3/4 cups (490g) bread flour.',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '6.1k',
            category: '4.1 ',
            dishes: [
                {
                   id: 1,
                   name: 'Fries Chicken',
                   description: 'yummy',
                   price: 5,
                   image:  require('../assets/dishes/download1.jpeg')
                },
                {
                   id: 2,
                   name: 'Meat',
                   description: 'cheezy',
                   price: 12,
                   image:  require('../assets/dishes/download10.jpeg')
                },
                {
                   id: 3,
                   name: 'Fries Meal',
                   description: 'yummy',
                   price: 9,
                   image:  require('../assets/dishes/download6.jpeg')
                },
            ]
    
        },
        {
            id: 3,
            name: 'Vegetables',
            images: require('../assets/restaurants/image3.jpg'),
            description: 'Delicious Food',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '8.4k',
            category: '4.8 ',
            dishes: [
                {
                   id: 1,
                   name: 'Fries Rice',
                   description: 'cheezy',
                   price: 7,
                   image:  require('../assets/dishes/download7.jpeg')
                },
                {
                   id: 2,
                   name: 'Soup',
                   description: 'delicious',
                   price: 20,
                   image:  require('../assets/dishes/download8.jpeg')
                },
                {
                   id: 3,
                   name: 'Fries Fish',
                   description: 'yummy',
                   price: 15,
                   image:  require('../assets/dishes/download9.jpeg')
                },
            ]
    
        }
    ]
}