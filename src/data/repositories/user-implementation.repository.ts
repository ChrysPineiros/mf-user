import { Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { UserImplementationRepositoryMapper } from './user/mappers/user-repository.mapper';
import { UserModel } from 'src/domain/models/user.model';
import { UserEntity } from './user/entities/user-entity';



const listProcess: UserModel[] = [
    { id: '040169888', name: 'Christian', lastname: 'Pineiros', direction:'La Carolina', occupation:'Ing. Sistemas' },
    { id: '040169888', name: 'Christian', lastname: 'Pineiros', direction:'La Carolina', occupation:'Ing. Sistemas' },
    { id: '040169888', name: 'Christian', lastname: 'Pineiros', direction:'La Carolina', occupation:'Ing. Sistemas' },
    { id: '040169888', name: 'Christian', lastname: 'Pineiros', direction:'La Carolina', occupation:'Ing. Sistemas' },
    { id: '040169888', name: 'Christian', lastname: 'Pineiros', direction:'La Carolina', occupation:'Ing. Sistemas' },
    { id: '040169888', name: 'Christian', lastname: 'Pineiros', direction:'La Carolina', occupation:'Ing. Sistemas' },
];

@Injectable({
    providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
    processMapper = new UserImplementationRepositoryMapper();

    constructor(private http: HttpClient) {
        super();
    }

    getUserList(params: {codeProcess: string}): Observable<UserModel> {
        return this.http
            .get<UserEntity[]>('https://young-sands-07814.herokuapp.com/api/users')
            .pipe(mergeMap((item) => item))
            .pipe(map(this.processMapper.mapFrom));
        //return of(listProcess);
    }
}