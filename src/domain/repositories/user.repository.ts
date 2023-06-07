import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';


export abstract class UserRepository {
    abstract getUserList(params: {codeProcess: string}): Observable<UserModel>;
}