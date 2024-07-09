import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from "@angular/router"
import { HttpClient } from '@angular/common/http';
import {API_URI} from '.././config/constants'
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '.././SharedService';

@Component({
  selector: 'HomeComponent',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  constructor(private httpClient: HttpClient, private toastr: ToastrService, private sharedService: SharedService, private router: Router){}
  myArr : object[] = [];

  getList(keyword: any){
    if(keyword.length > 0){
      this.toastr.info("Loading...")
      this.httpClient.get(API_URI + 'name/' + keyword, {observe: 'response'}).subscribe({
        next: (res) => {
            if(res.body){
              this.toastr.clear()
              localStorage.setItem('countryData', JSON.stringify(res.body));
              this.sharedService.setUserData(res.body)
              if(this.sharedService.getUserData() != null){
                this.router.navigate(['/countries'])
              }             
            }else{
              this.toastr.error('No Country Found');
            }
        },
        error: (err) => {
          this.toastr.clear()
          this.toastr.error(err.error.message)
        }
      });                          
    }else{
      this.toastr.error('Please enter a value');
    }    
  }

  getRandom(){
      this.toastr.info("Loading...")
      this.httpClient.get(API_URI + 'all', {observe: 'response'}).subscribe({
        next: (res: any) => {
            if(res.body){
              this.toastr.clear()
              var obj = res.body[(this.getRandomInt(res.body.length))]
              console.log(obj)
              this.myArr.push(obj)
              console.log(this.myArr)
              localStorage.setItem('countryData', JSON.stringify(this.myArr));
              this.sharedService.setUserData(this.myArr)
              if(this.sharedService.getUserData() != null){
                this.router.navigate(['/countries'])
              }             
            }else{
              this.toastr.error('No Country Found');
            }
        },
        error: (err) => {
          this.toastr.clear()
          this.toastr.error(err.error.message)
        }
      });                             
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}
