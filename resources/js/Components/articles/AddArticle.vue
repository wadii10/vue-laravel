<template>
  <div class="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
    <h4 align="center">Ajout Article</h4>

    <form @submit.prevent="addArticle">
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
          <label for="categorie" class="form-label">SCatégorie</label>

          <select class="form-control" v-model="article.scategorieID">
            <option v-for="sc in scategories" :key="sc.id" :value="sc.id">
              {{ sc.nomscategorie }}
            </option>
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
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const article = ref({
  reference: "",
  designation: "",
  marque: "",
  qtestock: 0,
  prix: 0,
  imageart: "",
  scategorieID: "",
});
const scategories = ref([]);
const router = useRouter();

const getScateg = async () => {
  try {
    await axios.get("http://localhost:8000/api/scategories").then((res) => {
      scategories.value = res.data;
    });
  } catch (error) {}
};

const addArticle = async () => {
  try {
    await axios
      .post("http://localhost:8000/api/articles", article.value)
      .then((res) => {
        router.push("/listArticles");
      });
  } catch (error) {}
};

onMounted(() => {
  getScateg();
});
</script>
