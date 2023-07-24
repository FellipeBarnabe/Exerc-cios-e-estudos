// function giveGreeting(){
//     return 'ola, boas vindas';
// };

// console.log(giveGreeting());


// function sum(num1,num2){
//     return num1 + num2
// }

// const result = sum(65,92)

// console.log(sum(5,9));
// console.log(sum(18,32));
// console.log(result);

// function multPlic(num1,num2){
//     return num1 * num2
// }

// const resultado = multPlic(595,321)

// console.log(resultado);




// function balance(a,b){

//     return a + b;
    

// }

// const mulTi = balance(52,(65));
// const subTraiValue = balance (69,-(31));
// const addValue = balance(52,36);
// console.log(addValue);
// console.log(subTraiValue);
// console.log(mulTi);


// const trybeBankCustomers = ['Olivia',  'Nat',  'Gus'];

// function greetCustomer(customer){

//     return `Ola, ${customer}. Essa é sua conta tryberBank`;
// }
// console.log(greetCustomer(trybeBankCustomers));


// const guitarBrand = ['Fender' , 'Gibson' , 'Ibanez' , 'Suhr']; // uma constante que recebe um array


// function newGuitarrs(owner){ // essa função se chama newGuitarrs e recebe como parâmetro o valor "owner"

//     return `Parabéns pelas as compras das guitarras: ${owner}. Good Play!`; 
//     // O return retorna o valor em string recebendo o parâmentreo "owner"
// }


// console.log(newGuitarrs(guitarBrand)); 
// // em seguida o console chama a função newGuitarrs e ela recebe como parâmetro a constante guitarBrand que possui os arrays
// // é imprimido no console a função newGuitarrs que recebe a constante guitarBrand como parâmetro que é concatenado pela string do return com o parâmetreo "owner"


// const guitarBrand = ['Fender' , 'Gibson' , 'Ibanez' , 'Suhr']; 

// function newGuitarrs(owner){

//     for(let index = 0; index< owner.length; index += 1){
        
//         console.log(`Parabéns, você comprou: ${owner[2]}`);
//         break;
//     }
// };

// newGuitarrs(guitarBrand);
 

// const palhetas = ['8mm','1mm', '6mm', '1,50mm'];

// function mmPalhetas(prefer){

//     for(let index = 0; index < prefer.length; index +=1){
//     console.log(`A sua preferência de palheta é: ${prefer[1]}`);
//     break;
//     }
// }

// mmPalhetas(palhetas);

// const gatosQuintal = ['Dolores', 'Manuel', 'Clotiude', 'Nina'];

// function gatoComFome(raiva){

//     for(let index=0; index < gatosQuintal.length; index += 1){
//         if(raiva === 'Manuel'){
//             console.log(`O gato ${raiva} está com muita raiva, pois está com muita fome`);
//         break;
//         }if(raiva === 'Nina'){
//             console.log(`A gata mãe, ${raiva}, voltou e agora toda a comida é dela.`)
//         break;
//         }else{
//         console.log(`A gata ${raiva} está com muita raiva, pois está com fome.`);
//         break;
//         }
//     }
// } 

// gatoComFome(gatosQuintal[0]);


// const trybeBankCustomers = ['Olivia' , 'Nat' , 'Gus'];
// const pirilampoCustomers =['Noel', 'Carol', 'Angelo', 'Kissyla'];

// function findElements(array, element){   // A função "findElements recebe dois parâmetros, array e element"
//     console.log(array.includes(element));// o console chama um método "includes" que retorna booleano, ele percorre o parâmetro "array" e trás o outro parâmetro chamado "element".
// }                                        // o método includes percorre o parâmetro "array" e e trás a mesma string que o segundo parâmetro "element" recebe.

// findElements(trybeBankCustomers, 'Olivia'); // a função é chamada recebendo o trybeBankCustomers como parâmetro e o elemento do array 'Olivia'

// a função 

// const filmesAção = ['Velozes e furiosos', 'Duro de matar', 'John Wick'];

// function melhorFilme(atuação, matança){
//     //console.log(atuação.includes(matança)) // pode usar a palavra reservada "returno" ao invés do console.log, no entando o console não 
//     return(atuação.includes(matança));       // imprimirá nada até ser chamado.        
// }

// console.log(melhorFilme(filmesAção, 'John Wick'));
// console.log(melhorFilme(filmesAção, 'Duro de matar'));

// const tryberBankCustomers = ['Olivia', 'Nat', 'Gus'];

// function addCustomer(customer){

//     if(typeof customer !== 'string'){
//         return 'O parâmetro passado deve ser do tipo string'
//     }

//     tryberBankCustomers.push(customer);
//     return 'Pessoa adicionada com sucesso'
// };
// console.log(addCustomer(true));
// console.log(addCustomer('joao'));
// console.log(tryberBankCustomers);


/////////////////////////////////////////////////

// const contasBanco = ['Bradesco', 'NuBank', 'Banco do Brasil', 'Caixa econômica']; // constante que tem 3 indices de array

// function abrirConta(novaConta){                  // a função abrirConta recebe o parâmetro "novaConta"
//     if(typeof novaConta !== 'string'){          //  o if testa com o método typeof se o parâmetro "novaConta" é diferente de string
//         return 'O nome do novo banco deve ser no formato string' //se o parêmtro "novaConta" for diferente de string ela retorna essa mensagem
//     }
//         contasBanco.push(novaConta);            // o método .push serve para adicionar um novo array no parâmetro "novaConta" e retorna a mensagem
//         return 'conta adicionado com sucesso'
// };

// console.log(abrirConta('Santander'));   // o parâmetro da função abrirConta recebe o valor em string que será adicionado 
// console.log(abrirConta('Itau'));
// console.log(abrirConta('Ita'));
// console.log(contasBanco);               // o console imprime o novo array em string que foi adicionado ao parâmetro da função abrirConta



// const bestGame = ['GTA5', 'Shadows of Mordor', 'Assassins Creed','Out Lander'];

// function newBestGame(newGame){
//     if(typeof newGame !== 'string'){
//         return 'Your new best game must be write in string value'
//     }
//     bestGame.push(newGame);
//     return 'Your new game is now add to your library'
// }

// console.log(newBestGame('The witcher'));
// console.log(newBestGame(bestGame));
// console.log(bestGame);



// const cellPhone = ['Samsumg', 'LG', 'Iphone', 'Xiome'];

// function newCellPhone(newCell){
//     if(typeof newCell !== 'string'){
//         return 'Your cellphone must to be write in string value'
//     }
//     cellPhone.push(newCell);
//     return `Your new cellphone is ${newCell}.`
// }

// console.log(newCellPhone('Motorola'));
// console.log(`This is all your cellphones now: ${cellPhone}`);




// const instruments = ['Eletric guitar', 'Acustic guitar','Drums','Bass'];

// function saleInstrument(sale){
//     if(typeof sale !== 'string'){
//         return 'Your sale has to bem in string value';
//     }
//     instruments.push(sale);
//     return 'you sold one of your instruments';
// }

// console.log(saleInstrument('violin'));
// console.log(instruments);


// const instruments = ['Eletric guitar', 'Acustic guitar','Drums','Bass']; // uma constante que recebe 4 arrays

// function bestInstrument(theBest){          // uma função de nome 'bestInstrument' que recebe um parâmetro chamado 'theBest'
   
//     for(let index = 0; index < instruments.length; index +=1){  // o loop for percorre todo o array
//         if( theBest === instruments[0]){   // o if testa se o valor que o parâmetro 'theBest vai receber será igual a posição do index [] da constante 'instruments'
//             return 'Your best instrument is the eletric guitar' // retorna essa mensagem se o parâmetro theBest for igual a posição do index
//         }
//             return 'This is not your best instrument'  // essa mensagem é se o parâmetro for diferente
        
//     }
    
// }     

// console.log(bestInstrument('Eletric guitar')); // a chamada da função vai passar o argumento para o parâmetro que testara se é igual a posição do array de instruments. 


// const trybeBankCustomers =['Olivia', 'nat', 'Gus'];
// const pirilampoCustomers =['Noel', 'carol,', 'Angel', 'Kissyla'];

// function findElements(array, element){     // A função findElements recebe dois parâmetros, array e element
//         return array.includes(element); // o console (que também pode ser "return") imprime o parãmetro array usando o método includes que verifica todo o array e retornar booleano
// };

// console.log(findElements(pirilampoCustomers, 'Angel')); // a A chamada da função recebe pirilampoCustomers, e o array 'Angel' que será o segundo parâmetro. 
// console.log(findElements(trybeBankCustomers, 'nat'));
// console.log(findElements(pirilampoCustomers, 'Kyssyla'));
// console.log(findElements(pirilampoCustomers, 'Felipe'));

// const balance = 100; 

// function sumBalance(value){
//     return value + balance;

// };
// function subtBalance(value){
//     return balance - value;
// };

// function multBalance(value){
//     return balance * value;
// }

// function divBalance(value){
//     return balance / value;
// }

// console.log(sumBalance(20));
// console.log(subtBalance(52));
// console.log(multBalance(32));
// console.log(divBalance(96));


