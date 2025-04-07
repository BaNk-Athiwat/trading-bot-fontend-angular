import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidemenuMainComponent } from '../../components/sidemenu-main/sidemenu-main.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports: [
        RouterOutlet,
        SidemenuMainComponent,
        HeaderComponent,
        FooterComponent,
    ],
    templateUrl: './layout-main.component.html',
    styleUrls: ['./layout-main.component.scss'],
})
export class MainLayoutComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
