class Fish{
    constructor(name, buyer_id){
        this.name = name;
        this.buyer_id = buyer_id;
    }

    renderFish(){
        let fishDiv = document.getElementById("fish-container")

        fishDiv.innerHTML += 
        `
        <h3>Fish Available:</h3>
        <ul>
        <li>${this.fish}
        </li>
        </ul>
        `
    }
}