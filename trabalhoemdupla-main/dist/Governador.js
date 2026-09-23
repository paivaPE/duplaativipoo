"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Politico_1 = __importDefault(require("./Politico"));
class Governador extends Politico_1.default {
    constructor(nome, partido, localTrabalho, enderecoTrabalho, remuneracao, projetos, quantidadeSecretarios, estado) {
        super(nome, partido, "Estadual", "Executivo", localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.quantidadeSecretarios = quantidadeSecretarios;
        this.estado = estado;
    }
    getQuantidadeSecretarios() {
        return this.quantidadeSecretarios;
    }
    setQuantidadeSecretarios(quantidadeSecretarios) {
        this.quantidadeSecretarios = quantidadeSecretarios;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    exercerMandato() {
        console.log(`${this.getNome()} exerce o mandato de Governador por 4 anos.`);
    }
    gerirPoliciaMilitar() {
        return `${this.getNome()} geriu a Polícia Militar.`;
    }
    administrarRodovias() {
        return `${this.getNome()} administrou as rodovias estaduais.`;
    }
    coordenarEducacaoSaude() {
        return `${this.getNome()} coordenou a educação e a saúde.`;
    }
    elaborarPPAEstadual() {
        return `${this.getNome()} elaborou o PPA estadual.`;
    }
    elaborarLDOEstadual() {
        return `${this.getNome()} elaborou a LDO estadual.`;
    }
    elaborarLOAEstadual() {
        return `${this.getNome()} elaborou a LOA estadual.`;
    }
    getAcoes() {
        return [
            this.gerirPoliciaMilitar(),
            this.administrarRodovias(),
            this.coordenarEducacaoSaude(),
            this.elaborarPPAEstadual(),
            this.elaborarLDOEstadual(),
            this.elaborarLOAEstadual()
        ];
    }
}
exports.default = Governador;
