import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewModuleModule } from '@app/new-module/new-module.module';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, HomeRoutingModule, NewModuleModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
