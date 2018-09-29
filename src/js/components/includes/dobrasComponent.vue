<template>
<div class="il-dobras">
    <h2 class="il-section--title il-color-texture--first">Dobras cutâneas</h2>

    <form action="#" name="form-avaliacao">
        <div class="il-simetria--content">
            <div class="il-simetria--items">
                <h4>Perimetria</h4>
                <div class="il-item">

                    <table class="responsive-table">
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Valor</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th scope="row">Tórax</th>
                                <td data-title="Budget">
                                    <input type="text" v-model="perimetria.torax" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Abdome</th>
                                <td data-title="Budget">
                                    <input type="text" v-model="perimetria.abdome" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Quadril</th>
                                <td data-title="Budget">
                                    <input type="text" v-model="perimetria.quadril" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Ant Dir</th>
                                <td data-title="Budget">
                                    <input type="text" v-model="perimetria.antebraco_dir" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Ant Esq</th>
                                <td data-title="Budget">
                                    <input type="text" v-model="perimetria.antebraco_esq" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Br Dir</th>
                                <td data-title="Budget">
                                    <input type="text" v-model="perimetria.braco_dir" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Br Esq</th>
                                <td data-title="Budget">
                                    <input type="text" v-model="perimetria.braco_esq" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Coxa Dir</th>
                                <td data-title="Budget">
                                    <input type="text" v-model="perimetria.coxa_dir" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Coxa Esq</th>
                                <td data-title="Budget">
                                    <input type="text" v-model="perimetria.coxa_esq" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Panturilha Dir</th>
                                <td data-title="Budget">
                                    <input type="text" v-model="perimetria.panturilha_dir" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Panturilha Esq</th>
                                <td data-title="Budget">
                                    <input type="text" v-model="perimetria.panturilha_esq" />
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            <div class="il-simetria--items">
                <h4>Dobras</h4>
                <div class="il-item">
                    <table class="responsive-table">
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Valor</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th scope="row">Subscapular</th>
                                <td data-title="Budget">
                                    <input type="text" v-model="dobras.subscapular" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Tricipital</th>
                                <td data-title="Budget">
                                    <input type="text" v-model="dobras.tricipital" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Axilar Média</th>
                                <td data-title="Budget">
                                    <input type="text" v-model="dobras.axilar_media" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Peitoral</th>
                                <td data-title="Budget">
                                    <input type="text" v-model="dobras.peitoral" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Supra Ilíaca</th>
                                <td data-title="Budget">
                                    <input type="text" v-model="dobras.supra_iliaca" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Abdominal</th>
                                <td data-title="Budget">
                                    <input type="text" v-model="dobras.abdominal" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Coxa</th>
                                <td data-title="Budget">
                                    <input type="text" v-model="dobras.coxa" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Punho</th>
                                <td data-title="Budget">
                                    <input type="text" v-model="dobras.punho" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Femur</th>
                                <td data-title="Budget">
                                    <input type="text" v-model="dobras.femur" />
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <a href="#" class="il-btn il-btn--submit" title="Calcular o resultado" @click.prevent="calcEvalation">Calcular</a>
        <a href="#" class="il-btn il-btn--reset" title="Nova avaliação" @click.prevent="reset">Novo</a>
    </form>
</div>
</template>

<script>
//import api from '../../commom/request.api';

export default {

    name: 'Dobras',

    mounted() {
        let sexo = this.$parent.params.sexo;
        this.profile.sexo = sexo;
        this.profile.idade = this.$parent.params.idade;
    },

    computed: {

    },

    data() {

        return {
            profile: {
                sexo: 'f',
                idade: null,
                somatorio: 0,
            },
            dobras: {
                subscapular: 26,
                tricipital: 30,
                axilar_media: 18,
                peitoral: 20,
                supra_iliaca: 20,
                abdominal: 31,
                coxa: 37,
                punho: 15,
                femur: 20
            },
            perimetria: {
                torax: 97,
                quadril: 108,
                abdome: 93,
                antebraco_dir: 24.5,
                antebraco_esq: 24,
                braco_dir: 28,
                braco_esq: 28.,
                coxa_dir: 61.5,
                coxa_esq: 62,
                panturilha_dir: 37,
                panturilha_esq: 36.5
            }
        }

    },

    methods: {
        calcEvalation() {
            this.$parent.dobras = this.dobras;
            this.$parent.perimetria = this.perimetria;
            this.$parent.calcEvaliation();
        },
        reset() {
            this.$parent.reset();
        }
    }
}
</script>
