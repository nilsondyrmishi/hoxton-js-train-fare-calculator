
const pricePerKm = 0.21;
const age = Number(prompt("How old are you?"))
const distance = Number(prompt("How many km is your destination?"))

const youngAge = age<18;
const oldAge = age>65;
const midAge = age>youngAge && age<oldAge;

let price = pricePerKm * distance;

let ticketPriceYoungAge = pricePerKm * distance * 0.2;

let ticketPriceOldAge = pricePerKm * distance * 0.4;

if(youngAge){
 alert(`Your ticket costs only ${ticketPriceYoungAge}£!Have a nice trip young man/woman!`);

}else if(oldAge){
       alert(`Your ticket costs only ${ticketPriceOldAge}£!Have a nice trip grandpa/grandma!`);

}else if(!midAge) {
 alert(`Your ticket costs only ${price}£! Have a nice trip middle age man/woman!`);
}
