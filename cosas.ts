const pelis = [
  {
    titulo:'hola', rating:4,id:1
  },
  {
    titulo:'chau', rating:6,id:2
  },
  {
    titulo:'hola', rating:7,id:3
  }
]

function getAll () {
  return pelis
}

function getById (id:number) {
const peliEncontrada =
pelis.find (p => {return p.id == id} )
return peliEncontrada
}

export { getAll, getById }
