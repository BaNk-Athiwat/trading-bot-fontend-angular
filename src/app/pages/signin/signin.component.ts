import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { SigninRequestModel } from '../../models/signin-request-model';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule],
})
export class SigninComponent implements OnInit {
    private formBuilder = inject(FormBuilder);

    private authService: AuthService = inject(AuthService);
    private router: Router = inject(Router);

    signinForm = this.formBuilder.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
    });

    constructor() {}

    ngOnInit() {}

    signIn() {
        try {
            let signinRequestModel: SigninRequestModel = new SigninRequestModel(
                this.signinForm.value.username,
                this.signinForm.value.password
            );

            if (this.signinForm.invalid) {
                return;
            }
            this.authService.signin(signinRequestModel);
        } catch (error) {
            console.error('Error occurred during sign-in:', error);
            return;
        }
    }
}
