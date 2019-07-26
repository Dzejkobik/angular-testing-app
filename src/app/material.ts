import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [ MatButtonModule, MatCheckboxModule, MatInputModule],
    exports: [ MatButtonModule, MatCheckboxModule, MatInputModule]
})
export class MaterialModule { }