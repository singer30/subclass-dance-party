$(document).ready(function() {
  window.dancers = [];
  

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var topP = window.innerHeight * Math.random();
    if (topP > (window.innerHeight - 100)) {
      topP = window.innerHeight - 150;
    } else if (topP < 70) {
      topP = 70;
    }

    var dancer = new dancerMakerFunction(
      topP,
      window.innerWidth * Math.random(),
      Math.random() * 1000);
    window.dancers.push(dancer);
    
    if (dancer instanceof MakePulpDancer) {
      $(dancer.$node).addClass("pulp");
      $(dancer.$node).append('<img src="Dancers/Bender.gif" height="70" width="50"></img>');
      dancer.event = setInterval(dancer.move.bind(dancer), Math.random() * 1000);
    }
    if (dancer instanceof MakeBreakDancer) {
      $(dancer.$node).addClass("break");
      $(dancer.$node).append('<img src="Dancers/PeterGriffen.png" height="70" width="50"></img>');
    }
    if (dancer instanceof MakeBlinkyDancer) {
      $(dancer.$node).addClass("blinky");
      $(dancer.$node).append('<img src="Dancers/PBJT.png" height="70" width="50"></img>');
    }

    $('body').append(dancer.$node);
    
    $(".dancer, img").mouseover( function() {
      var thisLeft = parseFloat($(this).css("left").slice(0, -2));
      var thisTop = parseFloat($(this).css("top").slice(0, -2));
      $(this).attr("src", "BackGround/smoke.gif");
      var blow = function() {
        $(this).remove();
      };
      setTimeout(blow.bind(this), 500);
      
    });
    
    setInterval(range, 1000);
    
  });
  
  $('.lineUp').on('click', function(event) {
    var lineUpFunctionName = $(this).data('line-up');
    var lineUpFunction = window[lineUpFunctionName];
    lineUpFunction();
  });
});

