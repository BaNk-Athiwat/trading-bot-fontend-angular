import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiKeyFormComponent } from '../../components/api-key-form/api-key-form.component';

@Component({
    selector: 'app-api-key-config',
    templateUrl: './api-key-config.component.html',
    styleUrls: ['./api-key-config.component.scss'],
    imports: [ApiKeyFormComponent],
})
export class ApiKeyConfigComponent implements OnInit {
    private route: ActivatedRoute = inject(ActivatedRoute);

    exchangeUuid: string = '';

    constructor() {
        this.exchangeUuid = this.route.snapshot.paramMap.get('id') || '';
    }

    ngOnInit() {
        console.log('ID from route:', this.exchangeUuid);
    }
}
