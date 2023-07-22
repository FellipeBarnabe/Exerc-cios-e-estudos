// const product = 'iPhone 32';
// const price = 58000;
// const discount = 10;

// const message =

// `Produto: ${product}
// preço: ${price}
// Desconto: ${discount}%
// Preço com desconto: R$ ${((price -(price *(discount/100)))).toFixed(2)}`;

// console.log(message);

// const shoppingList = ['Arroz', 'batata' , 'Leite Ninho' , 'Sucrilhos'];


// shoppingList.push('Suco de laranja'); // adiciona um array no final
// shoppingList.unshift() // adiciona um elemento no inicio do array
// shoppingList.pop() //revome o último elemento do array
// shoppingList.shift() // remove o primeiro elemento do array

// console.log(shoppingList[shoppingList.length -1 ]);


//const menu = ['home', 'Serviços' , 'Porifólio', 'Links'];
////const menuServiços =menu[0];
//console.log(menuServiços);

// const menu = ['home', 'Serviços' , 'Porifólio', 'Links'];

// menu.push('Contato');

// console.log(menu);


// const laps = 60;

// for( let index =1; index <= laps; index +=1){
// console.log(`Volta ${index} completa!`);
// }

// console.log('Acabou a corrida!');



// const numbers = [2,19,23,4,8,10];

// let sum = 0;



// for( let index = 0 ; index < numbers.length; index += 1)
// {
//     sum += numbers[index];
// }

// console.log(sum);


// const listaDePreços = [2.66,6.99,15.90,85.50];


// let soma = 0; 


// for(index = 0; index < listaDePreços.length; index +=1){

//     soma += listaDePreços[index];
// }
 
// console.log(soma);

// const shopping = ['Sabão em pó', 'Macarrão', 'Leite condensado', 'Refrigerante', 'Maça' , 'Alface'];

// let itemLista = '';

// for(let index = 0; index < shopping.length; index +=1){
//     itemLista = shopping[4];
//     if(itemLista === shopping[2]){
//         console.log(`O terceiro item da lista é: ${itemLista}`);
//         break;
//     }else if( itemLista === shopping[0]){
//         console.log(`O primeiro item da lista é: ${itemLista}`)
//         break;
//     }else if(itemLista === shopping[1]){
//         console.log(`O segundo item da lista é: ${itemLista}`)
//         break;
//     }else if(itemLista === shopping[3]){
//         console.log(`O quarto item da lista é: ${itemLista}`)
//         break;
//     }else if(itemLista ===shopping[4]){
//         console.log(`O quinto item da lista é: ${itemLista}`)
//         break;
//     }else if(itemLista === shopping[5]){
//         console.log(`O sexto item da lista é ${itemLista}`)
//         break;
//     }else{
//         console.log(`Não há mais itens nessa lista`)
//         break;
//     }
// }

// const shopping = ['Sabão em pó', 'Macarrão', 'Leite condensado', 'Refrigerante', 'Maça' , 'Alface'];

// let itemLista = 'Alface';

// if (shopping.includes(itemLista)) {
//     const index = shopping.indexOf(itemLista) + 1;
//     console.log(`O ${index}º item da lista é: ${itemLista}`);
// } else {
//     console.log(`Não há mais itens nessa lista`);
// }

// const shopping= ['Sabão em pó', 'Macarrão', 'Leite condensado', 'Refrigerante', 'Maça' , 'Alface', 'Nescau'];

// for(let index = 0; index < shopping.length; index += 1){
// //console.log(index);
// //console.log(shopping[index]);

// console.log(`${index} - ${shopping[index]}`);

// }

// const cars = ['Saab', 'Volvo', 'BMW' , 'Chevrolet'];

// for(let index = 0; index < cars.length; index += 1){

//     currentCars = cars[index];
//     console.log(currentCars);

// }



// const groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia', 'Macarrão'];

// for(let index =0; index < groceryList.length; index +=1){

//     const listaShooping = groceryList[index];
//     console.log(`A lista de comprar do shooping foi: ${listaShooping}`);
// }



// const numbers = [5,9,3,19,70,8,100,2,35,27,41,26];

// let sum = 0;

// for(let index=0; index < numbers.length; index += 1){
//     //console.log(index)
//     sum += numbers[index];
// }
// if(sum / numbers.length >= 20){
//     console.log(`O valor da média aritimética é: ${sum / numbers.length} e por tanto, a média aritimética é maior que 20`)
// }else{
//     console.log(`O valor da média arimitética é: ${sum / numbers.length} e por tanto, a média aritimética é menor que 20`);
// }

//console.log(sum /numbers.length);


// const numbers = [5,9,3,19,70,8,100,2,35,27,41,26];
// let maxNumber = numbers[0];

// for(let index =0; index < maxNumber; index += 1){
//     if(typeof numbers[index] === 'number' && numbers[index] > maxNumber){
//         maxNumber =numbers[index];

//     }
// }

// console.log(`O maior valor numérico do array é: ${maxNumber}`);


// const numbers = [5,9,3,19,70,8,100,2,35,27,41,26,150]; // Variável const com um conjunto de 13 elementos e 12 indíces
// let maxNumber = ''; // variável let maxNumber que receberá o valor maior do array

// for(index = 0; index < numbers.length; index += 1){   // loop for que, usando método length, percorre todos os elementos do array 
//     if(numbers[index] > maxNumber)                      // condicional if que testa se a posição atual do array depois de ter passado pelo for, 
//                                                       //é maior que a variável maxNumber 
//     maxNumber =numbers[index];                        // a variavel maxNumber recebe a posição atual do array da variável numbers. 

// }

// console.log(`O valor máximo do array numbers é: ${maxNumber}`);




// let word ='tryber';
// let invert ='';

// for(let index = word.length -1; index >=0; index--  ){
//     invert += word[index];
// }


// console.log(invert);

// let palavra = "tryber";
// let palavraInvertida = "";

// for (let i = palavra.length - 1; i >= 0; i--) {
//   palavraInvertida += palavra[i];
// }

// console.log(palavraInvertida);



// function imprimirQuadradoAsteriscos(n){

//     if( n <=1){
//         console.log('O valor de n deve ser maior que 1');
//         return;
//     }
//     for(let i = 0; i <n; i++){

//         let linha ="";
//         for(let j =0; j < n; j++){
//             linha+= "* ";
//         }
//         console.log(linha);
// }


// }


// const tamanho =5;

// imprimirQuadradoAsteriscos(tamanho);

