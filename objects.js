// const account ={
//     agency: '0985',
//     bank:{
//         cod: '012',
//         id:4,
//         name: 'TyrbeBank'
//     },
// };

// console.log(account.bank.cod);

// const user = {
//     id: 99,
//     email: 'saintlucas@hotmail.com',
//     info:{
//         name: 'Fellipe',
//         lasName: 'Barnabé',
//         address:{
//             street: 'Rua Luiz Gomes, 116 - térreo',
//             district: 'Goiana',
//             city: 'Centro',
//             state: 'Pernambuco',

//         },
//     },
// };


// console.log(user.info.address.city);


// const residents = [
//     {
//         name:'Fellipe',
//         lasName: 'Barnabé',
//         floor: 10,
//         apartment: 1005,

//     },
//     {
//         name: 'Sandra',
//         lasName:'Barnabé',
//         floor: 5,
//         apartment: 502,
//     },
//     {
//         name:'Willian',
//         Lastname: 'Albuquerque',
//         floor: 5,
//         apartment: 502,
//     },
//     {
//         name: 'Murilo',
//         lasName: 'Ferraz',
//         floor: 8,
//         apartment: 804,
//     },
//     {
//         name: 'Zoey',
//         LastName: 'Brooks',
//         floor:1,
//         apartment: 101,
//     },
// ];
// // const firstResident = residents[0];
// // console.log(firstResident);

// const secondResident = residents [0];
// console.log(secondResident);

// const residents = [
//     {
//         name: 'Luiza',
//         lastName: 'Guimarães',
//         floor: 10,
//         apartment: 1005,
//     },
//     {
//         name: 'William',
//         lastName: 'Albuquerque',
//         floor:5,
//         apartment: 502,
//     },
//     {
//         name: 'Murilo',
//         lastName: 'Ferraz',
//         floor: 8,
//         apartment: 804,

//     },
//     {
//         name: 'Zoey',
//         lastName: 'Brooks',
//         floor: 1,
//         apartment: 101,
//     },
// ];

// const firstResidentresident = residents[residents.length -1];
// console.log(firstResidentresident.floor);
// console.log(firstResidentresident.apartment);
// console.log(firstResidentresident.lartName);

// for (let index= 0; index< residents.length; index +=1){
//     const resident = residents [index];
//     console.log(resident.name);
// };

// for(let index=0; index < residents.length; index +=1){
//     const lastName = residents[index];
//     console.log(lastName.lastName);
// }

// for(let index = 0; index < residents.length; index +=1){
//     const floor = residents[index];
//     console.log(floor.floor);
// }

// for(index =0; index < residents.length; index +=1){
//     const resident = residents[index];
//     console.log(resident.name);
// }


// const products = [
//     {
//       product: "Leite",
//       price: 3.49,
//       available: true,
//       categories: ["Laticínios", "Bebidas"],
//       stock: {
//         quantity: 100,
//         location: "Corredor 2, PrateleiraC",
//       },
//       supplier: {
//         name: "Laticínios Delícia",
//         contact: {
//           phone: "987654321",
//           email: "contato@laticiniosedelicia.com"
//         },
//       },
//       reviews: [
//         { user: "Cliente1", rating: 4 },
//         { user: "Cliente2", rating: 5 },
//         { user: "Cliente3", rating: 5 },
//       ],
//     },
//     {
//       product: "Cereal",
//       price: 4.99,
//       available: true,
//       categories: ["Café da manhã", "Mercearia"],
//       stock: {
//         quantity: 50,
//         location: "Corredor 4, Prateleira A",
//       },
//       supplier: {
//         name: "Comidas Saudáveis Ltda.",
//         contact: {
//           phone: "123456789",
//           email: "contato@comidassaudaveis.com",
//         },
//       },
//       reviews: [
//         { user: "Cliente1", rating: 3 },
//         { user: "Cliente2", rating: 4 },
//         { user: "Cliente3", rating: 5 },
//       ]
//     },
//     {
//       product: "Sabonete",
//       price: 2.99,
//       available: true,
//       categories: ["Higiene", "Cosméticos"],
//       stock: {
//         quantity: 200,
//         location: "Corredor 1, Prateleira B",
//       },
//       supplier: {
//         name: "Indústria de Cosméticos Beleza Pura",
//         contact: {
//           phone: "987654321",
//           email: "contato@belezapura.com",
//         },
//       },
//       reviews: [
//         { user: "Cliente1", rating: 4 },
//         { user: "Cliente2", rating: 5 },
//         { user: "Cliente3", rating: 4 },
//       ],
//     },
//     {
//       product: "Café",
//       price: 8.99,
//       available: true,
//       categories: ["Bebidas", "Mercearia"],
//       stock: {
//         quantity: 150,
//         location: "Corredor 3, Prateleira C",
//       },
//       supplier: {
//         name: "Café Delicioso",
//         contact: {
//           phone: "012345678",
//           email: "contato@cafedelioso.com",
//         },
//       },
//       reviews: [
//         { user: "Cliente1", rating: 5 },
//         { user: "Cliente2", rating: 4 },
//         { user: "Cliente3", rating: 4 },
//       ],
//     }
//   ];

//   console.log(products);


// const countProducts =(array)=>{
//     let count =0;

//     for(let index=0; index < array.length; index +=1){
//         count += array[index].stock.quantity;
//     }
//     return count;
// };
// console.log(countProducts(products));


// const countCategories = (array) =>{
//     let count = 0;

//     for(let index=0; index < array.length; index +=1){
//         count += array[index].categories;
//     }
//     return count;
// }

// console.log(countCategories(products));


// const countContact = (array) =>{
//     let count =0;

//     for(let index =0; index < array.length; index +=1){
//         count += array[index].supplier.contact.email;
//     }
//     return count;
// };
// console.log(countContact(products));


// const addProperty = (array, name) =>{

//     for(let index =0; index < array.length; index +=1){
//         array[index][name].push({user:"Cliente4", rating:5});
//     }

// };

// addProperty(products,'reviews');
// console.log(products[0]);

// const addCategory = (array, name) => {

//     for(let index=0; index < array.length; index +=1){
//         array[index][name].push("Capoccino", "Café com leite");
//     }
// };


// addCategory(products,'categories');
// console.log(products);


// const addEmail = (array, email)=>{

//     for(let index = 0; index < array.length; index +=1){
//         array[index][email] = "saintlucas@gmail.com";
//     }
// };

// addEmail(products,'email');
// console.log(products);

// const addPhone = (array, phone)=>{

//     for(let index =0; index < array.length; index +=1){
//         array[index][phone] = "55 081991053338";
//     }
// }

// addPhone(products, 'phone');
// console.log(products);




// const name = 'Maria';
// const lastName ="Silva";
// const age = 34; 
// const medals = {golden: 2, silver:3};
// const bestInTheWorld = [2006,2007,2008,2009,2018];


// const player = {
//     name: 'Maria',
//     lastName: 'Silva',
//     age: 34,
//     medals : {golden: 2, silver: 3},
//     bestInTheWorld : [2006,2007,2008,2009,2018],
// }


// const message = `A jogadora ${player.name} da ${player.lastName} tem ${player.age} de idade`;
// const history = `Ela possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata, alem de ser a melhor do mundo nos anos de ${player.bestInTheWorld}`;
// const theBest = `Ela possui os títulos de melhor do mundo nos anos de ${player.bestInTheWorld}`;

// console.log(message);
// console.log(history);
// console.log(theBest);

// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Software Engineer',
// }

// // customer.lastname="Faria";
// // customer['lastName'] = 'Silva';
// // console.log(customer);

// // const addProperly = (object, key, value)=>{

// //     if(typeof object[key]=== "undefined"){
// //         object[key] = value;
// //     }
// // };

// // addProperly(customer, 'birthPlace', '19/07/1932');

// // console.log(customer);

// const addProperly = (object, key, value) =>{  // a função addProperly adiciona duas propriedades recebendo os parâmetros object que a chamada será do objeto costumer, key que será o segundo parâmetro, e o value que é a propriedade 

//     if(typeof object[key] === 'undefined'){ // o if usando o método typeof compara que se o parâmetro object quando receber o parâmetro key é igual a undefied , compara se já há uma propriedade com esse nome
//         object[key] = value;  // se não haver nenhuma propriedade com o nome passado, o object key receberá o value
//     }

// }

// addProperly(customer, 'birthPlace', '19/07/1932');
// addProperly(customer, 'email', 'saintluas@hotmail.com');
// addProperly(customer,'Phone', '81 991053338');
// addProperly(customer, 'userGitHub','https://github.com/FellipeBarnabe');
// addProperly(customer,'linkedin','https://www.linkedin.com/feed/');
// console.log(customer);

// console.log(Object.keys(customer));

// const product = {
//     name: 'Rufles Original - 76kg',
//     price: 8.59,
//     company: 'Lina Chips',
//     nutritionInfo:{
//         carbohydrater:12,
//         sugar: 0,
//         sodium: 129,
//     }
// };


// let keys = Object.keys(product);
// console.log(keys);

// let values = Object.values(product);
// console.log(values);

// let entries = Object.entries(product);
// console.log(entries);
// console.log(entries[2][0]);

// console.log(Object.entries(product));

// const reader = {
//     name: 'Julia',
//     lastName: 'Pessoa',
//     age: 21,
//     favoritebooks: [
//         {
//             title: 'O Senhor dos Anêis - a Sociedade do Anel',
//             outhor: 'J.R.R.Tolkien',
//             publisher: 'Martins Fontes',
//         },

//     ],
// };

// let keys = Object.keys(reader);
// console.log(reader);

// let entries = Object.entries(reader);
// console.log(entries[0]);
// console.log(entries[3][1]);


const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    adress:{
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza:{
            marguerita:{
                amount:1,
                price:25,
            },
        },
    },
    drinks:{
        coke:{
            type: 'Cola Cola Zero',
            price:10,
            amount:1,
        },
    },
    payment:{
        total:60,
    },
};

const costumerInfo = (fullOrder) =>{
    
    
    let message = `Ola, Ana silveira, entrega para ${order.name}, telefone: ${order.phoneNumber}, ${order.adress.street} número ${order.adress.number} Apt:${order.adress.apartment} `;
    return message;
    
};

console.log(costumerInfo(order));


const orderModifier = (orderMod)=>{

let message =`Ola Luiz Silva, o valor total de seu pedido de ${order.order.pizza.marguerita.amount} é ${order.pizza}, pepperoni e ${order.drinks.coke.price} é $50`;
return message;

}

console.log(orderModifier(order));