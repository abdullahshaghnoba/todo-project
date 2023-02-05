let Name= prompt("Please Enter Your Name :");
let Gender= prompt("Please Enter Your Gender : Male or Female");
let Age= prompt("Please Enter Your Age :");
if (Age<=0){
    alert("Invalid Value");
}
let welcomingMessage= confirm("to skip the welcoming message click Cancel");
if(welcomingMessage==true){
    if(Gender==="Male"||Gender==="male"){
        alert("Welcome Mr "+Name);
    }
    else if(Gender==="Female" ||Gender==="female"){
        alert("Welcome Ms "+Name);
    }
    else {
        alert("Welcome "+Name);
    }

}