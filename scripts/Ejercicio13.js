document.getElementById("tabla").addEventListener("click", presionarParrafo);
document.getElementById("tabla2").addEventListener("click", presionarParraSegunda);

function presionarParrafo(){
  alert('se presionó un párrafo del documento');
}

function presionarParraSegunda(){
  alert('se presionó un párrafo contenido en la segunda tabla.');
}
