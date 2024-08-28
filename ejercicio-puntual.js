// codigos terminados en 8 y 9
function repetirCaracteres() {
    // Escribi una funcion llamada 'repeatCharacters' en el prototypo del objeto global String
    // que reciba como parametro un string
    // y devuelve un string en donde cada letra se repita una vez.
    // Por ej:
    // 'hola'.repeatCharacters() devuelve "hhoollaa"
  
    // Tu código aca:

    var _string = this;
    var result = '';
    
    for (var i = 0; i < _string.length; i++) {
        let letra = _string[i];
        result += letra + letra; 
    }

    return result;
}

String.prototype.repetirCaracteres = repetirCaracteres;

console.log("hola".repetirCaracteres()); // hhoollaa