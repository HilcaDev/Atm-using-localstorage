import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DepositMoneyComponent } from './deposit-money/deposit-money.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { TranferMoneyComponent } from './tranfer-money/tranfer-money.component';
import { WithdrawalsComponent } from './withdrawals/withdrawals.component';
import { SharedModule } from '../shared/shared.module';
import { AuthProvider } from '../domain/providers/auth.provider';
import { localSProvider } from '../domain/providers/localS.provider';
import { AtmModule } from '../core/atm.module';

@NgModule({
  declarations: [
    HomeComponent,
    CreateAccountComponent,
    DepositMoneyComponent,
    MyAccountComponent,
    TranferMoneyComponent,
    WithdrawalsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    AtmModule
  ],
  providers: [AuthProvider, localSProvider]
})
export class PagesModule { }
