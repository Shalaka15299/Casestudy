import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminserviceService } from '../service/adminservice.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  userId:string='';
  constructor(private adminservice:AdminserviceService,private activatedroute:ActivatedRoute) { }


  ngOnInit(): void {
    this.activatedroute.params.subscribe(data=>{
      this.userId=data['id'];
    })
  }


  // viewUser(){
  //   this.adminservice.viewUser(this.userId).subscribe(data=>{
  //     console.log(data);
  //   })
  // }

}
