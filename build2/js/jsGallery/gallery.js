//*** This is a rough method to display pictures in gallery with javascript***
//*** Will have to update when I learn more ***



// forward declaration for variables
var houses = [];
var huts = [];
var interiors = [];
var stairs = [];
var pictures = {};

// adding pictures in housesAndRenovations folder to array 
function postHouses() {

    for (i = 1; i <= 5; i++) {
        houses.push("../../img/gallery/housesAndRenovations/" + i +".jpg");
    };
    
    for (i = 1; i < houses.count; i++){
        document.write("<a href='" + houses[i] +"'><img src='" + houses[i] + "' alt='picture of a house'></a>")
    };

}

postHouses();

// adding pictures to gallery

// ============== END housesAndRenovations ===========================

// adding pictures in huts folder to array 

// for (i = 0; i < 2; i++) {
//     houses.push("../../img/gallery/huts/" + i +".jpg");
// };


// ============== END huts ===========================================



// adding pictures in interiors folder to array 

// for (i = 0; i < 1; i++) {
//     houses.push("../../img/gallery/huts/" + i +".jpg");
// };

// ============== END interiors =======================================


// adding pictures in stairs folder to array 


// ============== END stairs ==========================================