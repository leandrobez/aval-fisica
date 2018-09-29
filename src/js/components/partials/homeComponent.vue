<template>
<section class="il-section il-section--home">
    <div class="il-container--wrapper">
        <div class="il-content--home">
            <div class="il-home--item">
                <div class="col__collumn--title">
                    <i class="icon icon-key icon-title"></i>
                    <h4 class="box__col--title">Login</h4>
                </div>
                
            </div>
            <div class="il-home--item">
                <div class="col__collumn--title">
                    <i class="icon icon-key icon-title"></i>
                    <h4 class="box__col--title">Ou acesse com as contas de</h4>
                </div>
                <div class="box">
                    <div class="box__col">
                        <div class="box__col--collumn full">
                            <ul class="login__social--list flex no-styles">
                                <li class="half facebook"><i class="icon icon-facebook"></i><a href="#" title="acessar com facebook" id="btn-acessar-facebook" class="btn btn-facebook full">Facebook</a></li>
                                <li class="half google"><i class="icon icon-google"></i><a href="#" title="acessar com google+" id="btn-acessar-google" class="btn btn-google full">Google+</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            corStatus: 'gray',
            backStatus: 'green',
            email: '',
            password: '',
            alertViewSuccess: 0,
            msg: ''
        }
    },
    methods: {
        checkForm() {
            if (this.email === '' || this.password === '') {
                this.msg = "Prencha os campos corretamente";
                this.alertViewSuccess = 1;
                var self = this;
                setTimeout(function () {
                        self.alertViewSuccess = 0;
                        //self.$router.go('pagamentos.contas.index');
                    },
                    4000
                );
            }
        }
    }
}
</script>
