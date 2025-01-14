import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceBoxComponent } from './balance-box/balance-box.component';
import { ProfitBoxComponent } from './profit-box/profit-box.component';
import { ConnectionBoxComponent } from './connection-box/connection-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	imports: [CommonModule, FontAwesomeModule],
	declarations: [
		BalanceBoxComponent,
		ProfitBoxComponent,
		ConnectionBoxComponent,
	],
	exports: [BalanceBoxComponent, ProfitBoxComponent, ConnectionBoxComponent],
})
export class ComponentsModule {}
