  function contactuspage(){
    document.getElementById("mainpage").style.display="none";
    document.getElementById("contactus").style.display="block";
  }
  $(function(){
    $("#drinksPhoto").click(function(){
      $("#pDrinks").slideToggle();
    });
    $("#foodPhoto").click(function(){
      $("#pFood").slideToggle();
    });
    $("#specialsPhoto").click(function(){
      $("#pSpecials").slideToggle();
    });
    $("#desertPhoto").click(function(){
      $("#pDeserts").slideToggle();
    });
  });
