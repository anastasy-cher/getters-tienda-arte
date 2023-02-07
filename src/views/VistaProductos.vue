<template>
  <section id="productos">
    <div id="check">
        <input type="checkbox" v-model="$store.state.stock">
        <span> artículos disponibles</span>
        <!-- <h1>{{ $store.state.stock }}</h1> -->
    </div>

    <!-- mostramos todos que hay -->
    <div id="caja_producto" v-if="$store.state.stock == true">
        <div class="caja" v-for="producto in $store.getters.disponibles" :key="producto.nombre">
            <img class="animate__fadeIn" :src="producto.imagen">
            <h1>{{ producto.nombre }}</h1>
            <h3>{{ producto.precio }}$</h3>
            <button>Añadir al carrito</button>
        </div>
    </div>

    <!-- mostramos los que estan en el stock -->
    <div id="caja_producto" v-if="$store.state.stock == false">
        <div class="caja" v-for="producto in $store.state.productos" :key="producto.nombre">
            <img class="animate__fadeIn" :src="producto.imagen">
            <h1>{{ producto.nombre }}</h1>
            <h3>{{ producto.precio }}$</h3>
            <span v-if="producto.stock_producto == false">Temporalmente no disponible</span>
            <button v-if="producto.stock_producto">Añadir al carrito</button>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name:'VistaProductos'
}
</script>

<style lang="sass" scoped>
*
    // border: 1px solid
    background: #1d1f20
    color: #d0d4d2

#productos
    height: 92vh
    #check
        height: 6vh
        display: flex
        align-items: center
        justify-content: center
    #caja_producto
        display: flex
        flex-wrap: wrap
        justify-content: space-evenly
        .caja
            margin-bottom: 1rem
            height: 85vh
            width: 40%
            display: flex
            align-items: center
            justify-content: space-between
            flex-direction: column
            // #img_nostock
            // transition: .8s
            // &:hover
            //     filter: grayscale(100%)
            img
                animation-duration: 3s
                width: 100%
                box-shadow: 1px 14px 44px -33px rgba(208,212,210,1)
                -webkit-box-shadow: 1px 14px 44px -33px rgba(208,212,210,1)
            h1,h3,span
                margin: .2rem
                text-align: center
            h1,h3
                background: transparent
            span
                display: flex
                align-items: center
                justify-content: center
                color: #e95010  
                background: #d0d4d2
                height: 50px
                width: 60%
                border-radius: 5px
                transition: 1s
                &:hover
                    filter: grayscale(100%)

            button
                border-radius: 5px
                height: 50px
                width: 60%
                background: #e95010
                color: #d0d4d2
                font-size: 18px
                margin-top: .3rem
                border: none
                cursor: pointer
                transition: .6s
                &:hover
                    background: #d0d4d2
                    color: #e95010
                    border: 2px solid #e95010
</style>