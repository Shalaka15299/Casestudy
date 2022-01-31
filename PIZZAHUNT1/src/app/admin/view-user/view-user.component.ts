import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../service/adminservice.service';
import { IUser } from './IUser';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  // users:IUser[]=[
  //   {
  //     id:1,
  //     userName:'shalaka',
  //     userEmail:'sha@gmail.com'
  //   },
  //   {
  //     id:2,
  //     userName:'Aditya',
  //     userEmail:'adi@gmail.com'
  //   }
  // ];

  public userList:any;
  constructor(private adminservice:AdminserviceService) { }


  ngOnInit(): void {
    this.adminservice.getUsers()
    .subscribe((res:any)=>{
      this.userList=res;
    })
  }

  // getUsers(){
  //   this.adminservice.getUsers().subscribe(allUsers=>this.users=allUsers);
  // }


  // deleteUser(users: { id: any; }){
  //   var userid=users.id;
  //   console.log(userid);
  //   this.adminservice.deleteUser(userid).subscribe(data=>{
  //     console.log(data);
  //     //this.adminservice.msg="Successfully deleted user";
  //   })
  // }


}
