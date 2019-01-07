//Spell #1

$("#Alohomora").click(function(){
$("#locked-door").hide();
$("#unlocked-door").show();
});



//Spell #2

$("#Lumos").click(function(){
$("#wand-light").fadeToggle();
$("#darkness").fadeToggle();
$("#wand-light").show();
 
});



//Spell #3

$("#Evanesco").click(function(){
$("#hat").fadeOut();
$("#oof").fadeIn();
 
});



