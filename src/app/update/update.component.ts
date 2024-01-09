import { Component,Inject,Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '../Store/app.model';
import { ApiService } from '../api.service';
import { MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  updateinfo=new FormGroup({
    id:new FormControl(''),
    name:new FormControl('',Validators.required),
       profession:new FormControl('',Validators.required),
       age:new FormControl('',Validators.required),
       phoneNumber:new FormControl('',Validators.required),
       gender:new FormControl('',Validators.required)
  }) 
  constructor(@Inject(MAT_DIALOG_DATA) public data: User,private apiService: ApiService,private snackBar:MatSnackBar) {
this.updateinfo.controls.id.setValue(data._id.toString());
this.updateinfo.controls.name.setValue(data.name);
this.updateinfo.controls.profession.setValue(data.profession);
this.updateinfo.controls.age.setValue(data.age.toString());
this.updateinfo.controls.phoneNumber.setValue(data.phoneNumber.toString());
this.updateinfo.controls.gender.setValue(data.gender);
   } 
 y:any
  Update(): void{
    this.y=this.updateinfo.value
    this.apiService.updateUser(this.y).subscribe(data=>{
      this.apiService.updatedUser.next(data);
      this.snackBar.open('Updated SuccessFully','',{
        duration:3000
      })
      })
    }
}
   



  
  

