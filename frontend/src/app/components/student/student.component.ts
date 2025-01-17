import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Projekat } from 'src/app/models/projekat';
import { Grupa } from 'src/app/models/grupa';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { StudentDialogComponent } from '../dialogs/student-dialog/student-dialog.component';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnChanges, OnDestroy {

  displayedColumns = ['id', 'brojIndeksa', 'ime', 'prezime', 'grupa', 'projekat','actions'];
  dataSource!: MatTableDataSource<Student>;
  subscription!: Subscription;
  @Input() selektovanaGrupa!: Grupa;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;

  constructor(private studentService: StudentService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    //this.loadData();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnChanges(): void {
    if (this.selektovanaGrupa.id) {
      this.loadData();
    }
  }

  loadData() {
    this.subscription = this.studentService.getStudente(this.selektovanaGrupa.id).subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource!.filterPredicate = (data: any, filter: string) =>{
          const accumulator = (currentTerm: any, key: string) => {
            return key === 'projekat' ? currentTerm + data.projekat.naziv : currentTerm + data[key];
          }
          const dataStr = Object.keys(data).reduce(accumulator,'').toLowerCase();
          const transformedFilter = filter.trim().toLowerCase();
          return dataStr.indexOf(transformedFilter) !== -1;
        };

        this.dataSource.sortingDataAccessor = (data: any, property) => {
          switch(property) {
            case 'projekat': return data.projekat.naziv.toLowerCase();

            default: return data[property];
          }
        };
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    ),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
      }
  }
  public openDialog(flag: number, id?: number, brojIndeksa?: string, ime?: string, prezime?: string, grupa?: Grupa,
    projekat?: Projekat) {
      const dialogRef = this.dialog.open(StudentDialogComponent,
           {  data: {id, brojIndeksa, ime, prezime, grupa, projekat}});
      dialogRef.componentInstance.flag = flag;
      if(flag === 1) {
        dialogRef.componentInstance.data.grupa = this.selektovanaGrupa;
      }
      dialogRef.afterClosed().subscribe(result => {
        if(result === 1) {
          this.loadData();
        }
      })
  } 
  applyFilter(target: EventTarget | null) {
    let filterValue = (target as HTMLInputElement).value.trim();
    filterValue = filterValue.toLocaleLowerCase();   
    this.dataSource.filter = filterValue;
  }
}