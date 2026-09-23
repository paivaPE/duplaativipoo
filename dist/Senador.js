"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Politico_1 = __importDefault(require("./Politico"));
class Senador extends Politico_1.default {
    constructor(nome, partido, localTrabalho, enderecoTrabalho, remuneracao, projetos, estado, anoEleicao) {
        super(nome, partido, "Federal", "Legislativo", localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.estado = estado;
        this.anoEleicao = anoEleicao;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    getAnoEleicao() {
        return this.anoEleicao;
    }
    setAnoEleicao(anoEleicao) {
        this.anoEleicao = anoEleicao;
    }
    exercerMandato() {
        console.log(`${this.getNome()} exerce o mandato de Senador por 8 anos.`);
    }
    aprovarAutoridadeAltoEscalao() {
        return `${this.getNome()} aprovou autoridades de alto escalão.`;
    }
    julgarCrimesResponsabilidade() {
        return `${this.getNome()} julgou crimes de responsabilidade.`;
    }
    representarInteressesEstado() {
        return `${this.getNome()} representou os interesses do estado.`;
    }
    getAcoes() {
        return [
            this.aprovarAutoridadeAltoEscalao(),
            this.julgarCrimesResponsabilidade(),
            this.representarInteressesEstado()
        ];
    }
}
exports.default = Senador;
