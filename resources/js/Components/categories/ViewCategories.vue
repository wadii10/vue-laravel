<template>
    <div class="container">
        <table class="table table-striped shadow">
            <thead>
            <tr>
                <th scope="col">image</th>
                <th scope="col">Name Category</th>
                <th scope="col">Modifier</th>
                <th scope="col">Supprimer</th>
            </tr>
            </thead>
            <tbody>
             <tr v-for="cat in categories" :key="cat.id">
                <td><img :src="cat.imagecategory" width="70" height="80"/> </td>
                <td>{{ cat.nomcategory }}</td>
                <td><button class="btn btn-outline-primary mx-2">
                <i class="fa-solid fa-pen-to-square"></i>Edit</button></td>
                <td><button class="btn btn-outline-danger mx-2" @click="deletearticle(art.id)"><i class="fa-solid fa-trash-can"></i>Delete</button></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const categories = ref([]);

const getCategories = async() => {
    try {
        await axios.get("http://localhost:8000/api/categories").then(res => categories.value = res.data)
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    getCategories();
})
</script>