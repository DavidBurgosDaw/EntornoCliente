function comprobar_tfno(e){
}
function comprobar_codigo(e){
}

function comprobarCursos(){

    let precio = 0; //Defino la variable para guardar el precio
    let marcados = 0;
    let sql = document.getElementById('sql');
    let prog = document.getElementById('prog');
    let web = document.getElementById('web');
    if (prog.checked){
        marcados++;
    }

    if (sql.checked){
        marcados++;
        precio+=parseFloat(sql.value);
    }

    if (web.checked){
        marcados++;
    }

    //Verifico si marcaron algun curso
    if (marcados == 0){
        alert("Selecciona al menos una opcion")
    }
    

       // Verifico si han seleccionado prog o web
       if (prog.checked || web.checked) {
        // Verificar si se ha seleccionado algo en el select correspondiente
        let selectProg = document.getElementById('selprog');
        let selectWeb = document.getElementById('selweb');

        // Si se seleccionó "PROGRAMACION" pero no se ha elegido una opción del select
        if (document.getElementById('prog').checked && selectProg.value === "0") {
            alert('Por favor, selecciona una opción de programación.');
            return;
        }

        // Si se seleccionó "DISEÑO WEB" pero no se ha elegido una opción del select
        if (document.getElementById('web').checked && selectWeb.value === "0") {
            alert('Por favor, selecciona una opción de diseño web.');
            return;
        }

        precio += parseFloat(selectProg.value) + parseFloat(selectWeb.value);
    }
    //Pongo el valor de los precios en su campo 
    document.getElementById('precio').value = precio + "€";
}

function calcular(){
    comprobarCursos();
}