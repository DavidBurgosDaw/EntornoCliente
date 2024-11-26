//Esta funcion es usada en el examen 2023, usar como ejemplo
function marcar(td,valor){
    tarifa = valor;
    todas = document.getElementsByTagName("td");
    for (i = 0;i<todas.length;i++){
        todas[i].style.backgroundColor = "white";
    }
    td.style.backgroundColor = "green";
}