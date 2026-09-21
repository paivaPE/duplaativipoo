import DeputadoEstadual from "./DeputadoEstadual";
import DeputadoFederal from "./DeputadoFederal";
import Governador from "./Governador";
import Presidente from "./Presidente";
import Senador from "./Senador";

const presidente = new Presidente(
    "Luiz Inácio Lula da Silva",
    "Partido dos Trabalhadores",
    "Palácio do Planalto",
    "Brasília - DF",
    0,
    ["Projeto nacional 1"],
    10
);

const governadorPE = new Governador(
    "Raquel Lyra",
    "Partido Social Democrático",
    "Palácio do Campo das Princesas",
    "Recife - PE",
    0,
    ["Projeto estadual PE"],
    10,
    "Pernambuco"
);

const governadorSP = new Governador(
    "Tarcísio de Freitas",
    "Republicanos",
    "Palácio dos Bandeirantes",
    "São Paulo - SP",
    0,
    ["Projeto estadual SP"],
    15,
    "São Paulo"
);

const deputadoFederal1 = new DeputadoFederal(
    "André Ferreira",
    "Partido Liberal",
    "Câmara dos Deputados",
    "Brasília - DF",
    0,
    ["Projeto federal 1"],
    "Pernambuco",
    "Bancada Evangélica"
);

const deputadoFederal2 = new DeputadoFederal(
    "Guilherme Uchoa Jr.",
    "Partido Social Democrático",
    "Câmara dos Deputados",
    "Brasília - DF",
    0,
    ["Projeto federal 2"],
    "Pernambuco",
    "Bancada do Municipalismo"
);

const deputadoFederal3 = new DeputadoFederal(
    "Túlio Gadêlha",
    "Partido Social Democrático",
    "Câmara dos Deputados",
    "Brasília - DF",
    0,
    ["Projeto federal 3"],
    "Pernambuco",
    "Bancada Ambiental e Transição Energética"
);

const deputadoFederal4 = new DeputadoFederal(
    "Tabata Amaral",
    "Partido Socialista Brasileiro",
    "Câmara dos Deputados",
    "Brasília - DF",
    0,
    ["Projeto federal SP 1"],
    "São Paulo",
    "Bancada Feminina"
);

const deputadoFederal5 = new DeputadoFederal(
    "Kim Kataguiri",
    "Partido Missão",
    "Câmara dos Deputados",
    "Brasília - DF",
    0,
    ["Projeto federal SP 2"],
    "São Paulo",
    "Bancada de Segurança Pública"
);

const deputadoEstadual1 = new DeputadoEstadual(
    "Delegada Gleide Ângelo",
    "Partido Socialista Brasileiro",
    "Assembleia Legislativa de Pernambuco",
    "Recife - PE",
    0,
    ["Projeto estadual 1"],
    "Pernambuco",
    ["Comissão de Segurança Pública e Defesa Social"]
);

const deputadoEstadual2 = new DeputadoEstadual(
    "Pastor Cleiton Collins",
    "Partido Progressistas",
    "Assembleia Legislativa de Pernambuco",
    "Recife - PE",
    0,
    ["Projeto estadual 2"],
    "Pernambuco",
    ["Comissão de Prevenção e Combate às Drogas"]
);

const deputadoEstadual3 = new DeputadoEstadual(
    "Dani Portela",
    "Partido Socialismo e Liberdade",
    "Assembleia Legislativa de Pernambuco",
    "Recife - PE",
    0,
    ["Projeto estadual 3"],
    "Pernambuco",
    ["Comissão de Educação e Cultura"]
);

const deputadoEstadual4 = new DeputadoEstadual(
    "Tomé Abduch",
    "Republicanos",
    "Assembleia Legislativa de São Paulo",
    "São Paulo - SP",
    0,
    ["Projeto estadual SP 1"],
    "São Paulo",
    ["Comissão de Educação e Cultura"]
);

const deputadoEstadual5 = new DeputadoEstadual(
    "Carlos Gianazzi",
    "Partido Socialismo e Liberdade",
    "Assembleia Legislativa de São Paulo",
    "São Paulo - SP",
    0,
    ["Projeto estadual SP 2"],
    "São Paulo",
    ["Comissão de Fiscalização e Controle"]
);

const senador1 = new Senador(
    "Humberto Costa",
    "Partido dos Trabalhadores",
    "Senado Federal",
    "Brasília - DF",
    0,
    ["Projeto senador 1"],
    "Pernambuco",
    2022
);

const senador2 = new Senador(
    "Fernando Dueire",
    "Partido Social Democrático",
    "Senado Federal",
    "Brasília - DF",
    0,
    ["Projeto senador 2"],
    "Pernambuco",
    2022
);

const senador3 = new Senador(
    "Marcos Pontes",
    "Partido Liberal",
    "Senado Federal",
    "Brasília - DF",
    0,
    ["Projeto senador SP 1"],
    "São Paulo",
    2022
);

presidente.exibirInformacoes();
presidente.exercerMandato();
console.log(presidente.getAcoes());

governadorPE.exibirInformacoes();
governadorPE.exercerMandato();
console.log(governadorPE.getAcoes());

governadorSP.exibirInformacoes();
governadorSP.exercerMandato();
console.log(governadorSP.getAcoes());

deputadoFederal1.exibirInformacoes();
deputadoFederal1.exercerMandato();
console.log(deputadoFederal1.getAcoes());

deputadoFederal2.exibirInformacoes();
deputadoFederal2.exercerMandato();
console.log(deputadoFederal2.getAcoes());

deputadoFederal3.exibirInformacoes();
deputadoFederal3.exercerMandato();
console.log(deputadoFederal3.getAcoes());

deputadoFederal4.exibirInformacoes();
deputadoFederal4.exercerMandato();
console.log(deputadoFederal4.getAcoes());

deputadoFederal5.exibirInformacoes();
deputadoFederal5.exercerMandato();
console.log(deputadoFederal5.getAcoes());

deputadoEstadual1.exibirInformacoes();
deputadoEstadual1.exercerMandato();
console.log(deputadoEstadual1.getAcoes());

deputadoEstadual2.exibirInformacoes();
deputadoEstadual2.exercerMandato();
console.log(deputadoEstadual2.getAcoes());

deputadoEstadual3.exibirInformacoes();
deputadoEstadual3.exercerMandato();
console.log(deputadoEstadual3.getAcoes());

deputadoEstadual4.exibirInformacoes();
deputadoEstadual4.exercerMandato();
console.log(deputadoEstadual4.getAcoes());

deputadoEstadual5.exibirInformacoes();
deputadoEstadual5.exercerMandato();
console.log(deputadoEstadual5.getAcoes());

senador1.exibirInformacoes();
senador1.exercerMandato();
console.log(senador1.getAcoes());

senador2.exibirInformacoes();
senador2.exercerMandato();
console.log(senador2.getAcoes());

senador3.exibirInformacoes();
senador3.exercerMandato();
console.log(senador3.getAcoes());