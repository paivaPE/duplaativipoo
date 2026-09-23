export default abstract class Politico {
    private nome: string;
    private partido: string;
    private esfera: string;
    private poder: string;
    private localTrabalho: string;
    private enderecoTrabalho: string;
    private remuneracao: number;
    private projetos: string[];

    constructor(
        nome: string,
        partido: string,
        esfera: string,
        poder: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[]
    ) {
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.localTrabalho = localTrabalho;
        this.enderecoTrabalho = enderecoTrabalho;
        this.remuneracao = remuneracao;
        this.projetos = projetos;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getPartido(): string {
        return this.partido;
    }

    public setPartido(partido: string): void {
        this.partido = partido;
    }

    public getEsfera(): string {
        return this.esfera;
    }

    public setEsfera(esfera: string): void {
        this.esfera = esfera;
    }

    public getPoder(): string {
        return this.poder;
    }

    public setPoder(poder: string): void {
        this.poder = poder;
    }

    public getLocalTrabalho(): string {
        return this.localTrabalho;
    }

    public setLocalTrabalho(localTrabalho: string): void {
        this.localTrabalho = localTrabalho;
    }

    public getEnderecoTrabalho(): string {
        return this.enderecoTrabalho;
    }

    public setEnderecoTrabalho(enderecoTrabalho: string): void {
        this.enderecoTrabalho = enderecoTrabalho;
    }

    public getRemuneracao(): number {
        return this.remuneracao;
    }

    public setRemuneracao(remuneracao: number): void {
        this.remuneracao = remuneracao;
    }

    public getProjetos(): string[] {
        return this.projetos;
    }

    public adicionarProjeto(projeto: string): void {
        this.projetos.push(projeto);
    }

    public removerProjeto(projeto: string): void {
        this.projetos = this.projetos.filter(
            item => item !== projeto
        );
    }

    public exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Partido: ${this.partido}`);
        console.log(`Esfera: ${this.esfera}`);
        console.log(`Poder: ${this.poder}`);
        console.log(`Local de trabalho: ${this.localTrabalho}`);
        console.log(`Endereço: ${this.enderecoTrabalho}`);
        console.log(`Remuneração: ${this.remuneracao}`);
        console.log(`Projetos: ${this.projetos.join(", ")}`);
    }

    public abstract exercerMandato(): void;

    public abstract getAcoes(): string[];
}