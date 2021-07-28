let hover = document.getElementById('hover')


  // This handler will be executed every time the cursor
  // is moved over a different list item
hover.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.background = "orange";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.background = "";
    }, 500);
  }, false);

  //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}