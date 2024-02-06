let input = prompt("Enter your Score (Between 0-100) :")
input=parseInt(input);

if(input>=90){
   alert("Your Grade is A");
}else if(input>=80){
   alert("Your Grade is B");
}else if(input>=70){
    alert("Your Grade is C");
 }else if(input>=55){
    alert("Your Grade is D");
 }else if(input>=40){
    alert("Your Grade is E");
 }else if(input<40){
    alert("Your Grade is F");
 }