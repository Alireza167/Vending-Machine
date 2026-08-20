// Single source of truth: name, price, and a display label live together
const items = [
    { id: "cocacola",    name: "Coca-Cola",    price: 8  },
    { id: "chips",       name: "Chips",        price: 9  },
    { id: "limonade",    name: "Limonade",     price: 14 },
    { id: "chocolate",   name: "Chocolate",    price: 4  },
    { id: "energyDrink", name: "Energy Drink", price: 16 },
    { id: "pepsi",       name: "Pepsi",        price: 8  },
    { id: "appleJuice",  name: "Apple Juice",  price: 7  },
    { id: "orangeJuice", name: "Orange Juice", price: 7  },
    { id: "beer",        name: "Beer",         price: 4  },
    { id: "coffee",      name: "Coffee",       price: 3  },
    { id: "donut",       name: "Donut",        price: 5  },
    { id: "icecream",    name: "Icecream",     price: 6  },
];

const answer = document.getElementById("answer");
const cash = document.getElementById("cash");
const history = document.getElementById("history");
const btnContainer = document.getElementById("btnContainer");

let money = 50;
let isBusy = false; // blocks spam-clicking during the message timeout

function updateCash() {
    cash.textContent = money;
}

function setMessage(text, duration = 1000) {
    answer.textContent = text;
    isBusy = true;
    toggleButtons(true);
    setTimeout(() => {
        answer.textContent = "";
        isBusy = false;
        toggleButtons(false);
    }, duration);
}

function toggleButtons(disableAll) {
    items.forEach(item => {
        // if disableAll, lock everything; otherwise only lock what's unaffordable
        item.element.disabled = disableAll ? true : money < item.price;
    });
}

function logPurchase(item) {
    const entry = document.createElement("div");
    entry.classList.add("historyDiv");
    const text = document.createElement("p");
    text.classList.add("history-text");
    text.textContent = `You purchased a ${item.name}! -${item.price}`;
    entry.appendChild(text);
    history.appendChild(entry);
}

function buy(item) {
    if (isBusy) return;
    if (money < item.price) {
        setMessage("Not Enough Cash");
        return;
    }
    money -= item.price;
    updateCash();
    logPurchase(item);
    setMessage("Purchased!");
}

// Build buttons from data instead of hardcoding them in HTML
items.forEach(item => {
    const btn = document.createElement("button");
    btn.id = item.id;
    btn.textContent = item.name;
    btn.addEventListener("click", () => buy(item));
    btnContainer.appendChild(btn);
    item.element = btn; // stash reference for toggleButtons()
});

updateCash();
toggleButtons(false);