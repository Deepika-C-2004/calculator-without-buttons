let result = document.createElement("div");
result.id ="answer";
document.getElementById("wrapper").appendChild(result);
const btn=document.getElementById("button");
btn.addEventListener('click', calculate);
function calculate(){
    let oper1,oper2,operator,ans;
    // console.log("Clicked");
    let exp=document.getElementById("myid").value ;
    // console.log(exp);
    for(let i=0;i<exp.length;i++){
        if(exp.charAt(i)=='+' || exp.charAt(i)=='-' || exp.charAt(i)=='*' || exp.charAt(i)=='/'){
            operator=exp.charAt(i);
            oper2=exp.substring(i+1);
            oper1=exp.substring(0,i);
        }

    }
    let a= Number(oper1);
    let b= Number(oper2);
    switch(operator){
        case '+' :
            ans = a+b;
            document.getElementById("answer").innerHTML="Answer : " +ans;
            break;
         case '-' :
            ans = a-b;
            document.getElementById("answer").innerHTML="Answer : " +ans;
            break;
         case '*' :
            ans = a*b;
            document.getElementById("answer").innerHTML="Answer : " +ans;
            break;
         case '/' :
            ans = a/b;
            document.getElementById("answer").innerHTML="Answer : " +ans.toFixed(2);
            break;
        default :
             document.getElementById("answer").innerHTML="Invalid expression" ;
             break;

    }

}