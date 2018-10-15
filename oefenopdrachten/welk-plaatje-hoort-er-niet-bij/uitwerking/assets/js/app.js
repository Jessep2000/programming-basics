var imageFolder = "./assets/images/";
var imageId;
//var category = ['fruit', 'zoogdieren'];
var question1 = [['category', 'fruit'],['apple','fruit'], ['orange','fruit'],['banana','fruit'],['hawk','bird']];
var question2 = [['category', 'bird'],['apple','bird'], ['orange','fruit'],['banana','bird'],['hawk','bird']];

window.addEventListener("load", init);

/**
 * Init application
 */
function init() {

    imageId = document.getElementById('images');
    imageId.addEventListener('click', clickImageHandler);

    var catId = document.getElementById('category');
    catId.addEventListener('click', clickCategoryHandler);

    addCategoryToScreen();
}

function addCategoryToScreen(){

  var categoryDiv = document.getElementById("category");
  var category = [];

  category.push(question1[0][1]);
  category.push(question2[1][1]);

  for (var i = 0; i < category.length; i++) {
      //Create img element
      var li = document.createElement("li");

      //Set attributes for HTML
      li.setAttribute("class", "cat");
      // libs/css/bikes.png
      li.innerHTML = category[i];
      //Append to productsDiv
      categoryDiv.appendChild(li);
  }
}

function clickCategoryHandler(e){
  console.log(e.target.innerHTML);
  var category = e.target.innerHTML;
  renderImages(category);
}

function clickImageHandler(e){
  console.log(e.target.alt);
  if(e.target.alt != 'fruit'){
    console.log('yep');
  }
  //find the fruit in de sequence and check is the category is fruit.
}

function addScore(){

}

function inTheRightSequence(){


}

function renderImages(category){
    //Get element by ID
    //var productsDiv = document.getElementById("products");

    console.log(category.length);

    //Loop through images
    for (var i = 0; i < category.length; i++) {
        //Create img element
        var img = document.createElement("img");

        //Set attributes for HTML
        img.setAttribute("class", "image-sequence");
        // libs/css/bikes.png
        img.setAttribute("src", imageFolder + category[i][0] + '.png');
        // Bike
        img.setAttribute("alt", category[i][1]);

        //Append to productsDiv
        imageId.appendChild(img);
   }
}
