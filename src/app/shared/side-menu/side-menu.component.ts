import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
	faColumns,
	faRobot,
	faSlidersH,
	faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-side-menu',
	templateUrl: './side-menu.component.html',
	styleUrls: ['./side-menu.component.scss'],
	standalone: true,
	imports: [FontAwesomeModule, RouterLink],
})
export class SideMenuComponent implements OnInit {
	public faColumns = faColumns;
	public faUser = faUser;
	public faRobot = faRobot;
	public faSlidersH = faSlidersH;

	constructor() {}

	ngOnInit() {}
}
