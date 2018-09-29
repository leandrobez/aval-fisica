<template>
<div>
    <h4 class="il-section--title il-title--result">Seu Resultado</h4>
    <p class="il-result--description">Peso: {{resultEval.peso}} kg<br>
    Estatura: {{resultEval.estatura}} m<br>
    Idade: {{resultEval.idade}} anos<br>
    Densidade corporal: {{resultEval.densidadeCorporal}}</p>
    <div class="il-graph--painel">
        <div class="il-graph--item">
            <div class="il-item--caption">
                <span></span>Massa Magra
            </div>
            <div class="il-graph" :style="startGraph(resultEval.massaMagra)"></div>
            <div class="il-graph--result">
                <span></span>{{resultEval.massaMagra}} kg
            </div>
        </div>
        <div class="il-graph--item">
            <div class="il-item--caption">
                <span>Peso de Gordura</span>
            </div>
            <div class="il-graph" :style="startGraph(resultEval.massaGorda)"></div>
            <div class="il-graph--result">
                <span>{{resultEval.massaGorda}} kg</span>
            </div>
        </div>
        <div class="il-graph--item">
            <div class="il-item--caption">
                <span>% de Gordura</span>
            </div>
            <div class="il-graph" :style="startGraph(resultEval.percentualGord)"></div>
            <div class="il-graph--result">
                <span>{{resultEval.percentualGord}} %</span>
            </div>
        </div>
        <div class="il-graph--item">
            <div class="il-item--caption">
                <span>Peso em Excesso</span>
            </div>
            <div class="il-graph" :style="startGraph(resultEval.pesoExcesso)"></div>
            <div class="il-graph--result">
                <span>{{resultEval.pesoExcesso}} kg</span>
            </div>
        </div>
        <div class="il-graph--item">
            <div class="il-item--caption">
                <span>Peso Ideal</span>
            </div>
            <div class="il-graph" :style="startGraph(resultEval.pesoIdeal)"></div>
            <div class="il-graph--result">
                <span>{{resultEval.pesoIdeal}} kg</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Result',
    data() {
        return {
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
    mounted() {

        this.resultEval = this.$parent.resultEval;

    },
    methods: {
        startGraph(item) {
            let vlMax = this.resultEval.peso;
            let perc = 100 * item / vlMax;
            return `height: ${perc}%;`;
        },
    }
}
</script>
