import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../service/adminservice.service';
import { IPizza } from 'src/app/pizza';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-pizza',
  templateUrl: './view-pizza.component.html',
  styleUrls: ['./view-pizza.component.css']
})
export class ViewPizzaComponent implements OnInit {
  // avail: boolean = false;

  public productList:any;
  constructor(private adminService:AdminserviceService, private router:Router) { }

  ngOnInit(): void {
      this.viewProduct();
  }

  viewProduct(){
    this.adminService.getProducts()
    .subscribe((res:any)=>{
      this.productList=res;
    })
  }

  deleteProduct(pizza:any){
    var pizzaid=pizza.id;
    this.adminService.deleteProduct(pizzaid)
    .subscribe(data=>{
      // console.log(data);
      this.adminService.avail=true;
      this.adminService.message=data.resp;
      if(data.message="Product is deleted successfully."){
        alert("Successfully deleted");
        window.location.reload();
      }

      // this.router.navigate(['/viewpizza']);
    })
  }

}



