document.addEventListener("DOMContentLoaded", async () => {
  const currencyTable = document.getElementById("currency-table");

  try {
    const responseData = await fetchData(
      "http://localhost:3000/coingecko_markets.json"
    );

    renderCurrencyTable(currencyTable, responseData);
  } catch (error) {
    console.error(`Произошла ошибка: ${error.message}`);
  }

async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Ошибка запроса");
  } 
  return response.json();
}

function renderCurrencyTable(currencyTable, data) {
  clearTable(currencyTable);
  data.forEach((currency) => {
    const row = createTableRow(currency);
    currencyTable.appendChild(row);
  });
}

function clearTable(currencyTable) {
  currencyTable.innerHTML = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Symbol</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            <!-- Сюда будут добавлены данные о валютах -->
        </tbody>
    `;
}

function createTableRow(currency) {
  const row = document.createElement("tr");
  row.innerHTML = `
        <td>${currency.id}</td>
        <td>${currency.symbol}</td>
        <td>${currency.name}</td>
    `;

  if (currency.symbol === "usdt") {
    row.style.backgroundColor = "green";
  } else if (currencyTable.querySelectorAll("tr").length <= 5) {
    row.style.backgroundColor = "blue";
  }

  return row;
}
});
