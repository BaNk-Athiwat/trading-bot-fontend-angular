import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { KeyService } from '../../services/key.service';
import { ApiResponseModel } from '../../models/api-response-model';
import { KeyConfigModel } from '../../models/key-config-model';

@Component({
    selector: 'app-setting-api-key-form-update',
    templateUrl: './setting-api-key-form-update.component.html',
    styleUrls: ['./setting-api-key-form-update.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, RouterLink],
})
export class SettingApiKeyFormUpdateComponent implements OnInit {
    private router: Router = inject(Router);
    private route: ActivatedRoute = inject(ActivatedRoute);
    private keyService: KeyService = inject(KeyService);
    private formBuilder = inject(FormBuilder);

    exchangeUuid: string = '';
    isUpdate: boolean = false;

    configApiForm = this.formBuilder.group({
        apiKey: ['', [Validators.required]],
        secretKey: ['', [Validators.required]],
    });

    constructor() {
        this.exchangeUuid = this.route.snapshot.paramMap.get('id') || '';
    }

    ngOnInit() {
        this.checkKeyExist();
    }

    checkKeyExist() {
        this.keyService
            .checkKeyExist(this.exchangeUuid)
            .subscribe((res: ApiResponseModel) => {
                if (res.status === 200) {
                    this.isUpdate = res.data;
                    if (!this.isUpdate) {
                        this.router.navigate([
                            `/setting-api-key/${this.exchangeUuid}`,
                        ]);
                    }
                } else {
                    console.log('Key does not exist');
                }
            });
    }

    updateApiKey() {
        let apiKey = this.configApiForm.value.apiKey;
        let secretKey = this.configApiForm.value.secretKey;

        let keyConfigModel: KeyConfigModel = new KeyConfigModel(
            apiKey,
            secretKey,
            this.exchangeUuid
        );

        this.keyService
            .updateKey(keyConfigModel)
            .subscribe((res: ApiResponseModel) => {
                if (res.status === 200) {
                    console.log('Key updated successfully:', res);
                    this.router.navigate([`/setting-api-key`]);
                } else {
                    console.error('Error updating key:', res.message);
                }
            });
    }
}
