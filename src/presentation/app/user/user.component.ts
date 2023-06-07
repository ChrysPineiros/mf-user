import { Component } from '@angular/core';
import { UserModel } from 'src/domain/models/user.model';
import { UserUseCase } from 'src/domain/usecases/user.usecase';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  datas:string[]=['1','2'];
  userList: UserModel[] = [];

  constructor(private userUseCase: UserUseCase) {
    this.userUseCase.execute({codeProcess:'1'}).subscribe( res => {
      this.userList.push(res);
    });
  }
}
