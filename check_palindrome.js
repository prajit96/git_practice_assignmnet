// check Palindrome or not

let str="racecar";
let string="";

  for(let i=str.length-1;i>=0;i--){
      string=string+str[i];
  }if(str==string){
      console.log("Yes it's a Palindrome");
  }else{
      console.log("Not a palindrome");
  }
