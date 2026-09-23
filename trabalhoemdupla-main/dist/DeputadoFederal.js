"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Deputado_1 = __importDefault(require("./Deputado"));
class DeputadoFederal extends Deputado_1.default {
    constructor(nome, partido, localTrabalho, enderecoTrabalho, remuneracao, projetos, estado, bancada) {
        super(nome, partido, "Federal", localTrabalho, enderecoTrabalho, remuneracao, projetos, estado);
        this.bancada = bancada;
    }
    getBancada() {
        return this.bancada;
    }
    setBancada(bancada) {
        this.bancada = bancada;
    }
    exercerMandato() {
        console.log(`${this.getNome()} exerce o mandato de Deputado Federal por 4 anos.`);
    }
    votarPEC() {
        return `${this.getNome()} votou uma PEC.`;
    }
    criarCPINacional() {
        return `${this.getNome()} criou uma CPI nacional.`;
    }
    votarPPANacional() {
        return `${this.getNome()} votou o PPA nacional.`;
    }
    votarLDONacional() {
        return `${this.getNome()} votou a LDO nacional.`;
    }
    votarLOANacional() {
        return `${this.getNome()} votou a LOA nacional.`;
    }
    proporLeiComplementar() {
        return `${this.getNome()} propôs uma lei complementar.`;
    }
    getAcoes() {
        return [
            this.votarPEC(),
            this.criarCPINacional(),
            this.votarPPANacional(),
            this.votarLDONacional(),
            this.votarLOANacional(),
            this.proporLeiComplementar()
        ];
    }
}
exports.default = DeputadoFederal;
