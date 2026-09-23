"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Deputado_1 = __importDefault(require("./Deputado"));
class DeputadoEstadual extends Deputado_1.default {
    constructor(nome, partido, localTrabalho, enderecoTrabalho, remuneracao, projetos, estado, comissoes) {
        super(nome, partido, "Estadual", localTrabalho, enderecoTrabalho, remuneracao, projetos, estado);
        if (comissoes.length < 1) {
            throw new Error("O deputado estadual precisa participar de pelo menos uma comissão.");
        }
        this.comissoes = comissoes;
    }
    getComissoes() {
        return this.comissoes;
    }
    adicionarComissao(comissao) {
        this.comissoes.push(comissao);
    }
    exercerMandato() {
        console.log(`${this.getNome()} exerce o mandato de Deputado Estadual por 4 anos.`);
    }
    votarPPA() {
        return `${this.getNome()} votou o PPA estadual.`;
    }
    votarLOA() {
        return `${this.getNome()} votou a LOA estadual.`;
    }
    votarLDO() {
        return `${this.getNome()} votou a LDO estadual.`;
    }
    proporEmendaConstituicao() {
        return `${this.getNome()} propôs uma emenda à Constituição estadual.`;
    }
    criarCPI() {
        return `${this.getNome()} criou uma CPI estadual.`;
    }
    getAcoes() {
        return [
            this.votarPPA(),
            this.votarLOA(),
            this.votarLDO(),
            this.proporEmendaConstituicao(),
            this.criarCPI()
        ];
    }
}
exports.default = DeputadoEstadual;
