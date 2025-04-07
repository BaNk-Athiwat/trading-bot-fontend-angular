import { Component, inject, OnInit } from '@angular/core';
import { ApiResponseModel } from '../../models/api-response-model';
import { ExchangeModel } from '../../models/exchange-model';
import { Router, RouterLink } from '@angular/router';
import { ExchangeService } from '../../services/exchange.service';

@Component({
    selector: 'app-exchange-config-selector',
    templateUrl: './exchange-config-selector.component.html',
    styleUrls: ['./exchange-config-selector.component.scss'],
    standalone: true,
    imports: [RouterLink],
})
export class ExchangeConfigSelectorComponent implements OnInit {
    private router: Router = inject(Router);
    private exchangeService: ExchangeService = inject(ExchangeService);

    exchangeModelList: ExchangeModel[] = [];

    constructor() {}

    ngOnInit() {
        this.getExchangeList();
    }

    isMainRoute(): boolean {
        return this.router.url === '/key-config';
    }

    getExchangeList() {
        this.exchangeService
            .getExchangeList()
            .subscribe((res: ApiResponseModel) => {
                if (res.status === 200) {
                    let data = res.data;

                    data.map((item: ExchangeModel) => {
                        this.exchangeModelList.push(item);
                    });
                } else {
                    console.error('Error fetching exchanges:', res.message);
                }
            });
    }
}
