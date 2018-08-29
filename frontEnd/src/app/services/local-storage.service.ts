import { Injectable, Inject } from "@angular/core";
import { MainProduct } from "../model/product.model";
import { StorageService, SESSION_STORAGE } from "ngx-webstorage-service";
import {Store} from '@ngrx/store'
import * as fromAppStore from '../appStore/appState.reducers';


@Injectable()

export class LocalStorageService{

  constructor(
    @Inject(SESSION_STORAGE) private storageService: StorageService,
  ){}

  saveStateLocally(userItems: MainProduct[]){
    if(userItems !== undefined || null || [] ){
      this.storageService.set("USER_STATE", userItems);
    }
  }

  getStateFromLocal(){
    const userItems = this.storageService.get("USER_STATE") || [];
    return userItems;
  }

}
