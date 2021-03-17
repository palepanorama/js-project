const BASE_URL = "http://localhost:3000";
const results = document.getElementById("results");
const searchBar = document.getElementById("search-wrapper");
let allFish = [];

document.addEventListener("DOMContentLoaded", init)

function init() {
  fetchBuyers();
  fetchFish();
  createForm();
  searchFish();
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

//search fish
function searchFish(){
  let searchBar = document.getElementById('search-wrapper')

  searchBar.innerHTML += `
  <input id="searchBar" type="text" placeHolder="search!">
  <input type="submit" data-id=${this.id} onclick="handleSearch(event)">
  `
}



function handleSearch(e){
  e.preventDefault(e);

  let resultsDiv = document.getElementById("results");
  let buyerId = document.getElementById("searchBar").value
  let arr = Fish.allFish
  let fishResults = arr.filter(function(fish){
    return fish.buyer_id == buyerId
  })
  let mapArr = fishResults.map(arr => arr.name)


  if (buyerId) {
    resultsDiv.innerHTML += 
    `
    Fish that belong to Buyer ${buyerId}:
    <ul>
      <li>${mapArr}</li>
    </ul>
    `
  } else {
    resultsDiv.innerHTML += `
      Whoops! That ID isn't in our database.
    `
  }
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

  buyersForm.addEventListener("submit", handleBuyer)
}

function handleBuyer(e){
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
    <select id = "buyer_id" onclick = "populateBuyers()">
      <option id="select">${this.name}</option>
    </select>
    <input type = "submit" value = "Add Fish">
  </form>
  `
  fishForm.addEventListener("submit", handleFish)
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
}

function populateBuyers(){  
  fetch(`${BASE_URL}/buyers`)
  .then(resp => resp.json())
  .then(buyers => {
    for (const buyer of buyers) {
      let b = new Buyer(buyer.name, buyer.id, buyer.email)
      b.listIds();
    }
  })
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