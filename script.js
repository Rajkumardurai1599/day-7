const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data = request.response;
    var result = JSON.parse(data)
    /*console.log(result)*/

    //(a)Get all the countries from Asia continent /region using Filter function


    var res = result.filter((ele)=>ele.region==="Asia")
    

    var final = res.map((ele)=>console.log(ele.name.common))   

    /*(b)get all the countries with a population of less than 2 lakhs using Filter function

var pop  = result.filter((ele)=>ele.population<200000)

pop.forEach((value)=>console.log(value.name.common))*/

/*(c)Print the following details name, capital, flag, using forEach function
var countryData=JSON.parse(this.response);
countryData.forEach((element)=>{
    console.log(element.name,element.capital,element.flag,);
})*/

/*(d)Print the total population of countries using reduce function

var countryData=JSON.parse(this.response);
const population=countryData.reduce((acc,element)=>{
    return acc+element.population;
},0)
console.log(population);*/



/* (e)Print the country that uses US dollars as currency.

var curr  = result.filter((ele)=>ele.currencies && ele.currencies.USD)
curr.forEach((value)=>console.log(value.name.common))*/


}


