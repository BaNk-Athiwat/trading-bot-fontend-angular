import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
    faColumns,
    faRobot,
    faSlidersH,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-sidemenu-main',
    standalone: true,
    templateUrl: './sidemenu-main.component.html',
    styleUrls: ['./sidemenu-main.component.scss'],
    imports: [FontAwesomeModule, RouterLink, RouterLinkActive],
})
export class SidemenuMainComponent implements OnInit {
    faColumns = faColumns;
    faRobot = faRobot;
    faSlidersH = faSlidersH;
    faUser = faUser;

    constructor() {}

    ngOnInit() {}
}
