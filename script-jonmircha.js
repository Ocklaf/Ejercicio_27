/* La clase recibirá un objeto al momento de instanciarse con los 
siguentes datos: id de la película en IMDB, titulo, director, 
año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean 
  letras y los 7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, 
Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, 
Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, 
News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, 
Thriller, War, Western. */

class Pelicula{
  //Se nos pide en el enunciado que enviemos un objeto, por ello
  //el constructor debe recibir un objeto {}
  constructor({id, titulo, director, estreno, pais, generos, calificacion}){
    //atributos o propiedades
    this.id = id
    this.titulo = titulo
    this.director = director
    this.estreno = estreno
    this.pais = pais
    this.generos = generos
    this.calificacion = calificacion

    //llamada a las validaciones
    this.validarIMDB(id)
    this.validarTitulo(titulo)
    this.validarDirector(director)
    this.validarEstreno(estreno)
    this.validarPais(pais)
    this.validarGeneros(generos)
    this.validarCalificacion(calificacion)
  }

  //metodos estáticos getters y setters

  //esto es un atributo estático porque js lo trata como tal
  static get listaGeneros(){
    return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy",
    "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir",
    "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", 
    "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", 
    "Talk-Show", "Thriller", "War", "Western"]
  }

  //metodo estático, se les puede llamar sin instanciar la clase
  static generosAceptados(){
    //retornamos el atributo estático, como es un Array, usamos el join para convertirlo a string y con el separador ",espacio"
    return console.info(`Los géneros aceptados son: ${Pelicula.listaGeneros.join(", ")}`)
  }

  //metodos fuera del constructor

  validarCadena(propiedad, valor){    //validación para strings 
    //recibirá la propiedad a evaluar (id, titulo...) y el valor
    if(!valor) return console.warn(`${propiedad} "${valor}" está vacío`)
    if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" NO es un texto`)
    
    return true //si ninguna validación se ha activado, devulve un true
  } //validación para strings, recibirá la propiedad a evaluar (id, titulo...) y el valor

  validarLongitudCadena(propiedad, valor, longitud){
    //comprobamos que la si la longitud del valor es mayor que el valor de longitud
    if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede del número de carácteres permitidos (${longitud})`)
    //si no ha entrado en el if, entonces devuelve que ok, true
    
    return true
  }

  validarNumero(propiedad, valor){
    //verificamos que no venga vacío el campo valor
    if(!valor) return console.warn(`${propiedad} "${valor}" está vacío`)
    //verificamos que se trate de un número y no de otro tipo de dato
    if(typeof valor !== "number") return console.error(`${valor} introducido NO es un número`)
  
    return true
  }

  validarArreglo(propiedad, valor){
    //si no hay datos
    if(!valor) return console.error(`${propiedad} "${valor}" está vacío`)
    //si no es un array    
    if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" introducido, NO es un Array`)
    //si el array está vacío
    if(valor.length === 0) return console.error(`${propiedad} "${valor}" no contiene datos`)
    //si todo lo que contiene es texto
    for(let cadena of valor)
      if(typeof cadena !== "string") console.error(`El valor "${cadena}" introducido, no es una cadena de texto`)
  
    return true
  }

  validarIMDB(id){
    //si esto viene como verdadero (la función de validarCadena ha devueltro true)
    if(this.validarCadena("IMDB id", id)) //Entonces hace el if de la Exp Reg
      //cuando NO cumpla la Expresión Regular
      //nada delante ^, nada detrás $, ([de la a a la z minúsculas]), {2 carácteres} y (de 0 a 9) {7 carácteres}
      if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) 
        return console.error(`IMDB id "${id}" no es válido, debe tener los 2 primeros carácteres como letras, seguido de 7 números`)
  }

  validarTitulo(titulo){
    //si esto viene como verdadero (la función de validarCadena ha devueltro true)
    if(this.validarCadena("Título", titulo)) //Entonces ejecuta la línea de la llamada de evaluar la longitud
        //si se cumple validarLongitudCadena está ok, si no lo está, será LongitudCadena quien de el return con el error
        this.validarLongitudCadena("Título", titulo, 100)
  }

  validarDirector(director){
    //si esto viene como verdadero (la función de validarCadena ha devueltro true)
    if(this.validarCadena("Director", director)) //Entonces ejecuta la línea de la llamada de evaluar la longitud
        //si se cumple validarLongitudCadena está ok, si no lo está, será LongitudCadena quien de el return con el error
        this.validarLongitudCadena("Director", director, 50)
  }

  validarEstreno(estreno){
    if(this.validarNumero("Año de estreno", estreno)) //si las verificaciones de validarNumero viene true, ejecuta la siguiente línea
      if(!(/^([0-9]){4}$/.test(estreno))) //verificamos que sólo contenga números y tenga 4 dígitos
      //si no cumple con la expresión regular anterior, devuelve el returns
        return console.error(`El año de estreno "${estreno}" NO es válido. Deber ser un número de 4 dígitos`)
  }

  validarPais(pais){
    //llamamos al métdo de validarArreglo que es quién va a evaluar 
    //que pais tenga los datos esperados
    this.validarArreglo("País", pais) //si todo ok, devuelve true
  }

  validarGeneros(generos){
    //llamamos al métdo de validarArreglo que es quién va a evaluar 
    //que generos tenga los datos esperados
    if(this.validarArreglo("Géneros", generos)){ //si todo ok, devuelve true
      for(let genero of generos) //recorre el Array enviado al instanciar
      //console.log(genero, Pelicula.listaGeneros.includes(genero)) //para evitar tener que recorrer todo el array de géneros realizado con el método estático
      //el método includes() recibe la coincidencia a buscar (true or false)
      //no necesita "this" porque es un estático
      if(!(Pelicula.listaGeneros.includes(genero))){//si listageneros NO (!) incluye ninguno de los valores que le vienen en el array
        console.error(`Género(s) incorrectos "${generos.join()}"`) //indica que lo géneros no son correctos (el array lo junta)
        Pelicula.generosAceptados()//damos la lista a modo de reminder
      }
    }
  }

  validarCalificacion(calificacion){
    if(this.validarNumero("La calificación", calificacion)) //si las verificaciones de validarNumero viene true, ejecuta la siguiente línea
      return (calificacion < 0 || calificacion >10) //verificamos que sea de 0 a 10
        ? console.error(`La calificación va de 0 a 10`)
        : this.calificacion = calificacion.toFixed(1)
  }

  fichaTecnica(){
    console.info(`Ficha Técnica:\nTítulo: ${this.titulo}\nDirector: ${this.director}\nAño de estreno: ${this.estreno}\nPaís de origen: ${this.pais.join(" - ")}\nGéneros: ${this.generos.join(", ")}\nCalificación: ${this.calificacion}\nId IMDB: ${this.id}`)
  }
}

//************************** PRUEBAS ****************************

//podemos llamar a un método estático sin crear/instanciar una clase
//usamos el nombre de la clase y el método que queremos static
Pelicula.generosAceptados()

//instanciar clase o crear instancia es como se llama
const peli = new Pelicula({
  id: "tt1234567",
  titulo: "Carreovejas",
  director: "Will Smith",
  estreno: 2020,
  pais: ["España"],
  generos: ["Western"],
  calificacion: 7.789
})

peli.fichaTecnica()

const misPelis = [
  {
    id: "tt0758758",
    titulo: "Into the Wild",
    director: "Sean Penn",
    estreno: 2007,
    pais: ["USA"],
    generos: ["Adventure", "Biography", "Drama"],
    calificacion: 8.1
  },
  {
    id: "tt0479143",
    titulo: "Rocky Balboa",
    director: "Sylvester Stallone",
    estreno: 2006,
    pais: ["USA"],
    generos: ["Action", "Drama", "Sport"],
    calificacion: 7.1
  },
  {
    id: "tt0468569",
    titulo: "The Dark Knight",
    director: "Christopher Nolan",
    estreno: 2008,
    pais: ["USA", "UK"],
    generos: ["Action", "Crime", "Drama"],
    calificacion: 9.0
  }]

  //a la variable misPelis que contiene el array 
  //con 3 objetos con los datos de 3 películas, le aplica
  //el método forEach(), por cada uno de los objetos del
  //array (el), le pasa el elemento (el) y le dice que,
  //por cada elemento, generes una nueva instancia de
  //la clase Pelicula a la que le pasa cada objeto (el), y,
  //al mismo tiempo, llama al método fichaTecnica() para mostrar
  //cada nueva clase creada

  misPelis.forEach(el => new Pelicula(el).fichaTecnica())