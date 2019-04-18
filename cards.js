let mkbutton = document.querySelector("#creator-btn")

let components = document.querySelector(".addedComponents")

function factory(cardText){

    const fragment = document.createDocumentFragment()

    const container = document.createElement('div')
    container.className = "cardContainer";
    container.textContent = cardText;
    
    const removebtn = document.createElement('button')
    removebtn.className = "remove";
    container.appendChild(removebtn)
    


    fragment.appendChild(container)

    components.appendChild(fragment)


}

mkbutton.addEventListener("click", function(event){
    let cardText = document.querySelector("#text-box").value;
    console.log(cardText);
    factory(cardText)


})




