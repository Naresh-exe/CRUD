import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { UpdateComponent } from '../update/update.component';
import { MatDialog } from '@angular/material/dialog';
import { BoxComponent } from '../box/box.component';
import { MatSnackBar} from '@angular/material/snack-bar';
import { DeleteComponent } from '../delete/delete.component';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../Store/app.model';
import { AppState } from '../Store/table.stae';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  
  users: Array<User>=[];
  displayedColumns: string[] = ['name', 'work', 'age', 'phoneNumber', 'gender','trah'];
  dataSource: any;
  product: Observable<any>;

  constructor(private apiService: ApiService, public dial: MatDialog,private store:Store<AppState>) {
    console.log(this.store)
    
    this.product = this.store.select(state => state.user);
    this.product.subscribe(res => {
      console.log(res, '......')
      this.users = res
    })
  };
  openDialog() {
    this.dial.open(BoxComponent, {
      width: '40%',
    })

  }

  update(data: any) {
    this.dial.open(UpdateComponent, {
      width: '40%',
      data

    })
  }
  Delete(infoData:any){
    this.dial.open(DeleteComponent, {
      width: '20%',
      height:'20%',
      data: infoData

    })
     }
  ngOnInit() {

    this.apiService.getMessage().subscribe((data: any)=>{
      //this.message.admins=data;
      this.users = data;
      this.dataSource = new MatTableDataSource<any>(this.users);
    
    })
 
     this.apiService.createdUser.subscribe((info:any)=>{
      if (info){
        //this.users.push(info);
        this.users = [...this.users,info]
        this.dataSource = new MatTableDataSource<any>(this.users);
      }
     })

      this.apiService.updatedUser.subscribe((result: any) => {
       if(result){
        
       this.users.forEach(i=>{
        if(result._id===i._id){
        i._id=result._id
        i.age=result.age
        i.gender=result.gender
        i.name=result.name
        i.phoneNumber=result.phoneNumber
        i.profession=result.profession
        }
       })
       this.dataSource=new MatTableDataSource<any>(this.users)
       }
      

      })
      this.apiService.removeUser.subscribe((res:any)=>{
        let arr:any=[]
        let index=this.users.findIndex(i=>i._id===res._id)
        let rem=this.users.splice(index,1)
        arr=rem
        
        let filter=this.users.filter(data=>{
          return data!=arr
        })
        console.log(filter)
        
      this.dataSource=new MatTableDataSource<any>(this.users)
      })    
  }

  }
