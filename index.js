//let feet;
function scuberGreetingForFeet(feet){
  if (feet  <= 400) {
   return 'This one is on me!';
   } else if (feet <= 2001){
   return "I will gladly take your thirty bucks.";
   } else    (feet > 2500)
   return "No can do.";
}

function ternaryCheckCity(city){
  return (city === 'NYC' ? "Ok, sounds good." : "No go." );
}
// function ternaryCheckCity(city){
// return ternaryCheckCity = city === "NYC" ? "Ok, sounds good." : "No go." ;
// }


function switchOnCharmFromTip(tipAmount,){
  // Write your code here!
  switch(tipAmount) {
    case 'generous':
      return"Thank you so much.";
      break;
    case 'not as generous':
      return 'Thank you.' ;
      break;
    default:
      return "Bye.";
      // code block
  }
}