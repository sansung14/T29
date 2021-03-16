function validarFecha(fecha) {
    if (/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/.test(fecha)){
        alert("La fecha " + fecha + " es correcta.");
    } else {
        alert("La fecha esta en el formato incorrecto.");
    }
}

function validarEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        alert("La dirección de email " + email + " es correcta.");
    } else {
        alert("La dirección de email es incorrecta.");
    }
}

function escapeHTML(text){
    var replacements = [[/([&])/, "&amp;"],[/([\"])/,"&quot;"],
                        [/([<])/,"&lt;"],[/([>])/, "&gt;"]];
    replacements.forEach(replace => {
        text = text.replace(replace[0], replace[1]);
    });


    return text;
}

function nombreApellidos(nombre){
    var correcto = false;
    if(/(^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,16})+$/.test(nombre)){
        correcto = true;
    }

    if(correcto==true){
        var ordenado = nombre.split(' ').map(s=>s.trim());
        return ordenado.reverse();
    }
    return "Nombre o apellidos mal introducidos";
}


function etiquetas(html) {
    var contenido = html.match(/(?!<title>)\w+(?=<\/title>)/gi);

    return contenido;
}

alert(etiquetas(`<div><title>titulo1</title><title>titulo2</title></div>`));

alert(nombreApellidos("David Lascorz"));

alert(escapeHTML("r<e&mp\"az>a"));

alert(validarFecha("05/04/1982"));

alert(validarEmail("maria@hotmail.com"));
