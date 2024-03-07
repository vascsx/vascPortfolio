import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { EspecialidadesComponent } from '../especialidades/especialidades.component';
import { SobreComponent } from '../sobre/sobre.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, EspecialidadesComponent,SobreComponent, PortfolioComponent, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


   // Controla a visibilidade do botão
   mostrarBotao: boolean = false;

   constructor() { }
 
   // Função para rolar a página de volta ao topo
   scrollToTop(): void {
     window.scrollTo({ top: 0, behavior: 'smooth' });
   }
 
   // Listener para detectar o scroll da página
   @HostListener('window:scroll', [])
   onWindowScroll(): void {
     // Verifica se o usuário rolou mais de 500 pixels para baixo
     if (window.pageYOffset > 500) {
       this.mostrarBotao = true;
     } else {
       this.mostrarBotao = false;
     }
   }
}
