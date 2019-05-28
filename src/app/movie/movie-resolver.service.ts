import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { SharedService } from 'src/app/shared/shared.service';

@Injectable()
export class MovieResolverService implements Resolve<any> {

    constructor(private _sharedService: SharedService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('RESOLVER : ' + JSON.stringify(this._sharedService.findMovieById(+route.paramMap.get('id'))));
        return this._sharedService.findMovieById(+route.paramMap.get('id'));
    }
}
