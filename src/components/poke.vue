<template>
    <header>
        <h1>Catálogo pokemons</h1>

    </header>
    <div class="container">
        <div class="bloco-1">

            <ul>

                <li v-for="item in pokemons" :key="item.name" @click="getUnique(item.url)" class="list2">
                    {{item.name}}
                </li>

            </ul>
        </div>



        <div class="bloco-2">

            <div class="img">
                {{pokemon}}
                <img :src="imagem" :alt="Unique.name">
            </div>
            <div>
                <label>{{"Id: " + Unique.id}}</label>
                <label>{{" - Nome: " + Unique.name}}</label>


            </div>
            <div id="list">
                <div class="list-esq">
                    <ul>
                        <li v-for="item in type" :key="item.name">
                            {{item.name}}
                        </li>
                    </ul>
                </div>
                <div class="list-dir">
                    <ul>
                        <li v-for="item in stats" :key="item.stat.name">
                            {{item.stat.name + ":"}}
                            {{item.base_stat}}
                        </li>
                    </ul>
                </div>
            </div>


        </div>



    </div>

</template>

<script>
import { onMounted } from '@vue/runtime-core'
    import {api} from '../services/services'

    export default {
        name: "poke",
        props: {
            pokemons:[]
        },

        data() {
            return{
                Unique: [],
                imagem: "",
                type: [],
                stats: [],
        }
    },
    async created(){
        await this.getUnique(this.pokemons[0].url)
    },

      methods: {
        async getUnique(url) {
            const result = await api.get(url)
            const data = result.data
            this.Unique = data
            this.type = []
            this.stats = []
            data.types.forEach((e) => {
                this.type.push(e.type)
            })
            data.stats.forEach((e) => {
                this.stats.push(e)
            })
            this.imagem = data.sprites.other["official-artwork"].front_default
        }
      }  
}



</script>



<style>


    @import url('https://fonts.googleapis.com/css2? family=Rubik+Iso & display=swap');

    template {
        font-family: Arial, Helvetica, sans-serif;
    }

    header > h1 {
        font-family: 'Rubik Iso', cursiva;
        margin: auto;
        margin-bottom: 5pt;
    }

   
    .container {
        
        font-family: Arial, Helvetica, sans-serif;
        border-radius: 10px 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        row-gap: 10px;
        column-gap: 30px;
        background-image: url("../imagem/tela-fundo.png");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        color: black;
        padding: 16px;
        height: 550px;
        width: 700px;
        
    }

    

    .bloco-1 {
        font-family: 'Rubik Iso', cursiva;
        background-color: rgba(39, 39, 41, 0.486);
        font-size: 1.2em;
        color: white;
        border-radius: 5px 5px;
        order: 0;
        flex: 0 1 auto;
        
    }

    

    .bloco-2 {
        
        color: white;
        background-color: rgba(39, 39, 41, 0.486);
        border-radius: 10px 10px;
        flex-basis: auto;
        height: 500px;
        width: 400px;
        order: 0;
        flex: 0 1 auto;
    }

    .img {
        display: flex;
        border-radius: 5px 5px;
        border: 1px solid white;
        margin: auto;
        
        margin-top: 40px;
        height: 45%;
    }

    img {
        height: 90%;
        margin: auto;
        align-items: center;
        width: 70%;
        justify-content: center;
    }

    .container ul {
        list-style-type: none;
        margin: 0;
        padding: 10px;
        text-align: left;
    }

    .list2 {
        cursor: pointer;

    }
    .list2:hover {
        background-color: white;
        color: black
    }

    #list {
        font-size: 1.2em;
        font-family: 'Rubik Iso', cursiva;
        font: bold;
        opacity: 80%;
        width: 100%;
        background-color: white;
        display: flex;
        color: black;
        border: 1px solid black ;
    }

    .list-esq {
        width: 50%;
        border-right: 1px solid black;
    }

        
    

</style>