function Carro(marca, modelo, color) {
  this.marca = marca
  this.modelo = modelo
  this.color = color
}

const miCarro = new Carro('Ford', 'Fiesta', 'Rojo')
console.log(
  `El carro es un ${miCarro.marca} ${miCarro.modelo} de color ${miCarro.color}`
)

const vehiculo = {
  tipo: ['carro', 'moto'],
  marca: {
    nombre: 'Ford',
  },
  motor: '12 cilindros',
  encender: function () {
    console.log(`El motor de ${this.motor} esta encendido`)
  },
}
vehiculo.encender()
