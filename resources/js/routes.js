import Accueil from './Components/Accueil.vue';
import ViewArticles from './Components/articles/ViewArticles.vue';
import ViewCategories from './Components/categories/ViewCategories.vue';
import AddArticle from './Components/articles/AddArticle.vue';
import EditArticle from './Components/articles/EditArticle.vue'
import ViewArticleTable from './Components/articles/ViewArticleTable.vue';
import AddArticleTable from './Components/articles/AddArticleTable.vue';

export const routes = [
{
name: 'accueil',
path: '/',
component: Accueil
},
{
    name: 'viewArticles',
    path: '/listArticles',
    component: ViewArticles
},
{
    name: 'viewArticlesTable',
    path: '/listArticlesTab',
    component: ViewArticleTable
},
{
    name: 'AddArticlesTable',
    path: '/AddArticlesTab',
    component: AddArticleTable
},
{
    name: 'addArticle',
    path: '/addArticles',
    component: AddArticle
},
{

    name:"editArticle",
    path:"/editArticle/:id",
    component:EditArticle
},
{
    name: 'viewCategories',
    path: '/listCategories',
    component: ViewCategories
}
];