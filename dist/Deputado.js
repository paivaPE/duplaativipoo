"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Politico_1 = __importDefault(require("./Politico"));
class Deputado extends Politico_1.default {
    constructor(nome, partido, esfera, localTrabalho, enderecoTrabalho, remuneracao, projetos, estado) {
        super(nome, partido, esfera, "Legislativo", localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.estado = estado;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
}
exports.default = Deputado;
