import Deputado from "./Deputado";

export default class DeputadoEstadual extends Deputado {
    private comissoes: string[];

    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[],
        estado: string,
        comissoes: string[]
    ) {
        super(
            nome,
            partido,
            "Estadual",
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos,
            estado
        );

        if (comissoes.length < 1) {
            throw new Error(
                "O deputado estadual precisa participar de pelo menos uma comissão."
            );
        }

        this.comissoes = comissoes;
    }

    public getComissoes(): string[] {
        return this.comissoes;
    }

    public adicionarComissao(comissao: string): void {
    this.comissoes.push(comissao);
    }

    public exercerMandato(): void {
        console.log(
            `${this.getNome()} exerce o mandato de Deputado Estadual por 4 anos.`
        );
    }

    public votarPPA(): string {
        return `${this.getNome()} votou o PPA estadual.`;
    }

    public votarLOA(): string {
        return `${this.getNome()} votou a LOA estadual.`;
    }

    public votarLDO(): string {
        return `${this.getNome()} votou a LDO estadual.`;
    }

    public proporEmendaConstituicao(): string {
        return `${this.getNome()} propôs uma emenda à Constituição estadual.`;
    }

    public criarCPI(): string {
        return `${this.getNome()} criou uma CPI estadual.`;
    }

    public getAcoes(): string[] {
        return [
            this.votarPPA(),
            this.votarLOA(),
            this.votarLDO(),
            this.proporEmendaConstituicao(),
            this.criarCPI()
        ];
    }
}