import * as C from './styles';

export const Box = () => {
    return (
        <C.Container>
            <C.BoxOneArea>
                <C.BoxOne>
                    <C.BoxTitle>Desenvolvedor Júnior, Neat Solutions, Recife-PE</C.BoxTitle>
                    <C.Yellow/>
                    <C.BoxText>Faço parte da equipe de Desenvolvimento e QA do Frontend de uma solução de checkout para um dos maiores players do setor de pagamento do Nordeste.</C.BoxText>
                </C.BoxOne>
                <C.BoxTwo>
                   <C.BoxTitle>Curso Rocketseat IGNITE - React.JS</C.BoxTitle>
                    <C.Yellow/>
                    <C.BoxText>Curso com cinco etapas vindo de seu fundamento a atualidade do React. contendo conteudos que ajudam na eficiência de produção, agilidade e qualidade de interface WEB.</C.BoxText>
                </C.BoxTwo>
            </C.BoxOneArea>

            <C.BoxTwoArea>
                <C.BoxOne>
                    <C.BoxTitle>Curso em video - JavaScript</C.BoxTitle>
                    <C.Yellow/>
                    <C.BoxText>Curso do Professor Gustavo Guanabara com duração de 40 Horas, onde contém muitos conteúdos, desafios tanto teóricos como práticos. Onde podemos praticar muito a lógica de programação  </C.BoxText>
                </C.BoxOne>
                <C.BoxTwo>
                    <C.BoxTitle>Curso em video - HTML5 e CSS3</C.BoxTitle>
                    <C.Yellow/>
                    <C.BoxText>Curso do Professor Gustavo Guanabara com duração de 40 Horas, falando sobre varios conteúdos de HTML e CSS. Com começo desde seus fundamentos até uma das suas versões mais atualizadas do cenário.</C.BoxText>
                </C.BoxTwo> 
            </C.BoxTwoArea>
        </C.Container>
    );
}