//Getting all food to display them
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=all')
.then(res => res.json())
.then(data => { foodDiv(data)});


//Displaying all food by default.
const foodDiv = data => {
    const foodsDiv = document.getElementById("foods_div");
    const foods = data.meals;
    
    for (let i = 0; i < foods.length; i++) {
        const foodDiv = document.createElement("div");
        foodDiv.className = "foodDiv"
        const food = foods[i];
        const foodShow = `
            <img class="img_div" src=${food.strMealThumb} alt="">
            <p class="name_food">${food.strMeal}</p>
            `
        foodDiv.innerHTML = foodShow;
        foodsDiv.appendChild(foodDiv);        
    }
}


//Here getting the link from the search input tag
const getLink = () =>{
    const foodName =  document.getElementById("food-name").value;
    const firstLink = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    const fullLink = firstLink + foodName;
    return fullLink;
}


//adding event listener on search button
document.getElementById("search").addEventListener("click", () =>{
    const foodName =  document.getElementById("food-name").value;
    const foodsDiv = document.getElementById("foods_div");
    const fullLink = getLink();
    // console.log(fullLink);
    fetch(fullLink)
    .then(res => res.json())
    .then(data => {        
        if(foodName.length >0){
            const foodsDiv = document.getElementById("foods_div");
            foodsDiv.innerText = "";
            if(data.meals == null && data.meals == undefined){
                alert("give a valid food name");

            }else{
                foodDivForSearch(data);
            }            
        }
    })
});


//Showing the food which has been searched
const foodDivForSearch = data => {
    const foodsDiv = document.getElementById("foods_div");
    foodsDiv.style.display = "block";
    const food = data.meals;
    const foodSearchDiv = document.createElement("div");
    foodSearchDiv.className = "foodSearchDiv"
    foodSearchDiv.id = "click_div"
    const foodShow = `
        <img class="img_div" src=${food[0].strMealThumb} alt="">
        <p class="name_search_food">${food[0].strMeal}</p>
    `
    foodSearchDiv.innerHTML = foodShow;
    foodsDiv.appendChild(foodSearchDiv); 
    onclickFoodDiv(data, foodsDiv);       
}


//By clicking on food card it will show details
const onclickFoodDiv = (data) => {
    document.getElementById("click_div").addEventListener("click", ()=>{
        const foodDiv = document.getElementById("wholeBlock");
        foodDiv.innerText = "";
        const foodClickDiv = document.createElement("div");
        foodClickDiv.className = "foodClickDiv";
        foodClickDiv.id = "show_click_div";
        const obj = data.meals[0];
        console.log(obj)
        let foodShow = "";
        for (var key in obj) {
            if (obj[key] !== null && obj[key] != "" && obj[key] != " " && obj[key] != null){
                foodShow = `
                <img class="img_div img_ingredients" src=${data.meals[0].strMealThumb} alt="">
                <span class="ing" >Ingredients<span>
                <span class="name_food_show">${data.meals[0].strMeal}</span>
                <ul class="fa-ul" id="list_item">
                    <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${data.meals[0].strMeasure1}  ${data.meals[0].strIngredient1}</li>
                    <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${data.meals[0].strMeasure2}  ${data.meals[0].strIngredient2}</li>
                    <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${data.meals[0].strMeasure3}  ${data.meals[0].strIngredient3}</li>
                    <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${data.meals[0].strMeasure4}  ${data.meals[0].strIngredient4}</li>
                    <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${data.meals[0].strMeasure5}  ${data.meals[0].strIngredient5}</li>
                    <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${data.meals[0].strMeasure6}  ${data.meals[0].strIngredient6}</li>
                    <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${data.meals[0].strMeasure7}  ${data.meals[0].strIngredient7}</li>
                    <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${data.meals[0].strMeasure8}  ${data.meals[0].strIngredient8}</li>
                    <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${data.meals[0].strMeasure9}  ${data.meals[0].strIngredient9}</li>
                    <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${data.meals[0].strMeasure10}  ${data.meals[0].strIngredient10}</li>
                    <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${data.meals[0].strMeasure11}  ${data.meals[0].strIngredient11}</li>
                    <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${data.meals[0].strMeasure12}  ${data.meals[0].strIngredient12}</li>
                    <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${data.meals[0].strMeasure13}  ${data.meals[0].strIngredient13}</li>
                    <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${data.meals[0].strMeasure14}  ${data.meals[0].strIngredient14}</li>
                    <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${data.meals[0].strMeasure15}  ${data.meals[0].strIngredient15}</li>
                    <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${data.meals[0].strMeasure16}  ${data.meals[0].strIngredient16}</li>
                    <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${data.meals[0].strMeasure17}  ${data.meals[0].strIngredient17}</li>
                    <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${data.meals[0].strMeasure18}  ${data.meals[0].strIngredient18}</li>
                    <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${data.meals[0].strMeasure19}  ${data.meals[0].strIngredient19}</li>
                    <li class="list-item"><span class="fa-li list"><i class="fas fa-check-square"></i></span>${data.meals[0].strMeasure20}  ${data.meals[0].strIngredient20}</li>

                </ul>            
                `
            }
        }

        foodClickDiv.innerHTML = foodShow;
        foodDiv.appendChild(foodClickDiv);
        Element.prototype.remove = function() {
            this.parentElement.removeChild(this);
        }
        NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
            for(var i = this.length - 1; i >0; i--) {
                if(this[i].innerText == ""){
                    if(this[i] && this[i].parentElement) {
                        console.log(this[i].innerText == "")
                        console.log(this[i].parentElement)
                        this[i].parentElement.removeChild(this[i]);
                    }
                }
            }
        }
        document.getElementsByClassName("list-item").remove();        
    })
}
