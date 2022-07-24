import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ThingsModel} from "../models/Things-model";
import {Observable} from "rxjs";
import {AreasModel} from "../models/Areas-model";
import {SERVER_URL} from "../../../assets/config/appSettingsConfig";

@Injectable({
  providedIn: 'root'
})
export class ThingsAreasService {

  constructor(private http: HttpClient) { }
  getThings(): Observable<Array<ThingsModel>> {
    return  this.http.get<Array<ThingsModel>>(`${SERVER_URL}/things.json`)
  }
  getAreas(): Observable<Array<AreasModel>> {
   return  this.http.get<Array<AreasModel>>(`${SERVER_URL}/areas.json`)
  }

}
