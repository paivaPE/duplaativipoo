import Politico from "./Politico";

export default class Senador extends Politico {
    private estado: string;
    private anoEleicao: number;

    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[],
        estado: string,
        anoEleicao: number
    ) {
        super(
            nome,
            partido,
            "Federal",
            "Legislativo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos
        );

        this.estado = estado;
        this.anoEleicao = anoEleicao;
    }

    public getEstado(): string {
        return this.estado;
    }

    public setEstado(estado: string): void {
        this.estado = estado;
    }

    public getAnoEleicao(): number {
        return this.anoEleicao;
    }

    public setAnoEleicao(anoEleicao: number): void {
        this.anoEleicao = anoEleicao;
    }

    public exercerMandato(): void {
        console.log(
            `${this.getNome()} exerce o mandato de Senador por 8 anos.`
        );
    }

    public aprovarAutoridadeAltoEscalao(): string {
    return `${this.getNome()} aprovou autoridades de alto escalão.`;
    }

    public julgarCrimesResponsabilidade(): string {
        return `${this.getNome()} julgou crimes de responsabilidade.`;
    }

    public representarInteressesEstado(): string {
        return `${this.getNome()} representou os interesses do estado.`;
    }

    public getAcoes(): string[] {
        return [
            this.aprovarAutoridadeAltoEscalao(),
            this.julgarCrimesResponsabilidade(),
            this.representarInteressesEstado()
        ];
    }
}