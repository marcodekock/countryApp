import { Injectable } from '@angular/core';

@Injectable()
export class SharedService{
    countryData : object | undefined;
    chosenData;
    constructor(){
      this.countryData= {};
      this.chosenData= {};
    }
    setUserData(val: object | undefined){
      this.countryData= val;
    }
    getUserData(){
      return this.countryData;
    }
    setChosenData(val: object){
      this.chosenData= val;
    }
    getChosenData(){
      return this.chosenData;
    }
}