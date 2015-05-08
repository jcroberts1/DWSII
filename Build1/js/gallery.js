var targetCard,
    cardX,
    cardY,
    cardBg;

$(".cardWrapper").on("mouseover", function(){
  targetCard = $(this).children();
  cardX = $(this).offset().left;
  cardY = $(this).offset().top;
  cardBg = targetCard.css('background-image');
}).on("mousemove", function(event) {
  var rotateValX = ((event.clientX - cardX) - $(this).width()/2) * 0.1;
  var rotateValY = -((event.clientY - cardY) - $(this).height()/2) * 0.05;
  
  targetCard.css({
    "transform":"rotateY("+  rotateValX +"deg) rotateX("+  rotateValY +"deg)"});
  $(".bigView").css({"background":cardBg});
  $(".bigView").fadeIn(100); $(".card").not(targetCard).addClass("fade");
}).on("mouseleave", function(event) {
  targetCard.css({"transform":"rotateY(0deg) rotateX(0deg)"});
  $(".bigView").fadeOut(100);
  $(".card").removeClass("fade");
});

$(".card").each(function() {
 $(this).css({"background":"url(http://lorempixel.com/1000/1000/?"+ Math.floor(Math.random()*9999) +")"});
});