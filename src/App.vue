<template>
  <nav>
    <!-- <img src="./assets/line.png"> -->
    <router-link to="/">Inicio</router-link>
    <router-link to="/tienda">Tienda</router-link>
  </nav>
  <router-view/>
</template>

<style lang="sass">
*
  font-family: 'Rubik', sans-serif
  margin: 0
  padding: 0
  box-sizing: border-box

  background: #1d1f20
  color: #d0d4d2

@keyframes movimiento
  0%
    background-position-x: left
  100%
    background-position-x: right

nav
  background-image: url("https://www.pngarts.com/files/10/Dust-Particles-Texture-PNG-Image.png")
  background-size: 1600px 
  background-repeat: no-repeat
  animation: movimiento infinite ease-in alternate-reverse
  width: 100%
  height: 8vh
  display: flex
  align-items: center
  justify-content: space-evenly
  border-bottom: 1px solid
  animation-duration: 3s
  img
    width: 100%
  a
    text-decoration: none
    border-top: 1px solid
    border-bottom: 1px solid
    font-size: 20px
    transition: .4s
    &:hover
      background: rgba(233, 80, 16, 0.5)
      border: none
</style>
