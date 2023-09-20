function salvarDados() {
 const produto = document.getElementById("produtoInput").value;
 const valor = document.getElementById("valorInput").value;

 const table = document.getElementById("tabelaProdutos");
 const newRow = table.insertRow(table.rows.length);
 newRow.id = `row-${table.rows.length}`;

 const cell1 = newRow.insertCell(0);
 const cell2 = newRow.insertCell(1);
 const cell3 = newRow.insertCell(2);

 cell1.innerHTML = produto;
 cell2.innerHTML = valor;
 cell3.innerHTML = `<button onclick="removerProduto('row-${table.rows.length}')">Remover</button>`;

 cell1.classList.add("cell-produto");
 cell2.classList.add("cell-valor");
 cell3.classList.add("cell-acao");

 document.getElementById("produtoInput").value = "";
 document.getElementById("valorInput").value = "";
}

function removerProduto(rowId) {
 const table = document.getElementById("tabelaProdutos");
 const row = document.getElementById(rowId);
 table.deleteRow(row.rowIndex);
}
