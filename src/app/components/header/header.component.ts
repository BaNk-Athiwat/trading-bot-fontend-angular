import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    private authservice: AuthService = inject(AuthService);

    constructor() {}

    ngOnInit() {}

    signOut() {
        this.authservice.signout();
        console.log('Sign out');
    }
}
