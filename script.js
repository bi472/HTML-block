const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Capecoin%2Cethereum%2Clitecoin&vs_currencies=usd`

function fetchData() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error(error));
}

function displayData(data) {
    const container = document.getElementById('bitcoin_exchange');

    container.innerHTML = '';
  
    for (const [currency, info] of Object.entries(data)) {
        
      const heading = document.createElement('h3');
      heading.textContent = currency.toUpperCase();
      container.appendChild(heading);
  
      const paragraph = document.createElement('p');
      paragraph.textContent = `USD: ${info.usd}`;
      container.appendChild(paragraph);
    }


}

function init() {
    fetchData();

    setInterval(fetchData, 10000);
}