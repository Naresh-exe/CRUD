import { Component, Inject, ɵLocaleDataIndex } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { User } from '../Store/app.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: User,private apiService: ApiService,private snackBar:MatSnackBar) { 
  }
 
  confirm(){
    this.apiService.deleteUser(this.data._id).subscribe(response=>{
        this.apiService.removeUser.next(response)
     })

    
    this.snackBar.open('Deleted SuccessFully','',{
      duration:3000
    })

    
    

  }
  

}
