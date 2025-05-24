const generarLUNuevo = (alumnos) =>{
    const numeros = alumnos.map(a => parseInt(a.lu.replace("apu",""),10));
    const max = numeros.length > 0? Math.max(...numeros): 0;
    const nuevoNumero = (max + 1).toString().padStart(4,"0");
    return "apu" + nuevoNumero;
}
export default generarLUNuevo;