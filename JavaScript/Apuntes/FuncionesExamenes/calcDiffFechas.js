const fecha1 = new Date('2024-11-01');
const fecha2 = new Date('2024-11-28');

const diferenciaEnMilisegundos = fecha2 - fecha1;
const diferenciaEnDias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24);

console.log(`Diferencia en días: ${diferenciaEnDias}`);
