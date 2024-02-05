let number=prompt("Enter the Number to be converted");
 number =parseFloat(number);

let input = prompt("Enter: 1 for KM-M conversion , 2 for C-F conversion");
input=parseInt(input);


if(input==1){
    let convert1=prompt("Enter: 3 for KM to M , 4 for M to KM");
    convert1=parseInt(convert1);
    if(convert1==3){
        let km = number*0.62;
        alert("The  number of miles is "+ " " + km); 
    }else{
        let m = number*1.6;
        alert("The number of km is" +" "+ m );
}}
if(input==2){
    let convert2=prompt("Enter: 5 for C to F , 6 for F to C"); 
    convert2=parseInt(convert2);
    if(convert2==5){
        let cel = number*9/5 + 32 ;
        alert("The temperature in Celsius is" + " " +cel);
    }else{
         let fah = number*5/9 -32 ;
         alert("The temprature in fahrenheit is"+" "+ fah);
    }   
}


