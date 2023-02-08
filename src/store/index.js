import { createStore } from 'vuex'

export default createStore({
  state: {
    stock:false,
    productos:[
      {
        nombre: "Paisaje 1",
        precio: 1,
        imagen:"https://i.pinimg.com/originals/9d/41/6d/9d416d9a8ad70b0aca6f64ab092ec82a.jpg",
        stock_producto:true
      },
      {
        nombre:'Paisaje 4',
        precio: 4,
        imagen: 'https://depiedra.ws/uploads/products/mod-55-extra_crop_926_720.jpg',
        stock_producto:false
      },
      {
        nombre:'Paisaje 3',
        precio:3,
        imagen:'https://artsdot.com/ADC/Art.nsf/O/9GZJVM/$File/JacobIsaakszoonVanRuisdael(Ruysdael)-ALandscapewithaRuinedBuilding.JPG',
        stock_producto:true
      },
      {
        nombre: 'Paisaje 2',
        precio:2,
        imagen: 'https://ae01.alicdn.com/kf/HTB1vWjERVXXXXbkXFXXq6xXFXXX1.jpg?size=309392&height=700&width=900&hash=b53cf4cf47a35ab8be2ca463b599c4a5',
        stock_producto:false
      }
    ],
    
  },
  getters: {
    disponibles( state ){
      return state.productos.filter( prod => prod.stock_producto == true) //prod - el iterador
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
