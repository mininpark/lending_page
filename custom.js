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