<template>
  <button class="btn_primary" v-if="!loading">{{ name}}</button>
  <button class="btn_primary" v-else>
    <Loader />
  </button>
</template>

<script>
import Loader from '../Loader.vue'
export default {
    name: "buttonPrimary", 
    props: {
        name: String, 
        loading: Boolean
    },
    components: {
        Loader
    }
}
</script>

<style lang="scss" scoped>
@import "../../sass/_variables.scss";

.btn_primary {
    padding: 5px 20px;
    border-radius: 50px;
    color: white;
    background-color: $primary-color;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media(max-width: 768px) {
    .btn_primary {
        padding: 3px 15px;
        font-size: 14px;
    }
}
</style>