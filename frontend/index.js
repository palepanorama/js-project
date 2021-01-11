document.addEventListener("DOMContentLoaded", () => {
  fetchBuyers()
  createForm()
})

//anything that goes in event listener happens upon page loading

const BASE_URL = "http://127.0.0.1:3000"

//read - fetch buyer index
function fetchBuyers(){
  fetch(`${BASE_URL}/buyers`)
  .then(resp => resp.json())
  .then(buyers => {
    for (const buyer of buyers) {
      let b = new Buyer(buyer.name, buyer.id)
      b.renderBuyer();
    }
  })
}


//create - create new buyer 
function createForm(){
  let buyersForm = document.getElementById("buyers-form")

  buyersForm.innerHTML += 
  `
  <form>
    Username: <input type = "text id = "name">
    <br>
    Email: <input type = "text id = "email">
    <br>
    <input type = "submit" value = "Create User">
  </form>
  `

  buyersForm.addEventListener("submit", newUserSubmission)
}

function newUserSubmission(){
  debugger;
}




//delete - delete a buyer 