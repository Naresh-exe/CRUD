import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './Store/app.model';
import {  Observable, Subject } from 'rxjs';
  

@Injectable({
  providedIn: 'root'
})
export class  ApiService {
  getUser=new Subject()
  updatedUser = new Subject();
  createdUser=new Subject();
  removeUser=new Subject();
  
  
 constructor(private http:HttpClient) { }
 getMessage(){
    return this.http.get(
        'http://localhost:3001/list');
}
addUser(data:User){
  return this.http.post('http://localhost:3001/addUsers',data)
}
updateUser(data:User){
  return this.http.put(`http://localhost:3001/updateUser`,data)
}
deleteUser(_id:Number){
  return this.http.delete(`http://localhost:3001/deleteUser/${_id}`)
}


}
