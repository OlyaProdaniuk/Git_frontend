//Створити HTML-сторінку з великою таблицею.
//При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця.
//Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.

document.addEventListener("DOMContentLoaded", function () {
  //get element
  const table = document.getElementById("table");
  const header = table.getElementsByTagName("th");

  // перетворення тексту в числа

  function convertToNumber(str) {
    if (!isNaN(str)) {
      return parseFloat(str);
    }
    return str;
  }

  // sorting table

  function sortTable(column) {
    const rows = table.rows;
    const arr = [];

    for (let i = 1; i < rows.length; i++) {
      let row = rows[i];
      let cell = row.cells[column];
      let value = cell.innerText || cell.textContent;
      arr.push({
        row: row,
        value: convertToNumber(value),
      });
    }

    // sort arr
    arr.sort(function (a, b) {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      return 0;
    });

    for (let i = 0; i < arr.length; i++) {
      table.tBodies[0].appendChild(arr[i].row);
    }
  }

  for (let i = 0; i < header.length; i++) {
    header[i].addEventListener(
      "click",
      (function (column) {
        return function () {
          sortTable(column);
        };
      })(i)
    );
  }
});
