<template>
<div class="il-container">
    <!--<il-header></il-header>-->
    <il-nav></il-nav>
    <main>
        <section class="il-section">
            <div class="il-container--wrapper">
                <div class="il-barra">
                    <h2 class="il-section--title il-text--center">{{ title }}</h2>
                </div>
            </div>
        </section>
        <!--Rotas-->
        <router-view></router-view>
    </main>
</div>
</template>

<script>
//import Header from './partials/headerComponent.vue';
import Nav from './partials/navComponent.vue';
export default {
    name: "App",
    components: {
        //ilHeader: Header,
        ilNav: Nav
    },
    data() {
        return {
            title: 'Sistema de Avaliação Física'
        }
    }
}
</script>
