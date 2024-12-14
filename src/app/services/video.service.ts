import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideoModel } from '../model/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  apiUrl: string="https://projectapi.gerasim.in/api/PropertyBookingController/";

  constructor(private http:HttpClient) { }
  getVideo(){
    return this.http.get(this.apiUrl +"GetAllCustomer")
  }
  saveVideo(obj: VideoModel){
   return this.http.post(this.apiUrl +"AddCustomer",obj)
  }
  updateVideo(obj: VideoModel){
    return this.http.put(this.apiUrl +"UpdateCustomer",obj)
   }
   deletVideo(id: number){
    return this.http.delete(this.apiUrl +"DeleteCustomerById?id="+id)
   }
}
