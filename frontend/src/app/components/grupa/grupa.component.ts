import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Grupa } from 'src/app/models/grupa';
import { Smer } from 'src/app/models/smer';
import { GrupaService } from 'src/app/services/grupa.service';
import { GrupaDialogComponent } from '../dialogs/grupa-dialog/grupa-dialog.component';

@Component({
  selector: 'app-grupa',
  templateUrl: './grupa.component.html',
  styleUrls: ['./grupa.component.css']
})
export class GrupaComponent implements OnInit, OnDestroy {

  displayedColumns = ['id', 'oznaka', 'smer','actions'];
  dataSource!: MatTableDataSource<Grupa>;
  subscription = new Subscription();
  selektovanaGrupa!: Grupa;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;

  constructor(private grupaService: GrupaService, 
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public loadData() {
    this.subscription = this.grupaService.getAllGrupe().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.filterPredicate = (data: any, filter: string) =>{
          const accumulator = (currentTerm: any, key: any) => {
            return key === 'smer' ? currentTerm + data.smer.naziv : currentTerm + data[key];
          }
          const dataStr = Object.keys(data).reduce(accumulator,'').toLowerCase();
          const transformedFilter = filter.trim().toLowerCase();
          return dataStr.indexOf(transformedFilter) !== -1;
        };
  
        this.dataSource.sortingDataAccessor = (data: any, property) => {
          switch(property) {
            case 'smer': return data.smer.naziv.toLowerCase();
  
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

  public openDialog(flag: number, id?: number, oznaka?:string, smer?:Smer) {
    const dialogRef = this.dialog.open(GrupaDialogComponent, 
      {data: {
        id,oznaka, smer
      }});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(res => {
      if(res === 1)
      {
        this.loadData();
      }
    })
  }
  selectRow(row: any){
    this.selektovanaGrupa=row;
  }
  applyFilter(target: EventTarget | null) {
    let filterValue = (target as HTMLInputElement).value.trim();
    filterValue = filterValue.toLocaleLowerCase();   
    this.dataSource!.filter = filterValue;

  }

}