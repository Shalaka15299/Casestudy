import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ProductModel } from 'src/app/IProduct';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  formValue !: FormGroup;
  empObj : ProductModel = new ProductModel();
  employeeData !: any;
  showAdd!: boolean;
  showUpdate !: boolean;

  constructor(private formbuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      productName : ['',Validators.required],
      productSize : ['',Validators.required],
      productPrice : ['',Validators.required],
      productImage : ['',Validators.required]
    })
    this.getAllProduct();

  }


  postProductDetails(){
    this.empObj.productName = this.formValue.value.productName;
    this.empObj.productSize = this.formValue.value.productSize;
    this.empObj.productPrice = this.formValue.value.productPrice;
    this.empObj.productImage = this.formValue.value.productImage;


    // console.log(this.empObj);
    this.api.postProduct(this.empObj)
    .subscribe(res=>{
      console.log(res);
      alert("Product added successfully");
      let ref=document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllProduct();
    },
    error=>{
      alert("Something went wrong");
    }
    )
  }

  clickAddProduct(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }

  getAllProduct(){
     this.api.getProduct()
     .subscribe(res=>{
        this.employeeData=res.productDetails;
     })
  }

  deleteProduct(data : any){
    this.api.deleteProduct(data.id)
    .subscribe(res=>{
      alert("Employee deleted");
      // this.employeeData=res;
      this.getAllProduct();
    })
  }


  onEdit(row : any){
    this.showAdd=false;
    this.showUpdate=true;
    this.empObj.id=row.id;
    this.formValue.controls['productName'].setValue(row.productName);
    this.formValue.controls['productSize'].setValue(row.productSize);
    this.formValue.controls['productPrice'].setValue(row.productPrice);
    this.formValue.controls['productImage'].setValue(row.productImage);

  }

  updateProductDetails(){
    this.empObj.productName = this.formValue.value.productName;
    this.empObj.productSize = this.formValue.value.productSize;
    this.empObj.productPrice = this.formValue.value.productPrice;
    this.empObj.productImage = this.formValue.value.productImage;

    this.api.updateProduct(this.empObj)
    .subscribe(res=>{
      alert("updated successfully");
      let ref=document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllProduct();
    })
  }



}
