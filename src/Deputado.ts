import Politico from "./Politico";

export default abstract class Deputado extends Politico {
    protected estado: string;

    constructor(
        nome: string,
        partido: string,
        esfera: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[],
        estado: string
    ) {
        super(
            nome,
            partido,
            esfera,
            "Legislativo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos
        );

        this.estado = estado;
    }

    public getEstado(): string {
        return this.estado;
    }

    public setEstado(estado: string): void {
        this.estado = estado;
    }
}