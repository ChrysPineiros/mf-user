import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { UserModel } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';


export class UserUseCase implements UseCase<{ codeProcess: string; }, UserModel> {

    constructor(private userRepository: UserRepository) { }

    execute(
       params: { codeProcess: string },
    ): Observable<UserModel> {
        return this.userRepository.getUserList(params);
    }
}