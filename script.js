
/*function expression
const plantNeedsWater=function(day){
    if( day === "Wednesday"){
      return true;
    }else{ return false};
    };
    console.log(plantNeedsWater("Tuesday"));
//concise body arrow function
    const plantNeedsWater1 = day =>  day === 'Wednesday' ? true : false;

*/
function letters(index){
    alphabet=["A","B","C"];
    return alphabet[index];
}
console.log(letters(1))

function countSymbols(name,surname){

   console.log(name.length+surname.length);
}
countSymbols("Petras","Slekys")

function calculator(n1,n2,operator){
 if(operator==="+"){console.log(n1+n2)}
  else if(operator==="-"){console.log(n1-n2)}
  else if(operator==="*"){console.log(n1*n2)}
  else if(operator==="/"){console.log(n1/n2)}

}
calculator(645,25,"/")
const generateNum=(min=1 ,max=10)=>{ return console.log(num2= Math.random()*max-min +min,num2=Math.random()*max-min +min*2)
}
generateNum()
