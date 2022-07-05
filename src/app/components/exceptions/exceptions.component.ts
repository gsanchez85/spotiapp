import { Component } from '@angular/core';

@Component({
  selector: 'app-exceptions',
  templateUrl: './exceptions.component.html'
})
export class ExceptionsComponent {

  error: boolean;
  public errorType: string;
  
  constructor() { 
    this.error = false;
    this.errorType = 'Error inesperado, vuelva a intentarlo más tarde';
  }

}
