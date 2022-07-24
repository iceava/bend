import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ThingsModel} from "../models/Things-model";
import {SERVER_URL} from "../../../assets/config/appSettingsConfig";
import {AreasModel} from "../models/Areas-model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(public http: HttpClient) { }



  getThings(): Observable<Array<ThingsModel>> {
    return  this.http.get<Array<ThingsModel>>(`${SERVER_URL}/things.json`)
  }
  getAreas(): Observable<Array<AreasModel>> {
    return  this.http.get<Array<AreasModel>>(`${SERVER_URL}/areas.json`)
  }
}
