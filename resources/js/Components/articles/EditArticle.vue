<template>

    <div class="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
    <h4 align="center">Update Article</h4>

    <form @submit.prevent="editArticle">
      <div class="row">
        <div class="col-md-6">
          
          <label for="reference" class="form-label">Référence</label>

          <input
            type="text"
            class="form-control"
            id="reference"
            v-model="article.reference"
          />
        </div>
        <div class="col-md-6 ms-auto">
          <label for="designation" class="form-label">Désignation</label>

          <input
            type="texte"
            class="form-control"
            id="designation"
            v-model="article.designation"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          
          <label for="marque" class="form-label">Marque</label>

          <input
            type="text"
            class="form-control"
            id="marque"
            v-model="article.marque"
          />
        </div>

        <div class="col-md-6 ms-auto">
          <label for="Quantité" class="form-label">Qtock</label>

          <input
            type="texte"
            class="form-control"
            id="qtestock"
            v-model="article.qtestock"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          
          <label for="prix" class="form-label">Prix</label>

          <input
            type="text"
            class="form-control"
            id="prix"
            v-model="article.prix"
          />
        </div>
        <div class="col-md-6 ms-auto">
            <label for="scategorie" class="form-label">Sous Catégorie</label>
            <select class="form-control" v-model="article.scategorieID">
            <option v-for="sc in Scategories" :key="sc.id" :value=sc.id>{{sc.nomscategorie}}</option>
            </select>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          
          <label for="prix" class="form-label">Image</label>

          <input
            type="text"
            class="form-control"
            id="imageart"
            v-model="article.imageart"
          />
        </div>
      </div>
      <br />
      <button type="submit" class="btn btn-outline-primary">
        <i class="fa-solid fa-floppy-disk"></i>Enregister
      </button>
      <router-link to="/listart" class="btn btn-outline-danger mx-2">
        <i class="fa-solid fa-xmark"></i>Cancel
      </router-link>
    </form>
  </div>
    
</template>

<script setup>

import { ref,onMounted } from "vue"
import { useRouter,useRoute } from 'vue-router';

const router = useRouter() ;
const route = useRoute();
import axios from 'axios';
const Scategories = ref([]);
const article = ref({});

const fetchArticle = async() => {
await axios.get(`http://localhost:8000/api/articles/${route.params.id}`).then((res) => {
    article.value = res.data;
}).catch((err) => { console.error(err) })
}

const getscategories = async() => {

await axios.get('http://localhost:8000/api/scategories').then( res => {
Scategories.value = res.data;
}).catch(error => {
console.log(error)
});

}

const editArticle = () => {

axios.put(`http://localhost:8000/api/articles/${route.params.id}`,article.value).then(() => {
router.push('/listArticles')})
.catch(error => {
console.error("There was an error!", error);})

}

onMounted(() => {
getscategories();
fetchArticle();
})

</script>

<style scoped>


</style>