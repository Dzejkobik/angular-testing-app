import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ErrorDisplayerService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string = "Dismiss") {
    this._snackBar.open(message,action,{
      duration: 2000,
    });
  }
}
