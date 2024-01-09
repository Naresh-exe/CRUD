import { Component, OnInit } from '@angular/core';
import { BoxComponent } from '../box/box.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  
})
export class SidenavComponent implements OnInit{
  
  constructor(private apiService:ApiService){}
  

  
  ngOnInit(){
    

    }
    
  }
  
  

  
  


  


