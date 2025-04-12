import { Component, inject, OnInit } from '@angular/core';
import { ExchangeService } from '../../services/exchange.service';
import { faCheck, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { ExchangeModel } from '../../models/exchange-model';
import { ApiResponseModel } from '../../models/api-response-model';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-setting-api-key-exchange',
    templateUrl: './setting-api-key-exchange.component.html',
    styleUrls: ['./setting-api-key-exchange.component.scss'],
    standalone: true,
    imports: [RouterLink, FontAwesomeModule],
})
export class SettingApiKeyExchangeComponent implements OnInit {
    private exchangeService: ExchangeService = inject(ExchangeService);

    public faPlusSquare = faPlusSquare;
    public faCheck = faCheck;

    exchangeModelList: ExchangeModel[] = [];

    constructor() {}

    ngOnInit() {
        this.getExchangeList();
    }

    getExchangeList() {
        this.exchangeService
            .getExchangeList()
            .subscribe((res: ApiResponseModel) => {
                if (res.status === 200) {
                    let data = res.data;
                    console.log('Exchange List:', data);

                    this.exchangeModelList = data.map((item: ExchangeModel) => {
                        return new ExchangeModel(
                            item.exchangeUuid,
                            item.name,
                            item.baseUrl,
                            item.enable,
                            item.key
                        );
                    });
                } else {
                    console.error('Error fetching exchanges:', res.message);
                }
            });
    }
}
