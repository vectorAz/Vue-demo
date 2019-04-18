<template>
 <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="SearchName"/>
        <button @click="Sumbit">Search</button>
      </div>
    </section>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
    data() {
        return {
            SearchName:''
        }
    },    

    methods:{
        Sumbit(){
            const Search=this.SearchName.trim()
            if(Search){
                console.log(Search);
             PubSub.publish('GETsearch',Search)
             this.SearchName=''
            }
    
        }
    }
};
</script>

<style>

</style>
