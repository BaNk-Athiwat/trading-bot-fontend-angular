import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { KeyViewModel } from '../../models/key-view-model';
import { BitkubService } from '../../services/bitkub.service';

@Component({
	selector: 'app-api-key-form',
	templateUrl: './api-key-form.component.html',
	styleUrls: ['./api-key-form.component.scss'],
})
export class ApiKeyFormComponent implements OnInit {
	keyViewModel: KeyViewModel = new KeyViewModel();

	constructor(private bitkubService: BitkubService) {}

	ngOnInit() {}

	onSubmit(form: NgForm) {
		if (form.valid) {
			this.createConnection();
		}
	}

	createConnection() {
		console.log('createConnection');
	}
}
