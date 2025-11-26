import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewModuleComponent } from './new-module.component';
import { NewRoutingModule } from './new-routing.module';
import { UsernamePipe } from './username-pipe';

@NgModule({
  declarations: [NewModuleComponent, UsernamePipe],
  imports: [CommonModule, NewRoutingModule],
})
export class NewModuleModule {}
