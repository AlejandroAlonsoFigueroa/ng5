import {Inject, Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({

    providedIn: "root"
})

export class MiServicio{
    constructor(private miHttp: HttpClient){}

    getJson(url: string){
        return this.miHttp.get(url);
    }
}