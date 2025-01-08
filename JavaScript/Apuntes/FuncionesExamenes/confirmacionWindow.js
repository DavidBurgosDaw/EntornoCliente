function confirmacion(){
    let info ;  

    if(window.confirm("¿Seguro que quieres enviar los datos?")){
        info = window.open('', 'tuya', 'width=500,height=500,top=300,left=500');
        
            info.document.write("<p>Nos pondremos en contacto contigo</p>");
            info.document.close();  // Necesario para que el contenido se renderice correctamente
            
            window.setTimeout(function() {
        
                info.close();  
            
        }, 5000);
    }
}