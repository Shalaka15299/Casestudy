import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imagedemo';
  selectedFile:File | undefined;

  constructor(private http:HttpClient){}


url="D:/trainingnov21/casestudy/PIZZAHUNT1/src/assets/pic/1.jpg";

selectFile(event: any){
  // console.log(event);
  if(event.target.files){
    var reader=new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload=(event:any)=>{
      this.url=event.target.result;
    }
  }
  }



}
