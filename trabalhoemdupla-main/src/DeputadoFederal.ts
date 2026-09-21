import Deputado from "./Deputado";

export default class DeputadoFederal extends Deputado {
    private bancada: string;

    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[],
        estado: string,
        bancada: string
    ) {
        super(
            nome,
            partido,
            "Federal",
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos,
            estado
        );

        this.bancada = bancada;
    }

    public getBancada(): string {
        return this.bancada;
    }

    public setBancada(bancada: string): void {
        this.bancada = bancada;
    }

    public exercerMandato(): void {
        console.log(
            `${this.getNome()} exerce o mandato de Deputado Federal por 4 anos.`
        );
    }

    public votarPEC(): string {
        return `${this.getNome()} votou uma PEC.`;
    }

    public criarCPINacional(): string {
        return `${this.getNome()} criou uma CPI nacional.`;
    }

    public votarPPANacional(): string {
        return `${this.getNome()} votou o PPA nacional.`;
    }

    public votarLDONacional(): string {
        return `${this.getNome()} votou a LDO nacional.`;
    }

    public votarLOANacional(): string {
        return `${this.getNome()} votou a LOA nacional.`;
    }

    public proporLeiComplementar(): string {
        return `${this.getNome()} propôs uma lei complementar.`;
    }

    public getAcoes(): string[] {
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