import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  erreur = signal<string | null>(null);
  chargement = signal(false);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor() {}

  connecter() {
    if (this.form.invalid) return;

    this.chargement.set(true);
    this.erreur.set(null);

    this.auth.login(this.form.value.email!, this.form.value.password!).subscribe({
      next: () => {
        this.chargement.set(false);
        this.router.navigate(['/admin/dashboard']);
      },
      error: () => {
        this.chargement.set(false);
        this.erreur.set('Email ou mot de passe incorrect.');
      },
    });
  }
}
