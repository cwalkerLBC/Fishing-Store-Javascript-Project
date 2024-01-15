window.addEventListener("DOMContentLoaded", function(e){
    console.log("The page is loaded.");
});

let btn = document.querySelector("#click-me");
btn.addEventListener("click", function(e) {
    console.log("The button was clicked");
    alert ("Fishing is life!");

});