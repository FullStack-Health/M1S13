import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, ToolbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isNotLogin = false;

  constructor(private router: Router) {
    router.events.subscribe(evento => {
      if (evento instanceof NavigationEnd) {
        this.isNotLogin = evento.urlAfterRedirects !== '/login' && evento.urlAfterRedirects !== '/cadastro';
      }
    });
  }
}
