document.addEventListener("DOMContentLoaded", () => {
  fetchBuyers()
})

//anything that goes in event listener happens upon page loading 

const BASE_URL = "http://127.0.0.1:3000"

//read - fetch buyer index
function fetchBuyers(){
  fetch(`${BASE_URL}/buyers`)
  .then(resp => console.log(resp))
  .then()
}


//create - create new buyer 
//delete - delete a buyer 