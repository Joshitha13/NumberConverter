function convertNumber(){
    const num=parseInt(document.getElementById("input1").value);
    const format=document.getElementById("formatSelect").value;
    const resultDiv=document.getElementById("result");
    if(isNaN(num)){
        resultDiv.innerText="Please enter a valid number.";
        resultDiv.style.color="red";
        return;
    }
    let result="";
    if(format=="Octal"){
        result=num.toString(8);
    }else if(format=="Hexadecimal"){
        result=num.toString(16).toUpperCase();
    }
    resultDiv.style.color="white";
    resultDiv.innerText=`Converted Value:${result}`;
}