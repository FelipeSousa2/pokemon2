<template>
    <pokeVue :pokemons="pokemons"/>
    <div class="button">
      <Button label="Anterior" style="margin: 5px;" @click="previous(anterior)"/>
      <Button label="Proxima" style="margin: 5px;" @click="next(proximo)"/>
    </div>
</template>

<script>
import pokeVue from './components/poke.vue';

import {api} from './services/services'

export default {
  name: "App",
  components: {
    pokeVue
  },
  
  data() {
    return{
      pokemons:[],
      anterior: "",
      proximo: ""
    }
  },

  created() {
    api.get('pokemon')
    .then(data => {
      this.pokemons = data.data.results
      this.anterior = data.data.previous
      this.proximo = data.data.next
      console.log(this.anterior, this.proximo)
      })
    },
  methods: {
    async next(url){
      this.pokemons = []
      this.anterior = ""
      const result = await api.get(url)
      const data = result.data.results
      this.proximo = ""
      this.pokemons = data
      this.anterior = result.data.previous
      this.proximo = result.data.next
    },
    async previous(url){
      this.pokemons = []
      this.proximo = ""
      const result = await api.get(url)
      const data = result.data.results
      this.anterior = ""
      this.pokemons = data
      this.anterior = result.data.previous
      this.proximo = result.data.next
    }
  }

}



</script>

<style>
.button{
  display: flex;
  flex-direction: row;
  margin-left: 10px;
}


 
</style>