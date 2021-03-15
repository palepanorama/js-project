const BASE_URL = "http://localhost:3000";
const ul = document.getElementById('buyers')

document.addEventListener("DOMContentLoaded", init)

function init() {
  fetchBuyers();
  fetchFish();
  createForm();
}

function clearForm(){
  let formDiv = document.querySelector("#fish-form")
  formDiv.innerHTML = ""
}



function fetchBuyers(){
  fetch(`${BASE_URL}/buyers`)
  .then(resp => resp.json())
  .then(buyers => {
    for (const buyer of buyers) {
      let b = new Buyer(buyer.name, buyer.id, buyer.email)
      b.renderBuyer();
    }
  })
}

function fetchFish(){
  fetch(`${BASE_URL}/fish`)
  .then(resp => resp.json())
  .then(fishes => {
    for (const fish of fishes ){
      let f = new Fish(fish.name, fish.id, fish.buyer_id, fish.price)
      f.renderFish();
    }
  })
}


//create - create new buyer 
function createForm(){
  let buyersForm = document.getElementById("buyers-form")

  buyersForm.innerHTML += 
  `
  <form>
    Username: <input type = "text" id = "name">
    <br>
    Email: <input type = "text" id = "email">
    <br>
    <input type = "submit" value = "Create User">
  </form>
  `

  buyersForm.addEventListener("submit", handleUser)
}

function handleUser(e){
  e.preventDefault();
  let name = document.getElementById("name").value
  let email = document.getElementById("email").value

  let buyer = {
    name: name, 
    email: email 
  }

  fetch(`${BASE_URL}/buyers`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(buyer)
  })
  .then(resp => resp.json())
  .then(buyer => {
    let b = new Buyer(buyer.name, buyer.id, buyer.email)
    b.renderBuyer();
  })
}




//create fish 

function createFishForm(){
  const fishForm = document.getElementById("fish-form");

  fishForm.innerHTML = 
  `
  <form>
    Fish: 
    <select id = "fish-name">
      <option>Red Snapper</option>
      <option>Amberjack</option>
      <option>Grouper</option>
    </select>
    Price:
    <input type = "text" id = "fish-price">
    <br>
    Buyer:
    <select id = "buyer_id" onclick = "populate()">
      <option id="select"></option>
    </select>
    <input type = "submit" value = "Add Fish">
  </form>
  `
  fishForm.addEventListener("submit", handleFish)
}

function populate(){
  let select = document.getElementById("select");
  let endpoint = `${BASE_URL}/buyers`;
  buyersData = [];
  
  fetch(endpoint)
  .then(resp =>resp.json)
  .then(data => {
    let results = buyersData.push(data)
    select.innerHTML += `
    ${results}
    `
  })
}


function handleFish(e){
  e.preventDefault; 
  let name = document.getElementById("fish-name").value
  let price = document.getElementById("fish-price").value
  let buyer_id = document.getElementById("buyer_id").value 

  let fish = {
    name: name,
    buyer_id: buyer_id,
    price: price
  }

  fetch(`${BASE_URL}/fish`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(fish)
  })
  .then(resp => resp.json())
  .then(fish => {
    let f = new Fish(fish.name, fish.id, fish.buyer_id, fish.price)
    f.renderFish();
  })
  clearForm();

}

//delete - delete a buyer 
function deleteBuyer(){
  let buyerId = parseInt(event.target.dataset.id)

  fetch(`${BASE_URL}/buyers/${buyerId}`, {
    method: "DELETE"
  })

  window.location.reload();
}

//delete a fish 
function deleteFish(){
  let id = parseInt(event.target.dataset.id)

  fetch(`${BASE_URL}/fish/${id}`, {
    method: "DELETE"
  })

  window.location.reload();
}




