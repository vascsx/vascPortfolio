import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { EspecialidadesComponent } from '../especialidades/especialidades.component';
import { SobreComponent } from '../sobre/sobre.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, EspecialidadesComponent,SobreComponent, PortfolioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
