const BASE_URL = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", () => {
  // document.getElementById("buyers-form").addEventListener('click', createForm);
  fetchBuyers();
  createForm()
  fetchFish();
})

function clearForm(){
  let formDiv = document.querySelector(".form")
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
      let f = new Fish(fish.name, fish.buyer_id)
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

  buyersForm.addEventListener("submit", newUserSubmission)
}

function newUserSubmission(e){
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
  let fishForm = document.getElementById("fish-form")

  fishForm.innerHTML += 
  `
  <form>
    Name of Fish: <input type = "text" id = "fish-name">
    <br>
    Price: <input type = "text" id = "fish-price">
    <br>
    <input type = "submit" value = "Add Fish">
  </form>
  `
  fishForm.addEventListener("submit", newFishSubmission)
}

function newFishSubmission(e){
  e.preventDefault();
  let name = document.getElementById("fish-name").value
  let price = document.getElementById("fish-price").value

  let fish = {
    name: name, 
    price: price,
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
    let f = new Fish(fish.name)
    f.renderFish();
  })
}




//delete - delete a buyer 
function deleteBuyer(){
  let buyerId = parseInt(event.target.dataset.id)

  fetch(`${BASE_URL}/buyers/${buyerId}`, {
    method: "DELETE"
  })

  this.location.reload()

}

