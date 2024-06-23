import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  onLogin() {
    const { username, password } = this.loginForm.value;
    if (username === 'SuApellido' && password === '12345') {
      sessionStorage.setItem('user', username);
      this.router.navigate(['/menu']);
    } else {
      alert('Usuario o contraseña incorrecta');
    }
  }
}
