import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/admin/service/adminservice.service';
import { IPizza } from 'src/app/pizza';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  public productList:any;
  constructor(private service:AdminserviceService,private router:Router) { }

  ngOnInit(): void {
    this.service.getProducts()
    .subscribe((res:any)=>{
      this.productList=res;
    })
  }

}
