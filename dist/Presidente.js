"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Politico_1 = __importDefault(require("./Politico"));
class Presidente extends Politico_1.default {
    constructor(nome, partido, localTrabalho, enderecoTrabalho, remuneracao, projetos, quantidadeMinistros) {
        super(nome, partido, "Federal", "Executivo", localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.quantidadeMinistros = quantidadeMinistros;
    }
    getQuantidadeMinistros() {
        return this.quantidadeMinistros;
    }
    setQuantidadeMinistros(quantidadeMinistros) {
        this.quantidadeMinistros = quantidadeMinistros;
    }
    exercerMandato() {
        console.log(`${this.getNome()} exerce o mandato de Presidente da República por 4 anos.`);
    }
    nomearMinistro() {
        return `${this.getNome()} nomeou um ministro.`;
    }
    exonerarMinistro() {
        return `${this.getNome()} exonerou um ministro.`;
    }
    comandarForcasArmadas() {
        return `${this.getNome()} comandou as Forças Armadas.`;
    }
    representarPais() {
        return `${this.getNome()} representou o país.`;
    }
    elaborarPPA() {
        return `${this.getNome()} elaborou o PPA federal.`;
    }
    elaborarLDO() {
        return `${this.getNome()} elaborou a LDO federal.`;
    }
    elaborarLOA() {
        return `${this.getNome()} elaborou a LOA federal.`;
    }
    getAcoes() {
        return [
            this.nomearMinistro(),
            this.exonerarMinistro(),
            this.comandarForcasArmadas(),
            this.representarPais(),
            this.elaborarPPA(),
            this.elaborarLDO(),
            this.elaborarLOA()
        ];
    }
}
exports.default = Presidente;
