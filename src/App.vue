<template>
  <nav class="animate__slideInDown">
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
nav
  width: 100%
  height: 8vh
  display: flex
  align-items: center
  justify-content: space-evenly
  border-bottom: 1px solid
  animation-duration: 1.7s
  a
    text-decoration: none
    border-top: 1px solid
    border-bottom: 1px solid
    font-size: 20px
    transition: .4s
    &:hover
      background: #e95010
      border: none
</style>
