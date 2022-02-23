const loadMeals = async () =>{
    const searchInput = document.getElementById("search-input");
    const searchText = searchInput.value;

  try {
        // clear input
    searchInput.value = '';
    if(searchText === ''){
        console.log("hi")
    }
    else{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        const res = await fetch(url)
        const data = await res.json()
        showDisplayMeals(data.meals)
    }
  } catch (error) {
      console.log(error)
  }
}
const showDisplayMeals =  meals =>{
    const display = document.getElementById('display');
    // clear field
    display.textContent = '';
    if(meals === null){
        document.getElementById("error-text").innerText = 'search result not found'
    }
   else{
    meals.forEach(meal => {
        const mealDiv = document.createElement("div");
        mealDiv.innerHTML = `
        <img class="meal-img" width="300px" src="${meal.strMealThumb}" alt="" />
        <p>${meal.strMeal}</p> 
        <button class="details">Details</button>      
        `
        // <img src="${meal.strMealThumb} alt="" />
        display.appendChild(mealDiv)
        document.getElementById("error-text").innerText = '';
    });
   }
   
}

