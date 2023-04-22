var smallDeviceMenu = document.getElementById("smallDeviceMenu")
function showMenu() {
    smallDeviceMenu.style.right = "0px";
    

}
function hideMenu() {
    smallDeviceMenu.style.right = "-250px";
}


//------------------------------------------------------------------------------------
// This button is created to help the user get back to the top of the page in one click

// Getting the button element
var btnTop = document.getElementById("btnTop");

// When the user scrolls down at least 20px from the top of the document, the button shows up
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.style.display = "block";
    
  } else {
    btnTop.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the page
btnTop.addEventListener("click", function() {
    
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

