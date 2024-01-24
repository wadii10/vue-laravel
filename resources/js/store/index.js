import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import articleFeature from "./modules/articleFeature";

export default createStore({
    modules: { articleFeature },
    plugins: [createPersistedState()],
});
