import { Component, OnInit  } from '@angular/core';
import { SharedService } from '.././SharedService';
import { Router } from "@angular/router"
import {CommonModule, NgIf} from '@angular/common';
import { Modal02Component } from '../modal/modal.component';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, Modal02Component, NgIf],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
  providers: [Modal02Component]
})
export class ResultsComponent implements OnInit{
  data: any;
  public visible = false;
  constructor(private sharedService: SharedService, private router: Router, public modal: Modal02Component) {  
  }
    ngOnInit(): void {
      this.data = this.sharedService.getUserData();  
      console.log(this.data)
      if(!this.data[0]){
        if (typeof window !== 'undefined' && window.localStorage) {
          var dataString = localStorage.getItem('countryData')
        try {
          this.data = JSON.parse(dataString!);
        } catch (error) {
          this.router.navigate(['/'])
        }
        }     
      }   
      if(this.data.length == 1){
        this.toggleModal(this.data[0])
      }
    }
    toggleModal(x: any) {
      this.sharedService.setChosenData(x)
      this.modal.data = x;
      //this.modal.toggleLiveDemo();   
      this.visible=true;
    }
    routeHome(){
      this.router.navigate(['/'])
    }
}
