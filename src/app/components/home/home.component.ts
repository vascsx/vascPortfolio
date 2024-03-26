import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { EspecialidadesComponent } from '../especialidades/especialidades.component';
import { SobreComponent } from '../sobre/sobre.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { MatIconModule } from '@angular/material/icon';
import { ScrollTopButtonComponent } from '../scroll-top-button/scroll-top-button.component';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
        HeaderComponent,
        EspecialidadesComponent,
        SobreComponent,
        PortfolioComponent,
        MatIconModule,
        ScrollTopButtonComponent
    ]
})
export class HomeComponent {

}
