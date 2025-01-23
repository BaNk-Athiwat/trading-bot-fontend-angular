import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceBoxComponent } from './balance-box/balance-box.component';
import { ProfitBoxComponent } from './profit-box/profit-box.component';
import { ConnectionBoxComponent } from './connection-box/connection-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ApiKeyFormComponent } from './api-key-form/api-key-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		FontAwesomeModule,
		FormsModule,
		ReactiveFormsModule,
		RouterLink,
	],
	declarations: [
		BalanceBoxComponent,
		ProfitBoxComponent,
		ConnectionBoxComponent,
		ApiKeyFormComponent,
	],
	exports: [
		BalanceBoxComponent,
		ProfitBoxComponent,
		ConnectionBoxComponent,
		ApiKeyFormComponent,
	],
})
export class ComponentsModule {}
