import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { UserImplementationRepository } from './repositories/user-implementation.repository';
import { UserUseCase } from 'src/domain/usecases/user.usecase';
import { HttpClientModule } from '@angular/common/http';

const userCaseFactory = 
(userRepo: UserRepository) => new UserUseCase(userRepo);
export const userUseCaseProvider = {
    provide: UserUseCase,
    useFactory: userCaseFactory,
    deps: [UserRepository],
};

@NgModule({
  declarations: [],
  providers: [
    userUseCaseProvider,
    { provide: UserRepository, useClass: UserImplementationRepository }
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class DataModule { }
