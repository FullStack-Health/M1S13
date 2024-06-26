import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule], //Importação do Modulo de Template Driven
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login = {
    codigoUsuario: '',
    senha: ''
  };

  constructor(private router: Router) {}

  entrar() {
    if (this.login.codigoUsuario && this.login.senha) {
      this.router.navigate(['/home']);
    } else {
      window.alert('Por favor, preencha os campos para prosseguir');
    }
  }
}
