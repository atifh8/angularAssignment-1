import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
})
export class UserdetailsComponent implements OnInit {
  userId: number;
  constructor(private actRoute: ActivatedRoute) {
    this.userId = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {}
}
