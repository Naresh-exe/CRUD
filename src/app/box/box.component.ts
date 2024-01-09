import { Component, Inject, OnInit } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ApiService } from '../api.service';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogClose } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../Store/app.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent  {
  
  
  constructor(private apiService:ApiService,private snackBar:MatSnackBar,private store:Store) { }
 
      index=new FormGroup({
        id:new FormControl(''),
       name:new FormControl('',[Validators.required,Validators.minLength(2)]),
       profession:new FormControl('',Validators.required),
       age:new FormControl('',[Validators.maxLength(2),Validators.pattern('[- +()0-9]+'),Validators.required]),
       phoneNumber:new FormControl('',[Validators.pattern('[- +()0-9]+'),Validators.required]) ,
       gender:new FormControl('',Validators.required)
    
      })    
 info:any
 Submit(){
  this.info=this.index.value;
  this.store.dispatch({
    type:'ADD_USER',
    payload:<User>{
      name:this.info.name,
      profession:this.info.profession,
      age:this.info.age,
      phoneNumber:this.info.phoneNumber,
      gender:this.info.gender
    }
  })
  this.apiService.addUser(this.info).subscribe(data=>{
    
    this.apiService.createdUser.next(data)
    
   this.snackBar.open('Created Successfully','',{
    duration:3000
  })
  
})

}

}
