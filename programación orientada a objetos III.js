function persona (nombrePersona) {
/*This almacena el argumento nombrePersona que se pase al momento de instanciar la función*/
	this.nombre = nombrePersona;
	/*Aquí pasara a escribir el argumento anteriormente almacenado en el this nombre*/
	this.info = "Esta persona se llama: " + this.nombre;
	this.mostrarInfo fuction() {
		alert(this.info);

	}
	var persona1 = new persona("Adan");
	var persona2 = new persona ("Eva");
}