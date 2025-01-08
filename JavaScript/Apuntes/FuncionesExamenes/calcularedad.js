function calcularEdad(fechaSistema, fechaNac){
	edad=fechaSistema.getFullYear()-fechaNac.getFullYear();
	if (fechaSistema.getMonth() < fechaNac.getMonth())
		edad--;
	else
		if (fechaSistema.getMonth() == fechaNac.getMonth())
			if (fechaSistema.getDate() < fechaNac.getDate())
				edad--;
}