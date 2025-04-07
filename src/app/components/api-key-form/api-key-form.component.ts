import { Component, inject, Input, input, OnInit } from '@angular/core';
import { KeyConfigModel } from '../../models/key-config-model';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExchangeService } from '../../services/exchange.service';

@Component({
    selector: 'app-api-key-form',
    templateUrl: './api-key-form.component.html',
    styleUrls: ['./api-key-form.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule],
})
export class ApiKeyFormComponent implements OnInit {
    private formBuilder = inject(FormBuilder);
    private exchangeService: ExchangeService = inject(ExchangeService);

    @Input() exchangeUuid: string = '';

    id: string | null = null;

    configApiForm = this.formBuilder.group({
        apiKey: ['', [Validators.required]],
        secretKey: ['', [Validators.required]],
    });

    constructor() {
        // this.route.paramMap.subscribe((params) => {
        //     this.id = params.get('id');
        //     console.log('ID from routesssss:', this.id);
        // });
    }

    ngOnInit() {}

    saveApiKey() {
        let apiKey = this.configApiForm.value.apiKey;
        let secretKey = this.configApiForm.value.secretKey;

        let keyConfigModel: KeyConfigModel = new KeyConfigModel(
            apiKey,
            secretKey,
            this.exchangeUuid
        );

        this.exchangeService.connectExchange(keyConfigModel);
    }
}
