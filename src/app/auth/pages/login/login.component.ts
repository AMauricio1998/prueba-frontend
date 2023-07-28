import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  miFormulario: FormGroup = this.fb.group({
    name: ['Default', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ){}

  login() {
    const { name } = this.miFormulario.value;

    this.authService.login(name)
      .subscribe( ok => {
        if (ok) {
          this.router.navigateByUrl('/dashboard');
        } else {
          // TODO: mensaje de error
        }
      })
  }

}
