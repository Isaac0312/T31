function simulacion(){
    var array = new Array(30).fill(0);;
    for (var i=0;i<35999;i++){
        var dado1 = getRandomIntInclusive(1,6);
        var dado2 = getRandomIntInclusive(1,6);
        var suma = dado1+dado2;
        array[suma]=array[suma]+1;
    }

    for (var i=0;i<30;i++){
        console.log(array[i]);

    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function ejercicio12_fecha(ejemplo){
    patron = /([0][1-9]|[12][0-9]|3[01])(\/)([0][1-9]|[12][0-9]|3[01])(\/)(\d{4})/;
    if(patron.test(ejemplo)){
        document.write("Cumple el patron XX/XX/XXXX\n");
    }else{
        document.write("No cumple el patron XX/XX/XXXX\n");
    }
    
}

function ejercicio12_correo(ejemplo){
    patron = /^[\w]+@{1}[\w]+\.{1}[a-z]{2,3}$/;
    if(patron.test(ejemplo)){
        document.write("Cumple el patron del email\n");
    }else{
        document.write("No cumple el patron del email\n");
    }
}

function ejercicio12_etiquetas(string){
    patron = /<[\w]+>|<\/[\w]+>/;
    document.write("<br>Este era el string antes de la función: <br>",string);
    var aux= string.replace(patron,"");
    document.write("<br>Este es el string despues de la función: <br>",aux);
    document.write("<br>Como podemos apreciar, se ha quitado la negrita de la palabra,<br> con lo cual se han quitado las etiquetas strong")
}

function ejercicio12_reves(string){
    patron=/^[\w]+[\s][\w]+$/;
    if(patron.test(string)){
        divisiones=string.split(" ",2);
        document.write("<br>",divisiones[1],", ",divisiones[0]);
    }
}

function escapeHTML(text){
    var replacements = [["&",/\&[a-z]{3}\;/],["\"",/\&[a-z]{4}\;/],["<",/\&lt\;/], [">",/\&gt\;/]];

    forEach(replacements, function(replace) {
        text = text.replace(replace[0],replace[1]);
    });
    console.log(text);  
}
function ejercicio13() {

    document.getElementById("primero")
    .addEventListener("click", function(event) {
        alert("Han dado click en el primer párrafo");
        event.preventDefault();
    });
    
    document.getElementById("segundo")
    .addEventListener("click", function(event) {
        alert("Han dado click en un párrafo de la primera tabla");
        event.preventDefault();
    });

    document.getElementById("tercero")
    .addEventListener("click", function(event) {
        alert("Han dado click en un párrafo de la segunda tabla");
        event.preventDefault();
    });
}  

function ejercicio14(){
    
}

function reloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()
    
    horaImprimible = hora + " : " + minuto + " : " + segundo
    
    document.form_reloj.reloj.value = horaImprimible
    setTimeout("reloj()",1000)
}

function resize(img,message){
    document.getElementById("segundo").src=img;
    document.getElementById("message").textContent = message;
    
}