import { MatButtonModule, MatCheckboxModule, MatSnackBarModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [ MatButtonModule, MatCheckboxModule, MatInputModule, MatSnackBarModule, MatSidenavModule, MatToolbarModule],
    exports: [ MatButtonModule, MatCheckboxModule, MatInputModule, MatSnackBarModule, MatSidenavModule, MatToolbarModule]
})
export class MaterialModule { }