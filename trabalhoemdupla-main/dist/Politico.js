"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Politico {
    constructor(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao, projetos) {
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.localTrabalho = localTrabalho;
        this.enderecoTrabalho = enderecoTrabalho;
        this.remuneracao = remuneracao;
        this.projetos = projetos;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getPartido() {
        return this.partido;
    }
    setPartido(partido) {
        this.partido = partido;
    }
    getEsfera() {
        return this.esfera;
    }
    setEsfera(esfera) {
        this.esfera = esfera;
    }
    getPoder() {
        return this.poder;
    }
    setPoder(poder) {
        this.poder = poder;
    }
    getLocalTrabalho() {
        return this.localTrabalho;
    }
    setLocalTrabalho(localTrabalho) {
        this.localTrabalho = localTrabalho;
    }
    getEnderecoTrabalho() {
        return this.enderecoTrabalho;
    }
    setEnderecoTrabalho(enderecoTrabalho) {
        this.enderecoTrabalho = enderecoTrabalho;
    }
    getRemuneracao() {
        return this.remuneracao;
    }
    setRemuneracao(remuneracao) {
        this.remuneracao = remuneracao;
    }
    getProjetos() {
        return this.projetos;
    }
    adicionarProjeto(projeto) {
        this.projetos.push(projeto);
    }
    removerProjeto(projeto) {
        this.projetos = this.projetos.filter(item => item !== projeto);
    }
    exibirInformacoes() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Partido: ${this.partido}`);
        console.log(`Esfera: ${this.esfera}`);
        console.log(`Poder: ${this.poder}`);
        console.log(`Local de trabalho: ${this.localTrabalho}`);
        console.log(`Endereço: ${this.enderecoTrabalho}`);
        console.log(`Remuneração: ${this.remuneracao}`);
        console.log(`Projetos: ${this.projetos.join(", ")}`);
    }
}
exports.default = Politico;
