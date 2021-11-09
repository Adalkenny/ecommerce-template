import React from "react";


function Servico() {
    return (
        <div class="jtv-service-area">
            <div class="container">
                <div class="row">
                    <div class="col col-md-3 col-sm-6 col-xs-12">
                        <div class="block-wrapper ship">
                            <div class="text-des">
                                <div class="icon-wrapper"><i class="fa fa-truck"></i></div>
                                <div class="service-wrapper">
                                    <h3>Envio Nacional</h3>
                                    <p>Na compra superior a 10.000$00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-3 col-sm-6 col-xs-12 ">
                        <div class="block-wrapper return">
                            <div class="text-des">
                                <div class="icon-wrapper"><i class="fa fa-refresh"></i></div>
                                <div class="service-wrapper">
                                    <h3>Retorno em 30 dias</h3>
                                    <p>Garantia de devolução!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-3 col-sm-6 col-xs-12">
                        <div class="block-wrapper support">
                            <div class="text-des">
                                <div class="icon-wrapper"><i class="fa fa-umbrella"></i></div>
                                <div class="service-wrapper">
                                    <h3>Suporte 24/7</h3>
                                    <p>Contato: ( +238 ) 945-67-89</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-3 col-sm-6 col-xs-12">
                        <div class="block-wrapper user">
                            <div class="text-des">
                                <div class="icon-wrapper"><i class="fa fa-user"></i></div>
                                <div class="service-wrapper">
                                    <h3>Disconto dos menbros</h3>
                                    <p>25% na compra superior a $199</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Servico;