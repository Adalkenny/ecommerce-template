import React from "react";
import Cabecalho from './Cabecalho';
import Menu from './Menu';
import Slide from './Slide';
import Servico from './Servico';
import FrescoTopHot from './FrescoTopHot';
import Estatico from './Estatico';
import Especial from './Especial';
import Testemunho from './Testemunho';



function Page() {
    return (
        <div id="page">
            <Cabecalho />
            <Menu />
            <Slide />
            <Servico />
            <FrescoTopHot />
            <Estatico />
            <Especial />
            <Testemunho />
        </div>
    );
}

export default Page;