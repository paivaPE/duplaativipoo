import Politico from "./Politico";

export default class Governador extends Politico {
    private quantidadeSecretarios: number;
    private estado: string;

    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[],
        quantidadeSecretarios: number,
        estado: string
    ) {
        super(
            nome,
            partido,
            "Estadual",
            "Executivo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos
        );

        this.quantidadeSecretarios = quantidadeSecretarios;
        this.estado = estado;
    }

    public getQuantidadeSecretarios(): number {
        return this.quantidadeSecretarios;
    }

    public setQuantidadeSecretarios(
        quantidadeSecretarios: number
    ): void {
        this.quantidadeSecretarios = quantidadeSecretarios;
    }

    public getEstado(): string {
        return this.estado;
    }

    public setEstado(estado: string): void {
        this.estado = estado;
    }

    public exercerMandato(): void {
        console.log(
            `${this.getNome()} exerce o mandato de Governador por 4 anos.`
        );
    }

    public gerirPoliciaMilitar(): string {
        return `${this.getNome()} geriu a Polícia Militar.`;
    }

    public administrarRodovias(): string {
        return `${this.getNome()} administrou as rodovias estaduais.`;
    }

    public coordenarEducacaoSaude(): string {
        return `${this.getNome()} coordenou a educação e a saúde.`;
    }

    public elaborarPPAEstadual(): string {
        return `${this.getNome()} elaborou o PPA estadual.`;
    }

    public elaborarLDOEstadual(): string {
        return `${this.getNome()} elaborou a LDO estadual.`;
    }

    public elaborarLOAEstadual(): string {
        return `${this.getNome()} elaborou a LOA estadual.`;
    }

    public getAcoes(): string[] {
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