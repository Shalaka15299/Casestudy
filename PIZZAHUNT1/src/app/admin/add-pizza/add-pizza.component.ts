import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../service/adminservice.service';
import { Router } from '@angular/router';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { NgForm,FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.css']
})
export class AddPizzaComponent implements OnInit {
  message:any=[];
  avail!: boolean;
  onepizza:any;
  image:any;
  productImage:any;
  imagePreview!: string;
  // event:any;
  constructor(private adminService:AdminserviceService,private httpClient:HttpClient,private router:Router) { }

  // addData=new FormGroup({
  //   productName:new FormControl(''),
  //   productSize:new FormControl(''),
  //   productPrice:new FormControl(),
  //   productImage:new FormControl('')
  // });

  ngOnInit(): void {
   // this.check();
  }

  // saveData(){
  //   this.adminService.saveProduct(this.addData.value)
  //   .subscribe((result)=>
  //   {
  //     console.log(result);
  //   });
  // }

  onSubmit(f:NgForm){

    // const image=this.imagePreview;
    // console.log(image);
    const formData = {
      productName:f.value.productName,
      productSize:f.value.productSize,
      productPrice:f.value.productPrice,
      productImage:f.value.productImage
    }
    this.httpClient.post<any>('http://localhost:3000/app/products/add/',formData)
    .subscribe((res)=>{
      console.log("formd"+formData);
      this.adminService.avail=true;
      this.adminService.message="Successfully added a pizza";
      console.log(this.adminService.message);

    })
  }

  selectImage(event:any){
    console.log("image selected");
      if(event.target.files.length>0){
        const file=event.target.files[0];
        this.productImage=file;   }
      }
  }


