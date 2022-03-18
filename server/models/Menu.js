const { Schema, model } = require('mongoose');

const MenuSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    }, 
    meal_time: {
        type: String
    },
    category: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    quantity: {
        type: Number,
        min: 0,
        default: 0
    }
})

// create the Pizza model using the PizzaSchema
const Menu = model('Menu', MenuSchema);

// export the Pizza model
module.exports = Menu;

// export const MainDishes  = [
//     {
//         name: "Beef Stew",
//         price: "$ 17",
//         id: "1",
//         meal_time: "brunch",
//         category: "main",
//         image: `/assets/main/beef-stew.jpg`,
//         description: "Jelly-o I love chocolate cotton candy gingerbread liquorice sweet roll macaroon lemon drops. Cheesecake pudding macaroon jelly brownie fruitcake. Marzipan macaroon chocolate bar fruitcake I love jelly beans dessert tootsie roll",
//     },
//     {
//         name: "Chicken Salad",
//         price: "$ 14",
//         id: "2",
//         meal_time: "brunch",
//         category: "main",
//         image: `/assets/main/chicken_meal.jpg`,
//         description: "Candy powder I love liquorice bear claw ice cream. I love gingerbread I love gummies jujubes. Sweet toffee sesame snaps candy canes I love ice cream icing. Cupcake cake lemon drops dessert I love jelly beans.",
//     },
//     {
//         name: "Chicken Waffle",
//         price: "$ 15",
//         id: "3",
//         meal_time: "brunch",
//         category: "main",
//         image: `/assets/main/chicken-waffle.jpg`,
//         description: "Candy canes bonbon shortbread liquorice jelly-o jujubes toffee sugar plum carrot cake. Candy canes oat cake icing I love biscuit. Cotton candy muffin pie candy canes donut lemon drops.",
//     },
//     {
//         name: "Grill Veggie",
//         price: "$ 10",
//         id: "4",
//         meal_time: "brunch",
//         category: "main",
//         image: `/assets/main/grill-carrot.jpeg`,
//         description: "Danish macaroon marshmallow pudding danish sugar plum oat cake. Bonbon pastry apple pie sesame snaps dragée. Pudding sugar plum apple pie I love tart jelly beans I love cotton candy. Cookie candy canes tiramisu danish cheesecake I love oat cake I love croissant.",
//     },
//     {
//         name: "Salmon Meal",
//         price: "$ 18",
//         id: "5",
//         meal_time: "brunch",
//         category: "main",
//         image: `/assets/main/salmon_meal.jpg`,
//         description: "Gummies gummies shortbread pie biscuit cake. Croissant dessert liquorice carrot cake lemon drops topping. Muffin tootsie roll lemon drops cake oat cake. Cotton candy jujubes soufflé I love apple pie pudding.",
//     },
//     {
//         name: "Shrimp n Grits",
//         price: "$ 18",
//         id: "6",
//         meal_time: "brunch",
//         category: "main",
//         image: `/assets/main/shrimp-n-grits.jpg`,
//         description: "Gingerbread sweet chocolate cake cookie I love cheesecake tootsie roll. Muffin macaroon wafer I love macaroon fruitcake cheesecake pastry. Oat cake tiramisu icing macaroon sweet roll pudding cupcake.",
//     },
//     {
//         name: "Spinach Lasagna",
//         price: "$ 12",
//         id: "7",
//         meal_time: "brunch",
//         category: "main",
//         image: `/assets/main/spinach_lasagna.jpg`,
//         description: "Powder brownie carrot cake chocolate bar apple pie. Jujubes I love gummies I love cake cake. Pie soufflé tiramisu oat cake jelly-o fruitcake chupa chups donut. Sweet roll marzipan powder I love gummies caramels.",
//     },
//     {
//         name: "Biscuit",
//         price: "$ 3",
//         id: "8",
//         meal_time: "brunch",
//         category: "sides",
//         image: `/assets/sides/Biscuits.jpg`,
//         description: "Oat cake wafer cookie pudding I love liquorice. I love sesame snaps dessert candy canes ice cream halvah sweet carrot cake. Wafer sweet carrot cake I love cupcake I love.",
//     },
//     {
//         name: "Deviled Eggs",
//         price: "$ 5",
//         id: "9",
//         meal_time: "brunch",
//         category: "sides",
//         image: `/assets/sides/deviled-eggs.jpg`,
//         description: "Jelly beans donut marzipan I love powder jelly muffin pie. Donut I love I love gingerbread cake toffee cake pudding. Icing croissant caramels sugar plum halvah wafer.",
//     },
//     {
//         name: "Stir fry veggies",
//         price: "$ 7",
//         id: "10",
//         meal_time: "brunch",
//         category: "sides",
//         image: `/assets/sides/green-collar.jpg`,
//         description: "Tiramisu cake chupa chups danish topping I love sugar plum. I love biscuit biscuit topping danish shortbread candy jelly beans. Candy canes candy canes cupcake pastry sweet roll ice cream dessert. Carrot cake macaroon gingerbread powder dessert I love marshmallow I love I love.",
//     },
//     {
//         name: "Mac n Cheese",
//         price: "$ 3",
//         id: "11",
//         meal_time: "brunch",
//         category: "sides",
//         image: `/assets/sides/mac-n-cheese.png`,
//         description: "Soufflé cotton candy cotton candy gummies donut cake cookie. Halvah lollipop croissant bear claw cake shortbread tart apple pie sweet roll. Pastry dessert wafer marshmallow cotton candy I love. Liquorice apple pie toffee I love shortbread gummies cheesecake.",
//     },
//     {
//         name: "Carrot Cake",
//         price: "$ 5",
//         id: "12",
//         meal_time: "brunch",
//         category: "desserts",
//         image: `/assets/desserts/carrot-cake.jpg`,
//         description: "Oat cake wafer cookie pudding I love liquorice. I love sesame snaps dessert candy canes ice cream halvah sweet carrot cake. Wafer sweet carrot cake I love cupcake I love.",
//     },
//     {
//         name: "Chocolate Brownie",
//         price: "$ 5",
//         id: "13",
//         meal_time: "brunch",
//         category: "desserts",
//         image: `/assets/desserts/chocolate-brownie.jpg`,
//         description: "Jelly beans donut marzipan I love powder jelly muffin pie. Donut I love I love gingerbread cake toffee cake pudding. Icing croissant caramels sugar plum halvah wafer.",
//     },
//     {
//         name: "Pecan Pie",
//         price: "$ 5",
//         id: "14",
//         meal_time: "brunch",
//         category: "desserts",
//         image: `/assets/desserts/pecan-pie.jpeg`,
//         description: "Tiramisu cake chupa chups danish topping I love sugar plum. I love biscuit biscuit topping danish shortbread candy jelly beans. Candy canes candy canes cupcake pastry sweet roll ice cream dessert. Carrot cake macaroon gingerbread powder dessert I love marshmallow I love I love.",
//     },
//     {
//         name: "Red Velvet Cake",
//         price: "$ 5",
//         id: "15",
//         meal_time: "brunch",
//         category: "desserts",
//         image: `/assets/desserts/Red-Velvet.png`,
//         description: "Soufflé cotton candy cotton candy gummies donut cake cookie. Halvah lollipop croissant bear claw cake shortbread tart apple pie sweet roll. Pastry dessert wafer marshmallow cotton candy I love. Liquorice apple pie toffee I love shortbread gummies cheesecake.",
//     },
// ] 
