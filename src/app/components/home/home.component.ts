import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { EspecialidadesComponent } from '../especialidades/especialidades.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, EspecialidadesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
