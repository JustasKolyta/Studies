//temperature constant variable
const kelvin=0;
// i used variable kelvin and subtracted it to get celsius temparature
let celsius=`${kelvin}`-273;
//celsius to fahrenheit conversion
let Fahrenheit =  celsius* (9/5) + 32  ;
console.log(Fahrenheit)
//rounds down the temperature
 Fahrenheit = Math.floor(Fahrenheit)

console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`)