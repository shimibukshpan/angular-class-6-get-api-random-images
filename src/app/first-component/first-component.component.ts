import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  constructor(private http: HttpClient, private imageService :MyServiceService) { }
  
  imagesArray = this.imageService.imagesArray

  myUrl = "https://picsum.photos/v2/list";

  date = {
    date: new Date().toDateString(),
    seconds: new Date().getSeconds(),
    minutes:new Date().getMinutes(),
    hour:new Date().getHours()
  }
  
  loadImages(){
    return this
    .http
    .get(this.myUrl)
    .subscribe({
      next:(v:any) => {
       v.forEach((image:any) => {
        console.log(image);
        this.imageService.imagesArray.push(image)
       });
      },
      error:(e) => console.log(e),
      complete:()=>console.log("comlete")
    }),
    console.log(this.imageService.imagesArray)
  }


// postUrl = "https://dummyjson.com/products/add";
// loadImages(){
//  const myHeaders = new HttpHeaders({'Content-Type':'application/json'})

//   this.http
//   .post(this.postUrl,
//     JSON.stringify({
//       description:"shimi",
//       brand:"bukshpan"
//     }),
//     {headers: myHeaders}
//     )
//     .subscribe(data => console.log(data))   
// }

  ngOnInit(): void {
  }

}
