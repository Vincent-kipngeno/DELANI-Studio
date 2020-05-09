var message = function (name, email) {
  if (!name || !email) {
    alert("Please enter your name and email");
  } else {
    alert(name + "We have received your message.Thankyou for reaching out to us");
  }
}


$(document).ready(function(){
  $(".details-section1").click(function(){
    $(".icon1").toggle();
    $(".details1").toggle();
  });
  $(".details-section2").click(function(){
    $(".icon2").toggle();
    $(".details2").toggle();
  });
  $(".details-section3").click(function(){
    $(".icon3").toggle();
    $(".details3").toggle();
  });
});
$(document).ready(function(){
  $("hover-image").hover(function(){
    $(".text").fadeToggle();
  });
});
