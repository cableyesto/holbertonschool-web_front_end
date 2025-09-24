let stock = {
    macbook: 2,
    iphone: 4
};

function processPayment(itemName) {
    let stockArrayUpdate = Object.entries(stock).map(entry => {
        if (entry[0].localeCompare(itemName, "en", { sensitivity: "accent" })  === 0) {
            entry[1] -= 1;
        }
        return entry; // do not forget to return the entry
    });
    stock = Object.fromEntries(stockArrayUpdate);
    console.log(`Payment is being processed for item ${itemName.toLowerCase()}`);
}

function processError(itemName) {
    console.log(`No more ${itemName.toLowerCase()} in stock`);
    console.log("Payment is not being processed");
}

function processOrder(itemName, callbackPayment, callbackError) {
    console.log(`Verifying the stock of ${itemName.toLowerCase()}`);
    let compareStr;
    Object.entries(stock).forEach(entry => {
        compareStr = entry[0].localeCompare(itemName, "en", { sensitivity: "accent" });
        if (compareStr === 0) {
            if (entry[1] > 0) {
                callbackPayment(itemName);
            } else {
                callbackError(itemName);
            }
        }
    })
}

let userInput = "";
while (true) {
    userInput = prompt("Please enter the item you would like to purchase (Macbook, iPhone)");
    if (userInput !== null) {
        processOrder(userInput, processPayment, processError);
    } else {
        console.log("You canceled the input.");
        break;
    }
}