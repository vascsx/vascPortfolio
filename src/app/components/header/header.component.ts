import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  toggleMenu(event: MouseEvent | TouchEvent): void {
    
    if (event.type === 'touchstart') {
      event.preventDefault();
    }
    const nav: HTMLElement | null = document.getElementById('nav');
    if (nav) {
      nav.classList.toggle('active');
      const active = nav.classList.contains('active');
      (event.currentTarget as HTMLElement).setAttribute('aria-expanded', active.toString());
      if (active) {
        (event.currentTarget as HTMLElement).setAttribute('aria-label', 'Fechar Menu');
      } else {
        (event.currentTarget as HTMLElement).setAttribute('aria-label', 'Abrir Menu');
      }
    }

  
}
}


  


