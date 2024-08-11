const Quotes = JSON.parse(localStorage.getItem('quotes')) || [];

class Quote {
    constructor(copilot, client, dropclient, drophours) {
        this.Copilot = copilot;
        this.Client = client;
        this.TypeClient = dropclient;
        this.TypeHours = drophours;
    }
}

function saveQuotesToLocalStorage() {
    localStorage.setItem('quotes', JSON.stringify(Quotes));
}

function displayQuotes() {
    let container = document.getElementById("column2");
    container.innerHTML = ''; 

    for (const quote of Quotes) {
        container.innerHTML += `
            <div id="card" class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Client: ${quote.Client}</h5>
                    <h5 class="card-title">Co-Pilot: ${quote.Copilot}</h5>
                    <p class="card-text">This client has consumed ${quote.TypeHours} hours and the total amount is: ${quote.TypeHours * 40} USD</p>
                </div>
            </div>`;
    }
}

function creador() {
    let Copilot = document.getElementById("CoPilot").value;
    let Client = document.getElementById("Client").value;
    let Dropc = document.getElementById("DropClient").value;
    let Droph = document.getElementById("DropHours").value;

    if (Copilot !== "" && Client !== "" && Dropc !== "" && Droph !== "") {
        let newQuote = new Quote(Copilot, Client, Dropc, Droph);
        Quotes.push(newQuote);
        saveQuotesToLocalStorage();  
        displayQuotes();  
    } else {
        alert("Complete all of the data");
    }
}

async function fetchDateTime() {
    const response = await fetch('http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires');
    const data = await response.json();
    document.getElementById("dateTimeDisplay").innerText = `Current time in Buenos Aires: ${data.datetime}`;
}

fetchDateTime();

let button = document.getElementById("submit1");
button.addEventListener("click", creador);

window.addEventListener("load", displayQuotes);

