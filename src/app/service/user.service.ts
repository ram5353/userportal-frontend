import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private host = environment.apiURL;

  constructor(private http: HttpClientModule) {

  }


}
