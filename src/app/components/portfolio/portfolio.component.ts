import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  
  projetos = [
    {
      nome: 'Vasc Pizzaria',
      imagem: 'assets/projetos/delivery.png',
      especialidades: ['angular', 'typescript', 'sass'],
      link: 'https://delivery-red.vercel.app'
    },
    {
      nome: 'Pokedex Api Fetch',
      imagem: 'assets/projetos/pokedexApi.png',
      especialidades: ['html', 'css', 'javascript'],
      link: 'https://pokedex-fetch-api.netlify.app',
      github: 'https://github.com/vascsx/pokedexApiFetch'
    },
    {
      nome: 'Lista de tarefas',
      imagem: 'assets/projetos/lista-de-tarefas.png',
      especialidades: ['angular', 'typescript', 'sass'],
      link: 'https://list-de-tarefas.netlify.app',
      github: 'https://github.com/vascsx/lista-de-tarefas'
    }
  ];

  getIconeEspecialidade(especialidade: string): string {
    return `assets/icons-especialidades/${especialidade}.svg`;
  }
}
