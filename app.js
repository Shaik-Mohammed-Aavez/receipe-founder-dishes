const appId = "34165f2"
const appkey = "e9e83cfa15100be9c19acbe21ebf4fd8"
const baseurl = 'https//api.edamam.com/api/recipes/v2?type=public&app-id=${appId}&app-key${appkey}';
const recipecontainer =document.querySelector("#recipe-container");
function loadRecipes(type='paneer') {
    const url = baseurl + 'q=${type}';
    fetch(url)
    .then((res)=> res.json())
    .then((data) => renderRecipies(data.hits))
    .catch((error) => console.log(errroe));
}
loadRecipes();

const renderRecipies = (recipelist=[]) => {
    let str = "";
    recipelist.forEach((recipeobj) => {
        const {
            label : recipeTitle,
            ingredientLines,
            image:vrecipeImage
        } = recipeobj.recipe;

         const htmlstr = ' <div class = "recipe">
              <div class="recipe-title">Recipe Title</div>
              <div class="recipe-image">
                <img src="$(images recipe.jpg)" />
              </div>
              <div class="recipe-text">
                <ul>
                    <li>step 1</li>
                    <li>step 2</li>
                    <li>step 3</li>
                    <li>step 4</li>
                    <li>step 5</li>
                </ul>
              </div>
            </div>;
          recipecontainer.insertAdjacentHTML("beforeend",htmlstr)  
    });    
};