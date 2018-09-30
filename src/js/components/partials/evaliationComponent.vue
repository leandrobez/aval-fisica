<template>
<section class="il-section il-section--evaliation">
    <div class="il-container--wrapper">
        <h4 class="il-section--title">Avaliações - Parâmetros iniciais</h4>
        <form name="form-parametros-inicicias" id="form-parametros-iniciais" class="form form-parametros-iniciais">
            <div class="il-form--content">
                <div class="alert alert-warning" v-if="checkAlert">
                    <ul>
                        <li v-for="(erro,index) in errors.error" :key="index">{{erro.description}}</li>
                    </ul>
                </div>
                <div class="il-content--flex">
                    <div class="il-form--input">
                        <select class="form-control" :required="true" v-model="whoo">
                                <option v-for="(option,index) in users" :value="index" :selected="option == 'Escolha o aluno para prosseguir'">{{option.name}}
                                </option>
                            </select>
                    </div>
                    <div class="il-form--input">
                        <input type="text" v-model="params.peso" name="peso" placeholder="Peso" id="peso" class="form-input" />
                        </div>
                        <div class="il-form--input">
                            <input type="text" v-model="params.idade" name="idade" placeholder="Idade" id="idade" class="form-input" />
                        </div>
                            <div class="il-form--input">
                                <input type="text" v-model="params.estatura" name="estatura" placeholder="Estatura em metros"
                                id="estatura" class="form-input" />
                        </div>
                                <div class="il-form--input">
                                    <a href="#" title="Criar uma nova avaliação" class="il-btn il-btn--submit" @click.prevent="submit()">Prosseguir</a>
                                </div>
                            </div>
                        </div>
        </form>

        <div class="il-limites" v-if="checkLimites">
            <h4 class="il-section--title">Avaliações - Percentuais</h4>
            <div class="il-form--input">
                <span>Excelente</span>
                <div class="il-limites--faixas">
                    <span>Min: {{faixas.excelente.perc_min}}</span>
                    <span>Max: {{faixas.excelente.perc_max}}</span>
                </div>
            </div>
            <div class="il-form--input">
                <span>Bom</span>
                <div class="il-limites--faixas">
                    <span>Min: {{faixas.bom.perc_min}}</span>
                    <span>Max: {{faixas.bom.perc_max}}</span>
                </div>
            </div>
            <div class="il-form--input">
                <span>Média</span>
                <div class="il-limites--faixas">
                    <span>Min: {{faixas.media.perc_min}}</span>
                    <span>Max: {{faixas.media.perc_max}}</span>
                </div>
            </div>
            <div class="il-form--input">
                <span>Acima</span>
                <div class="il-limites--faixas">
                    <span>Min: {{faixas.acima.perc_min}}</span>
                    <span>Max: {{faixas.acima.perc_max}}</span>
                </div>
            </div>
            <div class="il-form--input">
                <span>Excessivo</span>
                <div class="il-limites--faixas">
                    <span>Min: {{faixas.excessivo.perc_min}}</span>
                    <span>Max: {{faixas.excessivo.perc_max}}</span>
                </div>
            </div>
            <div class="il-form--input range">
                <ul class="range-labels">
                    <li v-for="value in ranged" class="il-limit">{{value}}</li>
                </ul>
                <span class="active selected">{{params.perc}}</span>
                <input type="range" :min="faixas.excelente.perc_min" :max="faixas.excessivo.perc_max" :steps="steps"
                        v-model="params.perc">
                </div>
            </div>

            <il-dobras v-if="checkPerc"></il-dobras>

            <il-result v-if="checkResult"></il-result>

        </div>
</section>
</template>

<script>
import ListData from '../../commom/dataList.js';
import featuresParams from '../../commom/evaliationParams.js';
import pollack from '../../commom/pollackConst.js';
import dobras from '../includes/dobrasComponent.vue';
import result from '../includes/resultComponent.vue';

export default {
    name: 'Evaliation',
    components: {
        ilDobras: dobras,
        ilResult: result
    },
    data() {
        return {
            whoo: '',
            users: [],
            clients: [],
            students: [],
            instrutors: [],
            limites: false,
            ranged: [],
            faixas: {},
            protocolo: '',
            errors: {
                status: false,
                error: null
            },
            params: {
                sexo: 'f',
                peso: 72.7,
                idade: 22,
                estatura: 1.66,
                perc: 0,
                somaDobrasCutaneas: 0
            },
            steps: 1,
            fator: 0,
            dobras: {},
            perimetria: {},
            male: null,
            female: null,
            showResult: false,
            resultEval: {
                peso: '',
                estatura: '',
                idade: '',
                densidadeCorporal: '',
                massaMagra: '',
                percentualGord: '',
                massaGorda: '',
                pesoExcesso: '',
                pesoIdeal: ''
            }
        }
    },
    computed: {
        checkAlert() {
            if (this.errors.status) {
                return true
            }
            return false
        },
        checkLimites() {
            if (this.limites) {
                return true
            }
            return false
        },
        checkPerc() {
            if (this.params.perc) {
                return true
            }
            return false
        },
        checkResult() {
            if (this.showResult) {
                return true
            } else {
                return false
            }
        }
    },
    mounted() {
        let element = [];
        let users = ListData.users;
        let clients = ListData.clients;
        users.forEach((el, index) => {
            this.users.push(el);
            this.clients.push(clients[index]);
            this.students.push(clients[index]);
            this.instrutors.push(clients[index]);
            this.users[index].sexo = this.clients[index].sexo;
        });
    },
    methods: {
        getDensidadeCorporal() {
            let dobrasCutaneas = this.params.somaDobrasCutaneas;
            if (this.protocolo == 'seteDobras') {
                let parc1 = this.male.seteDobras.param1 - (this.male.seteDobras.param2 * dobrasCutaneas);
                let parc2 = this.male.seteDobras.param3 * dobrasCutaneas * dobrasCutaneas;
                let parc3 = this.male.seteDobras.param4 * this.params.idade;
                return parseFloat(parc1 + parc2 - parc3).toFixed(2);
            } else {
                let parc1 = this.male.tresDobras.param1 - (this.male.tresDobras.param2 * dobrasCutaneas);
                let parc2 = this.male.tresDobras.param3 * dobrasCutaneas * dobrasCutaneas;
                let parc3 = this.male.tresDobras.param4 * this.params.idade;
                return parseFloat(parc1 + parc2 - parc3).toFixed(2);
            }

        },
        getConstPollack() {
            let dens = this.getDensidadeCorporal();
            return parseFloat([(4.95 / dens) - 4.50] * 100).toFixed(2);
        },
        /*getDensidadeCorporal() {
            if (this.params.sexo == 'm') {
                let fator = this.male.dobras.param1 + this.male.dobras.param2 + this.male.dobras.param3;
                let parc4 = this.male.densidade_corporal.param1;
                let parc5 = this.male.densidade_corporal.param2 * fator;
                let parc6 = this.male.densidade_corporal.param3 * fator * fator;
                let parc7 = this.male.densidade_corporal.param4 * this.params.peso;
            } else {
                let fator = this.female.dobras.param1 + this.female.dobras.param2 + this.female.dobras.param3;
                let parc4 = this.female.densidade_corporal.param1;
                let parc5 = this.female.densidade_corporal.param2 * fator;
                let parc6 = this.female.densidade_corporal.param3 * fator * fator;
                let parc7 = this.female.densidade_corporal.param4 * this.params.peso;
            }

            return (parc4 - parc5 + parc6 - parc7);
        },*/
        getPesoGordura() {
            /**Constant Pollack */
            const pollock_constant = this.getConstPollack();
            return parseFloat((this.params.peso * pollock_constant) / 100).toFixed(2);
            //return ((pollack.percentual.percentualGorduraParam1 / pollock_constant) - (pollack.percentual.percentualGorduraParam2) * 100) * (this.params.peso / 100);
        },
        getMassaMagra() {
            /**Constant Pollack */
            const gordura = this.getPesoGordura();
            return parseFloat(this.params.peso - gordura).toFixed(2);
            //return ((pollack.percentual.percentualGorduraParam1 / pollock_constant) - (pollack.percentual.percentualGorduraParam2) * 100) * (this.params.peso / 100);
        },
        getPesoIdeal() {
            if (this.params.sexo == 'm') {
                return parseFloat(this.getMassaMagra() / .85).toFixed(2);
            } else {
                return parseFloat(this.getMassaMagra() / .75).toFixed(2);
            }
        },
        getPesoExcesso() {
            return parseFloat(this.params.peso - this.getPesoIdeal()).toFixed(2);
        },
        getPesoResidual() {
            if (this.params.sexo == 'm') {
                return parseFloat(pollack.male.residual * this.params.peso).toFixed(2);
            } else {
                return parseFloat(pollack.female.residual * this.params.peso).toFixed(2);
            }
        },
        getPercGordura() {
            return parseFloat((100 * this.getPesoGordura() / this.params.peso)).toFixed(2);
        },
        calcEvaliation() {
            let somaDobrasCutaneas = 0;
            this.protocolo = 'seteDobras';
            for (var prop in this.dobras) {
                if (this.protocolo == 'seteDobras') {
                    if (prop != 'femur' && prop != 'punho') {
                        somaDobrasCutaneas = somaDobrasCutaneas + this.dobras[prop];
                        this.params.somaDobrasCutaneas = somaDobrasCutaneas;
                    }
                } else {
                    if (prop == 'peitoral' || prop == 'abdominal' || prop == 'coxa') {
                        somaDobrasCutaneas = somaDobrasCutaneas + this.dobras[prop];
                        this.params.somaDobrasCutaneas = somaDobrasCutaneas;
                    }
                }
            }

            /**Densidade Corporal */
            let densidadeCorporal = this.getDensidadeCorporal();

            /**Peso residual */
            let pesoResidual = this.getPesoResidual();

            /** Peso Gordura */
            let pesoGordura = this.getPesoGordura();

            /** Massa Magra */
            let massaMagra = this.getMassaMagra();

            /**Peso ideal */
            let pesoIdeal = this.getPesoIdeal();

            /**Peso excesso */
            let pesoExcesso = this.getPesoExcesso();

            /**Perc Gordura */
            let percGordura = this.getPercGordura();

            this.resultEval = {
                peso: this.params.peso,
                estatura: this.params.estatura,
                idade: this.params.idade,
                densidadeCorporal: densidadeCorporal,
                massaMagra: massaMagra,
                percentualGord: percGordura,
                massaGorda: pesoGordura,
                pesoExcesso: pesoExcesso,
                pesoIdeal: pesoIdeal
            }
            for (var prop in this.resultEval) {
                if (prop == '') {
                    this.showResult = false;
                    break;
                }
            }
            this.showResult = true;

        },
        reset(){
            this.showResult = false;
            this.limites = false;
            this.params.perc = 0;
            this.resultEval = {
                peso: '',
                estatura: '',
                idade: '',
                densidadeCorporal: '',
                massaMagra: '',
                percentualGord: '',
                massaGorda: '',
                pesoExcesso: '',
                pesoIdeal: ''
            }
        },
        submit() {
            
            let message = [];
            this.params.sexo = this.clients[this.whoo].sexo;
            /*if (this.params.id == '') {
                message.push({
                    description: 'O campo Nome  é obrigatório'
                });
            }*/
            if (this.params.peso == '') {
                message.push({
                    description: 'O campo Peso é obrigatório'
                });
            }
            if (this.params.idade == '') {
                message.push({
                    description: 'O campo Idade é obrigatório'
                });
            }
            if (this.params.estatura == '') {
                message.push({
                    description: 'O campo Estatura é obrigatório'
                });
            }
            //console.log(message)
            if (message.length > 0) {
                this.errors.error = message;
                this.errors.status = true;
                setTimeout(() => {
                    this.errors.status = false;
                    this.errors.error = null
                }, 4000);
            } else {
                this.evaliationInit();
            }
        },
        generateFaixas(params) {
            let minLimit,
                maxLimit = null,
                excelente = null,
                bom = null,
                media = null,
                acima = null,
                excessivo = null;
            params.forEach((features, index) => {
                let min = features.faixa[0],
                    max = features.faixa[1];
                if (this.params.idade >= min && this.params.idade <= max) {
                    this.faixas.excelente = features.excelente;
                    this.faixas.bom = features.bom;
                    this.faixas.media = features.media;
                    this.faixas.acima = features.acima;
                    this.faixas.excessivo = features.excessivo;
                    minLimit = features.excelente.perc_min;
                    maxLimit = features.excessivo.perc_max;
                }
            });
            let steps = minLimit;
            for (let i = minLimit; i <= maxLimit; i++) {
                if (i === steps) {
                    this.ranged.push(i);
                    steps = steps + this.steps;
                }
            }
        },
        evalFemale() {
            let params = featuresParams.Female;
            this.generateFaixas(params);
            let female = pollack.female;
            this.female = female;
            this.limites = true;
        },
        evalMale() {
            let params = featuresParams.Male;
            this.generateFaixas(params);
            let male = pollack.male;
            this.male = male;
            this.limites = true;
        },

        evaliationInit() {
            let sexo = this.params.sexo;
            if (sexo == 'm') {
                this.evalMale();
            } else {
                this.evalFemale();
            }
        }
    }
}
</script>
