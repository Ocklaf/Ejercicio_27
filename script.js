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
Thriller, War, Western.
 */

class Pelicula {
  constructor({idIMDB, titulo, director, anioEstreno, origen, genero, calificacionIMDB}){
    this.idIMDB = idIMDB
    this.titulo = titulo
    this.director = director
    this.anioEstreno = anioEstreno
    this.origen = origen
    this.genero = genero
    this.calificacionIMDB = calificacionIMDB

    this.verificaIdIMDB(idIMDB)
    this.verificaTitulo(titulo)
    this.verificaDirector(director)
    this.verificaAnioEstreno(anioEstreno)
    this.verificaOrigen(origen)
    this.verificarGenero(genero)
  }

  standardCadena(propiedad, valor){
    if(!valor) return console.warn(`El campo ${valor} está vacío`)
    if(typeof valor !== "string") return console.warn(`El campo ${propiedad} no es una cadena de texto`)
    return true
  }

  standardNumero(propiedad, valor){
    if(!valor) return console.warn(`El campo ${valor} está vacío`)
    if(typeof valor !== "number") return console.warn(`El campo ${propiedad} no puede ser distinto de un valor numérico`)
    return true
  }

  verificaIdIMDB (idIMDB) {
    if(this.standardCadena("idIMDB", idIMDB)){
      if(idIMDB.length !== 9) return console.warn("El campo idIMDB no tiene el número de carácteres necesario (9, dos primeros letras, resto números)")
      if(!(/^([A-Za-z]){2}([0-9]){7}$/.test(idIMDB))) return console.error("El campo idIMDB sólo puede contener 2 letras al principio seguido de 7 números")
    }
  }

  verificaTitulo(titulo){
    if(this.standardCadena("Título", titulo)){
      if(titulo.length>100) return console.error("El título de la película no puede contener más de 100 carácteres")
    }
  }

  verificaDirector(director){
    if(this.standardCadena("Director", director)){
      if(director.length>50) return console.error("El título de la película no puede contener más de 100 carácteres")
    }
  }

  verificaAnioEstreno(anioEstreno){
    if(this.standardNumero("Año de estreno", anioEstreno)){
      if(!(/^([0-9]){4}$/.test(anioEstreno))) console.error(`El año de estreno debe tener 4 dígitos y ser positivo`)
    }
  }

  verificaOrigen(origen){
    if(origen === undefined) return console.warn(`El valor "Origen" no se ha definido`)
    if(!(origen instanceof Array)) return console.error("El origen u origenes, debe de ser un Array")
    if(origen.length === 0) return console.warn("El array no tiene datos")
    for(let valor of origen)
      if(typeof valor !== "string") console.error("Los datos del Origen de la película, deben ser texto")
  }

  verificarGenero(genero){
    if(genero === undefined) return console.warn(`El valor "Género" no se ha definido`)
    if(!(genero instanceof Array)) return console.error("El genero, debe de ser un Array")
    if(genero.length === 0) return console.warn("El array no tiene datos")
    for(let valor of genero)
      if(typeof valor !== "string") console.error("Los datos del Género de la película, deben ser texto")
  
     /*  const generosAceptados = {Action, 
        Adult, 
        Adventure, 
        Animation,
        Biography, 
        Comedy, 
        Crime, 
        Documentary,
        Drama, 
        Family, 
        Fantasy, 
        FilmNoir,
        GameShow,
        History, 
        Horror, 
        Musical,
        Music, 
        Mystery,
        News, 
        RealityTV,
        Romance, 
        SciFi,
        Short, 
        Sport, 
        TalkShow,
        Thriller,
        War, 
        Western}    

      if(this.standardCadena("Género", genero)){
        //if(genero !== generosAceptados) console.error("El género no es válido")
      }
   */
   }

  }



const interestelar = new Pelicula({idIMDB: "tt3456789",
                                  titulo: "Lo que el viento se llevó",
                                  director: "Steven Spilberg",
                                  anioEstreno: 1999,
                                  origen: ["España", "EEUU"],
                                  genero: ["Atún"]}) 
console.log(interestelar)