// function subtraction(num1, num2){ // simples função que recebe dois parâmentroe e depois os soma
//     return num1 + num2;
// }
// console.log(subtraction(52,62));

//Arrow functions não possuem nome e são armazenadas em variáveis
//diferente da função normal, a criação de uma arrow function não utiliza a palavra-chave
//function e não tem nome. Ao invés disso, atribuímos ela a uma constante

// const suma = (num1, num2)=>{
//     return num1 + num2;
// };

// console.log(suma(52,65));


// const gatos =['Dolores', 'Nina','Clotiubde', 'Manuel']; // const que recebe 4 arrays

// const verificaGato = (gato, vivo, morto) =>{     // arrow function chamada de verificaGato que recebe três parâmetros (gato, vivo, morto)
//     if(gatos.includes(gato)){ // condicional if que usa o método .includes para verificar se o parámetro passado está no array da constante gatos
//         return vivo; // se o parâmetro estiver no array retornará o parãmetro vivo
//     }else{
//         return morto; // se não, morto. 
//     }
// };

// console.log(verificaGato('Manuel', 'Está vivo', 'Está morto')); // o console faz a chamada de três parâmetros, o nome do gato, esta vivo, está morto. 



// const materialConstrução = ['Martelo', 'Chave de Fenda', 'Tinta', 'Cimento'];

// const temosMaterial = (temos, precisaComprar, temosMuitos) =>{
//     if(materialConstrução.includes(temos)){
//         return temos;
//     }else if(materialConstrução.includes(temosMuitos)){
//         return 'Temos muitos';
//     }
//     else{
//         return precisaComprar;
//     }
// };

// console.log(temosMaterial('martelos', 'Precisa Comprar', 'Temos muitos'));


// const materialConstrução = ['Lixa', 'Tinta', 'Argamassa', 'Cimento'];

// const materialComprado = (comprado)=>{
//     if(materialConstrução.includes(comprado)){
//         return `Material ${comprado} foi comprado`;
//     }else{
//         return `Material não foi comprado`
//     }
// };

// console.log(materialComprado('Martelo'));


// const instruments = ['Flauta', 'Flautin', 'Violino', 'Piano'];


// const instOrquestra = (existe)=>{
//     if(instruments.includes(existe)){
//         return `O instrumento ${existe} existe numa orquestra`;
//     }else{
//         return `Esse instrumento não existe na orquestra`;
//     }

// };

// console.log(instOrquestra('baixo'));



// const substration = (num1, num2) => num1 - num2; //simplificando arrow function
// console.log(substration(58,23)); 


// const sumElements = [10,50,65,32,58,59];

// function sumArray (array){ // uma função chamada sumArray que recebe um parâmetro chamado array
//     let sum =0; // uma variavel de escopo "sum" que inicia em zero, ela receberá os elementos do array no console.log
//     for(let index=0; index <array.length; index += 1){ // o loop for vai iterar a quantidade do array usando o método lenght
//         sum = sum + array[index]   // a variavel que iniciou em zero recebe ela mesma mais o parámetro os indeces do parâmetro que array vai receber e soma cada um
//     }
//     return sum; // para retornar a variavel sum
// };

// console.log(sumArray([10,65,95,81,63,51])); // a chamada da função é justamente o array que passara pelo parâmetro da função sumArray.



// function somarArray (arraySum){

// let soma =0;
// for(let index =0; index < arraySum.length; index +=1){

//     soma = soma + arraySum[index];
// }
// return soma;
// }
// console.log(somarArray([23,25,85,656,541]));



// function multpicArray(arrayMulti){
//     let mult = 1;
//     for(let index = 0; index < arrayMulti.length; index+=1){
//         mult = mult * arrayMulti[index];
//     }
//     return mult;
// }

// console.log(multpicArray([12,52,63,85,95,12]));


// const subtr = (subtrair)=>{
//     let sub = 0;
//     for(let index = 0; index<subtrair.length; index += 1){
//         sub = sub - subtrair[index];
//     }
//     return sub; 
// }

// console.log(subtr([15,32,95,64,25,123,]));




// const divisor = (dividir) =>{
//     let divisão = 1;
//     for(let index = 0; index < dividir.length; index += 1){
//         divisão = divisão / dividir[index];
//     }
//     return divisão; 
// }
// console.log(divisor([85,23,14,89,56]));


// const countWords = (string) =>{ //arrow function com um parâmetro de nome string
//     let counter = 0;            // variável de escopo inicializando em 0;
//     const words = string.split(''); // constante words que receberá o parâmetro string com o método split() que conta uma string

//     for(let index =0; index < words.length; index +=1){ // loop for na variável word que receberá a string no console.log   
//         counter += 1;                                   // variavel inicializada em 0 e acrescentará cada letra e somará.    
//     }                                                   
//     return counter;                                     // retorna a variável counter
// }

// console.log(countWords('Fellipe'));                     // chamada da arrowfunction com a string em sem parámetro



// const NumberString = (NumeroString) =>{
//     let contagem = 0;
//     const string = NumeroString.split('');
    
//     for(let index =0; index < string.length; index +=1){

//         contagem +=1;
//     }
//     return contagem;
// }
// console.log(NumberString('VAI TOMAR NO CU'));



// const contarPalavra = (palavra)=>{
//     let contarPalavra = 0;
//     const string = palavra.split('');

//     for(let index = 0; index < string.length; index +=1 ){
//        contarPalavra += 1
       
//     }
//     if(contarPalavra > 10){
//         return `A palavra tem mais que Dez caracteres.`
//     }else{
//         return `A palavra tem menos que dez caracteres`
        
//     }
// } 

// console.log(contarPalavra('fel'));



// const countWords = (phrase)=> phrase.split('').length;
// console.log(countWords('Fellipe'));

// function revert(palavra){
//     let reverseString = palavra.split('').reverse().join('');;
//     let stringRertida = '';
    

//     for(let index=0; index < reverseString.length; index +=1){

//         stringRertida += reverseString[index];
//     }

//     return stringRertida;
// };

// console.log(revert('Fellipe Barnabé'));



// const invertString = (palavra) =>{
// let operInvert = palavra.split('').reverse().join('');
// let  result =''

// for(let index=0; index < operInvert.length; index +=1){

//     result += operInvert[index];
//  }
//   return result;
// };

// console.log(invertString('Silent scream inside my head'));


// const word =(invertion)=>{
// let wordInvert = invertion.split('').reverse().join('')
// let invertResult =''

// for(let index =0; index < wordInvert.length; index +=1 ){
//     invertResult += wordInvert[index];
// }
// return invertResult;
// }

// console.log(word('hipnotazed'));

// function reversedWord(word){
//     let reversedWord ='';
//     for(let index = word.length -1; index >= 0; index -=1){
//         reversedWord +=word[index];
//     }
//     return reversedWord;
// }

// console.log(reversedWord('Fellipe'));

// function verifyPalindrome(string){
// const reverse = string.split('').reverse().join('');
    
//     if(reverse === string){
//         return true;
//     }else{
//         return false;
//     }
// };
    
// console.log(verifyPalindrome('gnirts'));


// const getHighestIndex = (numbers) => {  //uma arrowfunction que recebe um parâmetro numbers
//     let highestIndex = 0;               // uma variavel do tipo let highestIndex que inicia com zero.

//     for (let index = 0; index < numbers.length; index += 1) { // o loop for tem o objetivo de passar por toro parâmetro numbers que receberá o valor dos arrays através do método length 
//         if (numbers[highestIndex] < numbers[index]) { // condicional if que testa se 
//             highestIndex = index;
//         }
//     }
//     return highestIndex;
// }

// console.log(getHighestIndex([10, 15, 52, 95, 120]));



// const sumArray = (Array)=>{

//     let sum = 1;

//     for(let index =0; index < Array.length; index +=1){
//         sum = sum + Array[index];
//     }
//     return sum;

// }

// console.log(sumArray([15,16,18,19]));

const countWords = phrase => phrase.split('').length;
console.log(countWords('Ai dento!'));