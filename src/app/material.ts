import { MatButtonModule, MatCheckboxModule, MatSnackBarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [ MatButtonModule, MatCheckboxModule, MatInputModule, MatSnackBarModule],
    exports: [ MatButtonModule, MatCheckboxModule, MatInputModule, MatSnackBarModule]
})
export class MaterialModule { }