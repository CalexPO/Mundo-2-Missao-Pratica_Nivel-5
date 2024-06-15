import { Editora } from '../modelo/Editora';



interface iEditora {
  nome: string;
  codEditora: number;
}

const editoras : iEditora[] = [
  { nome: 'Editora Nova', codEditora: 1 },
  { nome: 'Ateliê Editorial', codEditora: 2 },
  { nome: 'Editora Ariel', codEditora: 3 },
  { nome: 'Grupo A (editora)', codEditora: 4 },
];

export default class ControleEditora {
    
    empCode?: number;
    empNome?: string;

    constructor(code?: number, name?: string) {
        this.empNome = name;
        this.empCode = code;
    }
    
      
    public getEditoras(): iEditora[] {
        return editoras;
      }
      
 
      public getNomeEditora(cod: number): string | undefined {
        const itemEncontrado = editoras.filter(item => item.codEditora === cod);
        return itemEncontrado[0]?.nome;
      }
    
}
  
 