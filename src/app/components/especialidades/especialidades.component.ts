import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-especialidades',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './especialidades.component.html',
  styleUrl: './especialidades.component.scss'
})
export class EspecialidadesComponent {
  tecnologias = [
    {nome: 'C#', icone: 'assets/icons-especialidades/csharp.svg'},
    { nome: 'Java', icone: 'assets/icons-especialidades/java.svg' },
    {nome: 'AzureDevOps', icone: 'assets/icons-especialidades/azuredevops.svg'},
    { nome: 'Mysql', icone: 'assets/icons-especialidades/mysql.svg' },
    {nome: 'Postman', icone: 'assets/icons-especialidades/postman.svg'},
    { nome: 'Typescript', icone: 'assets/icons-especialidades/typescript.svg'},
    { nome: 'Angular', icone: 'assets/icons-especialidades/angular.svg'}
    
  ];
}
