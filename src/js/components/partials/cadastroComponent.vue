<template>
    <section class="il-section il-section--cadastro">
        <h4 class="il-section--title">Cadastro</h4>
        <form action="" class="il-cadastro">
            <div class="il-cadastro--content">
                <div class="il-form-fields">
                    <input type="text" v-model="user.first_name" placeholder="Nome" class="form-input" />
                </div>
                <div class="il-form--fields">
                    <input type="text" v-model="user.last_name" placeholder="Sobrenome" class="form-input" />
                </div>
                <div class="il-form--fields">
                    <label for="">Fem</label>
                    <input type="radio" v-model="client.sexo" value="f" selected class="form-input" />
                    <label for="">Masc</label>
                    <input type="radio" v-model="client.sexo" value="m" class="form-input" />
                </div>
                <div class="il-form--fields">
                    <select v-model="client.pf_pj">
                        <option selected value="Física/Jurídica">Pessoa Física ou Jurídica</option>
                        <option value="f">Física</option>
                        <option value="j">Jurídica</option>
                    </select>
                </div>
                <div class="il-form--fields" v-if="checkPessoa">
                    <input type="text" v-model="client.cpf" placeholder="CPF" class="il-form--input" v-if="hasCpf" />

                    <input type="text" v-model="client.cnpj" placeholder="CNPJ" class="il-form--input" v-if="hasCnpj" />
                </div>
                <div class="il-form--fields" v-if="checkPessoa">
                    <input type="text" v-model="client.rg" placeholder="RG" class="il-form--input" v-if="hasRG" />

                    <input type="text" v-model="client.ie" placeholder="IE" class="il-form--input" v-if="hasIE" />
                </div>
                <div class="il-form--fields">
                    <input type="text" v-model="client.data_nasc" placeholder="Dt de Nasc" class="il-form--input" />
                </div>
            </div>
        </form>
    </section>
</template>

<script>
    import ListData from '../../commom/dataList.js';
    export default {
        name: 'Cadastro',
        computed: {
            checkPessoa() {
                let p = this.client.pf_pj;
                if (p == 'f') {
                    this.hasCpf = true;
                    this.hasRG = true;
                    return true;
                }
                if (p == 'j') {
                    this.hasCnpj = true;
                    this.hasIE = true;
                    return true;
                }
                this.newsData();
                return false;
            },
        },
        data() {
            return {
                hasCpf: false,
                hasCnpj: false,
                hasRG: false,
                hasIE: false,
                user: {
                    id: 0,
                    first_name: '',
                    last_name: ''
                },
                client: {
                    id: 0,
                    user_id: 0,
                    pf_pj: '',
                    cpf: '',
                    cnpj: '',
                    rg: '',
                    ie: '',
                    sexo: 'f',
                    data_nasc: '',
                    endereco_default: '0'
                }
            }
        },
        methods: {
            newsData() {
                let users = ListData.users;
                let clients = ListData.clients;
                let lastUser = users.length;
                let lastClient = clients.length;
                this.user.id = lastUser;
                this.client.id = lastClient;
                this.client.user_id = lastUser;
            }

        },
    }
</script>