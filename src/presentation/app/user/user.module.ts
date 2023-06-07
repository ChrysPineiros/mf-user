import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { LibDesignSystemModule } from '@mycne/lib-design-system';
import { DataModule } from 'src/data/data.module';

const routes: Routes = [{ path: '', component: UserComponent }];

@NgModule({
  declarations: [UserComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    DataModule,
    LibDesignSystemModule
  ]
})
export class UserModule { }
