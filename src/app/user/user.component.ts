import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { IUsers } from '../shared/user.modal';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// [routerLink]="['/product-detail/', products.id]"

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  // dataItems:IUsers[] = []
  data = [];
  isFetching = false; // Make this observable
  displayedColumns: string[] = ['id', 'name', 'username', 'address'];

  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUsersData();
  }
  getRecord(record: any) {
    this.router.navigate(['/users/', record]);
    // this.router.navigate(['/heroes', { id: heroId }]);

    //   [routerLink]="['/users/', row.id]"
    console.log(record);
  }
  getUsersData() {
    this.isFetching = true;
    this.userService.getUsers().subscribe((users: any) => {
      this.data = users;
      this.isFetching = false;
      this.openNotification();
    });
    console.log(this.isFetching);
  }

  openNotification() {
    this._snackBar.open('data fetched successfully', 'Ok', {
      duration: 2000,
      verticalPosition: 'top',
    });
  }
  // Modifying the data for address
  // aty = () =>
  //   this.data.map((x) => {
  //     delete x.address.geo;
  //     x.address = Object.values(x.address).join(', ');
  //     return x;
  //   });
}
