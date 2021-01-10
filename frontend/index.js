document.addEventListener("DOMContentLoaded", () => {
  fetchBuyers()
})

//anything that goes in event listener happens upon page loadin 

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
//delete - delete a buyer 