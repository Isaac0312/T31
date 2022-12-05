function numero(str){
    document.getElementById("textoPantalla").value += str ;
}
function borradoTotal(){
    document.getElementById("textoPantalla").value="";
}

function operar(str){
    document.getElementById("textoPantalla").value+= str;
}

function igualar(){
    document.getElementById("textoPantalla").value = eval(document.getElementById("textoPantalla").value);
}

function opuest(){
    document.getElementById("textoPantalla").value= '-('+document.getElementById("textoPantalla").value+')';
}

function inve(){
    document.getElementById("textoPantalla").value= '('+document.getElementById("textoPantalla").value+')**(-1)';
}


function raizc(){
    document.getElementById("textoPantalla").value= '('+document.getElementById("textoPantalla").value+')**(0.5)';
}
function retro(){
    document.getElementById("textoPantalla").onfocus= document.getElementById("textoPantalla").onfocus-1;
}