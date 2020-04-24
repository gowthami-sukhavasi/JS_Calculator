let n = "";
var op="";
function myFunction(id) {

        if(id == '+' || id=="-" || id=="*" || id=="/") {
        op= id;
        n=n+op;
        document.getElementById("inputbox").value = n;
    } 
    else{
    n = n + document.getElementById(id).value;
    document.getElementById("inputbox").value = n;
    }
}
   function myFunction1(id){
        n=eval(n);
        document.getElementById("inputbox").value = n;
    }
    function myFunction2(id){
        document.getElementById("inputbox").value = "";
        n="";
    }
