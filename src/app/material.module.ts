import { NgModule } from '@angular/core';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule,MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from "@angular/material-moment-adapter";
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { 
    MatToolbarModule, 
    MatIconModule, 
    MatListModule, 
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
 } from '@angular/material';


@NgModule({
    imports: [
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatDatepickerModule,
        MatMomentDateModule,
        MatCheckboxModule,
        MatSidenavModule,    
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatSnackBarModule
    ],
    exports: [
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatDatepickerModule,
        MatMomentDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatSnackBarModule    
    ],
    providers:[
        {provide: MAT_DATE_LOCALE, useValue: 'es'},
        //{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        //{provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    ]
})
export class MaterialModule {}