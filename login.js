/*
Descripcion:
paramrtros
return
*/

//Comentario de una linea

function setlogin (){
    try{
         var user = document.getElementById("user").value;
         var pass = document.getElementById("user").value;
        if(user == ""){
            document.getElementById("user");
            inputUser.classlist.add("error-input");
           // alert("Campo usuario obligatorio"); 
        }

         alert("Usuario: "+ user + "password" + pass);

    } catch (error){
        console.log(error);
    }
}
