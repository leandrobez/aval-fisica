<template>
<nav class="il-nav">
    <div class="il-container--wrapper">
        <div class="il-nav--wrapper">
            <div class="il-brand">
                <h1 class="il-color-texture--second">BoutiquePilates</h1>
            </div>
            <div class="il-nav--menu">
                <ul class="il-menu--list">
                    <li class="nav__menu--items slider__menu" v-for="(m, index) in menu" :key="index">
                        <router-link :to="m.routeName" class="nav__menu--link">
                            <i :class="m.icon_class"></i>
                            <span>{{m.name}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="il-nav--menu il-mobile"></div>
    </div>
</nav>
</template>

<script>
export default {
    name: 'Nav',
    data() {
        return {
            menu: [{
                    name: 'Início',
                    icon_class: 'mdi mdi-home mdi-24px',
                    routeName: 'home'
                },
                {
                    name: 'Avaliação',
                    icon_class: 'mdi mdi-pencil mdi-24px',
                    routeName: 'evaliation'
                },
                {
                    name: 'Cadastro',
                    icon_class: 'mdi mdi-account-box-outline mdi-24px',
                    routeName: 'cadastrar'
                },
                {
                    name: 'Login',
                    icon_class: 'mdi mdi-account-key mdi-24px',
                    routeName: 'login'
                }
            ]
        };
    },
}
</script>
