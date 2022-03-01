import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ordermodel } from 'src/app/IOrder';
import { AuthService } from 'src/app/service/auth.service';
import { CartserviceService } from 'src/app/service/cartservice.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  OdrerData!:Ordermodel[];
  public user!: User;
  public emailId:any;
  public myProfileUser:any;

  public name:any;
  public email:any;
  public contact:any;
  constructor(private http:HttpClient,private router:Router,private orderservice:CartserviceService,private authService: AuthService) { }

  ngOnInit(): void {


    this.emailId = localStorage.getItem('userid')

    this.authService.login(this.emailId).subscribe(
      (      data) => {
        this.myProfileUser = data
        console.log(data);
        this.name = this.myProfileUser["userName"]
        this.email = this.myProfileUser["userEmail"]
        this.contact = this.myProfileUser["Phone"]
      },
      (error) => {

        if (error instanceof HttpErrorResponse) {

            this.router.navigate(['/login'])

        }
        console.log(error);
      }
    )

  }


  placeorder()
  {
   const formData={
    userid:this.myProfileUser["id"],
    userName: this.myProfileUser["userName"],
    userAddress:'Panvel',
    paymentMode:'COD',
    grandTotal:700,
    orderStatus:'OrderPlaced',
   }
   this.orderservice.postOrder(formData)
   .subscribe((res)=>{
     console.log(formData);
   })

  }
}
