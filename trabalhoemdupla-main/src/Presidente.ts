import Politico from "./Politico";

export default class Presidente extends Politico {
    private quantidadeMinistros: number;

    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[],
        quantidadeMinistros: number
    ) {
        super(
            nome,
            partido,
            "Federal",
            "Executivo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos
        );

        this.quantidadeMinistros = quantidadeMinistros;
    }

    public getQuantidadeMinistros(): number {
        return this.quantidadeMinistros;
    }

    public setQuantidadeMinistros(
        quantidadeMinistros: number
    ): void {
        this.quantidadeMinistros = quantidadeMinistros;
    }

    public exercerMandato(): void {
        console.log(
            `${this.getNome()} exerce o mandato de Presidente da República por 4 anos.`
        );
    }

    public nomearMinistro(): string {
        return `${this.getNome()} nomeou um ministro.`;
    }

    public exonerarMinistro(): string {
        return `${this.getNome()} exonerou um ministro.`;
    }

    public comandarForcasArmadas(): string {
        return `${this.getNome()} comandou as Forças Armadas.`;
    }

    public representarPais(): string {
        return `${this.getNome()} representou o país.`;
    }

    public elaborarPPA(): string {
        return `${this.getNome()} elaborou o PPA federal.`;
    }

    public elaborarLDO(): string {
        return `${this.getNome()} elaborou a LDO federal.`;
    }

    public elaborarLOA(): string {
        return `${this.getNome()} elaborou a LOA federal.`;
    }

    public getAcoes(): string[] {
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