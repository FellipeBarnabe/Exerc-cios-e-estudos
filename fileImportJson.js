// arquivo.js
const jsonData = require('./data.json');

console.log(jsonData.data);


const getCitiesNames = (jsonData)=>{
    const cityNames =[];
    for(let index =0; index < jsonData.data.length; index +=1){
        cityNames.push(jsonData.data[index].city);
    }
    return cityNames;
}

const cities = getCitiesNames(jsonData);
console.log(cities);




const getTemperatures = (jsonData) =>{  // arrow function getTemperatures que que recebe um parâmetro chamado de jsonData
    const temperature  = [];            // variável que inicializa com um array vazio
    
    for(let index = 0; index < jsonData.data.length; index +=1){ // loop for que passa pelo parâmetro jsonData.data (que é objeto json importado e o lnegth tamanho) 
        temperature.push(jsonData.data[index].temperature); // a variável temperature usa o método push
    }
    return temperature;

}
const temp = getTemperatures(jsonData);
console.log(temp);



const getHumidity =(jsonData) =>{
    const humidity =[];
    for(let index =0; index<jsonData.data.length; index+=1){
        humidity.push(jsonData.data[index].humidity);
    }
    return humidity;
}
const humid = getHumidity(jsonData);
console.log(humid);


const getConditions =(jsonData)=>{
    const conditions =[];

    for(let index=0;index<jsonData.data.length;index+=1){
        conditions.push(jsonData.data[index].conditions)
    }
    return conditions;
}

const conditioness = getConditions(jsonData);
console.log(conditioness);


const addWindSpeedToData =(data, windSpeed)=>{
    for(let index=0; index < data.length; index +=1){
        data[index].windSpeed = windSpeed;
    }
}

addWindSpeedToData(jsonData.data, 10);
console.log(jsonData);