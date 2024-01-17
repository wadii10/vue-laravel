<template>

<AddArticleTable />

    <div>

        <div class="card">
<DataTable :value="articles" stripedRows paginator showGridlines

:rows="8" dataKey="id" :loading="isLoading">

<Column header="Image">
<template #body="{ data }" >
<img :src="data.imageart"
:alt=data.reference class="shadow-4" width="65"/>

</template>
</Column>
<Column field="reference" header="Référence" ></Column>



<Column field="designation" header="Désignation" sortable

></Column>

<Column field="marque" header="Marque" sortable ></Column>
<Column field="qtestock" header="Qté Stock" sortable

></Column>

<Column field="prix" header="Prix" sortable ></Column>
<Column field="id" header="Actions" style="min-width: 12rem">
<template #body="val">
<div class="d-flex">
<Editarticletable :art="val.data" />
<button type="button" class="btn btn-warning rounded-circle "

@click="deletearticle(val.data.id)">

<span style="color: rgb(245, 5, 5)">
<i class="fa-solid fa-trash"></i>

</span>

</button>
</div>
</template>
</Column>
</DataTable>
</div>

    </div>
</template>

<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import api from '../config/api.js'
import { ref,onMounted } from 'vue';
import AddArticleTable from './AddArticleTable.vue';

const articles = ref([]);
const isLoading = ref(true);
const visible = ref(true);

const getArticles = async() => {
    await api.get("/api/articles").then( res => {
        articles.value = res.data,
        isLoading.value = false
    })
}

onMounted(() => {
    getArticles();
    const cancel=()=>{
         visible.value=true;
    }
})

</script>

<style lang="scss" scoped>

</style>