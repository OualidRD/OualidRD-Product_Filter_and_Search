let products={
    data:[
        
    {
        productName:"Regular White T-shirt",
        category: "Topwear",
        price: "30",
        image: "white_t-shirt.jpg"
    },
    {
        productName:"Beige short skirt",
        category: "Bottomwear",
        price: "49",
        image: "Beige short skirt11.jpg"
    },
    {
        productName:"Sporty smart watch",
        category: "Accessoires",
        price: "99",
        image: "smart watch.jpg"
    },
    {
        productName:"Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "basic_knitted_top1.jpg"
    },
    {
        productName:"Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "Black_jacket.jpg"
    },
    {
        productName:"Regular Fit Straight Leg Jeans",
        category: "Bottomwear",
        price: "89",
        image: "Regular_jeans.jpg"
    },
    {
        productName:"Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "Brown Men's Jacket.jpg"
    },

    {
        productName:"Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "Comfy Gray Pants.jpg"
    },
    {
        productName:"wool cashmere melton coat",
        category: "Topwear",
        price: "299",
        image: "wool cashmere melton coat.jpg"
    },
    {
        productName:"Mens Shearling Jacket",
        category: "Jacket",
        price: "129",
        image: "Mens Shearling Jacket.jpg"
    },
    {
        productName:"Homme Joggings Pantalon",
        category: "Topwear",
        price: "49",
        image: "Homme Joggings Pantalon.jpg"
    },
    {
        productName:"Apple Airpods Pro",
        category: "Accessoires",
        price: "49",
        image: "Apple Airpods Pro.jpg"
    },
 
],
};


for (let i of products.data) {
        //Create Card
        let card = document.createElement("div");
        //Card should have category and should stay hidden initially
        card.classList.add("card", i.category,"hide");
        //image div
        let imgContainer = document.createElement("div");
        imgContainer.classList.add("image-container");
        //img tag
        let image = document.createElement("img");
        image.setAttribute("src", i.image);
        imgContainer.appendChild(image);
        card.appendChild(imgContainer);
        //container
        let container = document.createElement("div");
        container.classList.add("container");
        //product name
        let name = document.createElement("h5");
        name.classList.add("product-name");
        name.innerText=i.productName.toUpperCase();
        container.appendChild(name);
        //price
        let  price= document.createElement("h6");
        price.innerText = "$" + i.price;
        container.appendChild(price);
        card.appendChild(container);
        document.getElementById("products").appendChild(card);
}

//parameter passed from button (paramater same as category)
function filterproduct(value){
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        //check if value equals innerText
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active"); 
        }
        else{
            button.classList.remove("active");
        }
    });


        //select all cards 
        let elements = document.querySelectorAll(".card");
        //loap through all cards 
        elements.forEach((element) => {
            console.log(value)
            //display all cards on 'all' button click
            if(value.toLowerCase() == "all"){
                console.log(value)
                element.classList.remove("hide");
            }
            else{
                //check if element contains category class
                if(element.classList.contains(value)){
                    //display element based on category
                    element.classList.remove("hide");
                }
                else{
                    //hide other elements
                    element.classList.add("hide");
                }
            }
        });
    }
//search button click
document.getElementById("search").addEventListener
("click", ()  => {

    //initializeions 
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    //loap through all elements 
    elements.forEach((element, index) => {
        //check if text includes the search value
        if(element.innerText.includes(searchInput.toUpperCase())){
            //display matching card 
            cards[index].classList.remove("hide");
        }else{
            //hide others 
            cards[index].classList.add("hide");
        }
    });
});
//Initially display all products
window.onload = () => {
    filterproduct("all");
};