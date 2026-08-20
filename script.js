const cocacola = document.getElementById("cocacola");
const chips = document.getElementById("chips");
const limonade = document.getElementById("limonade");
const chocolate = document.getElementById("chocolate");
const energyDrink = document.getElementById("energyDrink");
const pepsi = document.getElementById("pepsi");
const appleJuice = document.getElementById("appleJuice");
const orangeJuice = document.getElementById("orangeJuice");
const beer = document.getElementById("beer");
const coffee = document.getElementById("coffee");
const donot = document.getElementById("donot");
const icecream = document.getElementById("icecream");

const answer = document.getElementById("answer");
const cash = document.getElementById("cash");
let money = 50;

cash.textContent = money;

const items ={
    cocacola :{ element : cocacola, price : 8},
    chips :{ element : chips, price : 9},
    limonade :{ element : limonade, price : 14},
    chocolate :{ element : chocolate, price : 4},
    energyDrink :{ element : energyDrink, price : 16},
    pepsi :{ element : pepsi, price : 8},
    appleJuice :{ element : appleJuice, price : 7},
    orangeJuice :{ element : orangeJuice, price : 7},
    beer :{ element : beer, price : 4},
    coffee :{ element : coffee, price : 3},
    donot :{ element : donot, price : 5},
    icecream :{ element : icecream, price : 6}
}



Object.values(items).forEach(items =>{
    items.element.addEventListener("click",()=>{
        if(money >= items.price){
            money = money - items.price;
            cash.textContent = money;
            answer.textContent = "Purchased!";
        }else{
            answer.textContent = "Not Enough Cash"
        }
    });
});