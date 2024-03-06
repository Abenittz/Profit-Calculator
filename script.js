let selected = null;

let countChosen = null;
function getCountry() {
  selected = document.querySelector(".country");
  countChosen = selected.options[selected.selectedIndex].text;
  console.log(countChosen);
}

let peopleChosen = null;
function getPeoples() {
  selected = document.querySelector(".peoples");
  peopleChosen = selected.options[selected.selectedIndex].text;
  console.log(peopleChosen);
}

let ticketChosen = null;
function getTicket() {
  selected = document.querySelector(".ticket-type");
  ticketChosen = selected.options[selected.selectedIndex].text;
  console.log(ticketChosen);
}

let visaChosen = null;
function getVisa() {
  selected = document.querySelector(".visa-type");
  visaChosen = selected.options[selected.selectedIndex].text;
  console.log(visaChosen);
}
let daysChosen = null;
function getDays() {
  selected = document.querySelector(".duration");
  daysChosen = selected.options[selected.selectedIndex].text;
  console.log(daysChosen);
}

let totalTicket = 0;
let totalVisa = 0;
let totalHotel = 0;
let total = 0;

let cont = document.querySelector(".table-container");

let box = document.querySelector(".box");

let expBtn = document.querySelector(".expense-btn");

expBtn.addEventListener("click", () => {
  if (countChosen === "Dubai") {
    if (visaChosen === "Normal") {
      totalVisa = 680 * peopleChosen;
    } else if (visaChosen === "Fast") {
      totalVisa = 980 * peopleChosen;
    }

    if (ticketChosen === "Free") {
      totalTicket = 500 * peopleChosen;
    } else if (ticketChosen === "40%") {
      totalTicket = 1000 * peopleChosen;
    } else if (ticketChosen === "fly-dubai") {
      totalTicket = 600 * peopleChosen;
    }
    totalHotel = 120 * peopleChosen * daysChosen;

    total = totalHotel + totalTicket + totalVisa;
  }

  let tableContainer = document.createElement("div");
  tableContainer.className = "default-expense";
  let table = document.createElement("table");
  table.innerHTML = `
              <h2>Default expenses</h2>
              <tr>
                  <th>Country</th>
                  <td>${countChosen}</td>
              </tr>
              <tr>
                  <td>Ticket</td>
                  <td>${totalTicket}</td>
              </tr>
              <tr>
                  <td>Visa</td>
                  <td>${totalVisa}</td>
              </tr>
              <tr>
                  <td>Hotel</td>
                  <td>${totalHotel}</td>
              </tr>
              <tr>
                  <th class="total">Total</th>
                  <th>${total} Birr</th>
              </tr>`;

  if (cont.contains(tableContainer)) {
    cont.removeChild(tableContainer);

    tableContainer.appendChild(table);
    cont.appendChild(tableContainer);
  } else {
    tableContainer.appendChild(table);
    cont.appendChild(tableContainer);
  }
});

////////////////////////////////

let addItemBtn = document.querySelector(".add-item");
let bar = document.querySelector("#single-bar");
let addTable = document.getElementById("items-table");

// let type = document.querySelectorAll("input[type=text]");
// let quantity = document.querySelectorAll(".item-quantity");
// let price = document.querySelectorAll(".item-price");

addItemBtn.addEventListener("click", () => {
  let count = bar.childElementCount + 1;

  let barContainer = document.createElement("div");
  barContainer.className = "input-container";
  barContainer.innerHTML = `<label id="no">${count}.</label>
            <input type="text" class="item-type field" placeholder="Item type">
            <input type="number" class="item-quantity field" placeholder="quantity">
            <input type="number" class="item-price field" placeholder="price">
            
            <button class="delete-btn edit" id="delete" ><span class="material-symbols-outlined">
                    delete
                </span>
                </button>`;

  bar.appendChild(barContainer);
  save();
  let edit = document.getElementById("edit");
  let deleteBar = document.querySelectorAll("#delete");
  deleteBar.forEach((bar) => {
    bar.addEventListener("click", () => {
      bar.parentElement.remove();
    });
  });
});

let itemCalculate = document.querySelector("#calcItem");

itemCalculate.addEventListener("click", () => {
  let quantSum = [];
  let priceSum = [];
  let typeSum = [];

  let type = document.querySelectorAll(".item-type");
  for (let i = 0; i < type.length; i++) {
    if (type[i].value === "") {
      type[i].style.border = "2px solid red";
      type[i].style.borderRadius = "5px";
    } else {
      typeSum.push(type[i].value);
      if (type[i].style.border === "2px solid red") {
        type[i].style.border = "none";
      }
    }
  }
  let quantity = document.querySelectorAll(".item-quantity");
  for (let i = 0; i < quantity.length; i++) {
    if (quantity[i].value === "") {
      quantity[i].style.border = "2px solid red";
      quantity[i].style.borderRadius = "5px";
    } else {
      quantSum.push(quantity[i].value);
      if (quantity[i].style.border === "2px solid red") {
        quantity[i].style.border = "none";
      }
    }
  }
  let price = document.querySelectorAll(".item-price");
  for (let i = 0; i < price.length; i++) {
    if (price[i].value === "") {
      price[i].style.border = "2px solid red";
      price[i].style.borderRadius = "5px";
    } else {
      priceSum.push(price[i].value);
      if (price[i].style.border === "2px solid red") {
        price[i].style.border = "none";
      }
    }
  }

  let quantTimesPrice = [];
  let tot = 0;
  for (let i = 0; i < bar.childElementCount; i++) {
    let sum = quantSum[i] * priceSum[i];
    quantTimesPrice.push(sum);

    quantTimesPrice.forEach((el) => (tot += el));
    let tr = document.createElement("tr");
    tr.innerHTML = `
              <td>${i + 1}</td>
              <td>${typeSum[i]}</td>
              <td>${quantTimesPrice[i]}</td>
                      `;

    addTable.appendChild(tr);
  }

  let trT = document.createElement("tr");
  trT.innerHTML = `<th>Total</th>
                    <th></th>
                  <th>${tot}</th>`;

  addTable.appendChild(trT);

  let deleteBar = document.querySelectorAll("#delete");
  deleteBar.forEach((bar) => {
    bar.addEventListener("click", () => {
      bar.parentElement.remove();
    });
  });

  console.log(typeSum);
  console.log(quantSum);
  console.log(priceSum);
  console.log(quantTimesPrice);
  console.log(tot);
});

let goodsContainer = document.querySelector(".goods-container");
let addGoods = document.querySelector(".goods-btn");

let addContainer = document.querySelector(".add-goods-container");

// addGoods.addEventListener("click", () => {
//   goodsInput.innerHTML = ` <label for="name">1.</label>
//     <input type="text" class="name space" id="name" placeholder="Name">
//     <input type="number" class="cost-p space" id="cp" placeholder="cost price">
//     <input type="number" class="sell-p space" id="sp" placeholder="selling price">
//     <button class="delete-btn edit" id="delete"><span class="material-symbols-outlined">
//             delete
//         </span></button>`;
//   addContainer.appendChild(goodsInput);
// });

addGoods.addEventListener("click", () => {
  let count = addContainer.childElementCount + 1;

  let barContainer = document.createElement("div");
  barContainer.className = "goods-input-container";
  barContainer.innerHTML = `<label for="name" id="no">${count}.</label>
              <input type="text" class="name space" id="name" placeholder="Name">
                <input type="number" class="cost-p space" id="cp" placeholder="cost price">
                <input type="number" class="sell-p space" id="sp" placeholder="selling price">
                <button class="delete-btn edit" id="delete"><span class="material-symbols-outlined">
                        delete
                    </span></button>`;

  addContainer.appendChild(barContainer);

  let deleteBar = document.querySelectorAll("#delete");
  deleteBar.forEach((addContainer) => {
    addContainer.addEventListener("click", () => {
      addContainer.parentElement.remove();
    });
  });
});

let addTotal = document.querySelector(".total-table");

let goodsCalculate = document.querySelector(".goods-calculate");

goodsCalculate.addEventListener("click", () => {
  let nameArr = [];
  let costArr = [];
  let sellArr = [];

  let names = document.querySelectorAll(".name");
  let cost = document.querySelectorAll(".cost-p");
  let sell = document.querySelectorAll(".sell-p");

  for (let i = 0; i < names.length; i++) {
    if (names[i].value === "") {
      names[i].style.border = "2px solid red";
      names[i].borderRadius = "5px";
    } else {
      nameArr.push(names[i].value);
      if (names[i].style.border === "2px solid red") {
        names[i].style.border = "none";
      }
    }
  }
  for (let i = 0; i < cost.length; i++) {
    if (cost[i].value === "") {
      cost[i].style.border = "2px solid red";
      cost[i].borderRadius = "5px";
    } else {
      costArr.push(cost[i].value);
      if (cost[i].style.border === "2px solid red") {
        cost[i].style.border = "none";
      }
    }
  }
  for (let i = 0; i < sell.length; i++) {
    if (sell[i].value === "") {
      sell[i].style.border = "2px solid red";
      sell[i].borderRadius = "5px";
    } else {
      sellArr.push(sell[i].value);
      if (sell[i].style.border === "2px solid red") {
        sell[i].style.border = "none";
      }
    }
  }

  let total = 0;
  let diffArr = [];

  for (let i = 0; i < addContainer.childElementCount; i++) {
    let difference = sellArr[i] - costArr[i];
    diffArr.push(difference);

    diffArr.forEach((el) => (total += el));

    let tr = document.createElement("tr");
    tr.innerHTML = `
              <td>${i + 1}</td>
              <td>${nameArr[i]}</td>
              <td>${diffArr[i]}</td>
                      `;
    addTotal.appendChild(tr);
  }
  let trTot = document.createElement("tr");
  trTot.innerHTML = `
    <th>Total</th>
    <th></th>
    <th>${total}</th>`;

  addTotal.appendChild(trTot);

  for (let i = 0; i < addContainer.childElementCount; i++) {
    let deleteBar = document.querySelectorAll("#delete");
  }
  // deleteBar.forEach((bar) => {
  //   bar.addEventListener("click", () => {
  //     bar.parentElement.remove();

  //     addTotal.removeChild(addTotal.children[bar]);
  //     console.log(bar);
  //   });
  // });

  console.log(diffArr);
  console.log(trTot.ELEMENT_NODE);
  console.log(nameArr);
});

function save() {
  sessionStorage.setItem("item", bar.innerHTML);
}

function show() {
  bar.innerHTML = sessionStorage.getItem("item");
}

show();
