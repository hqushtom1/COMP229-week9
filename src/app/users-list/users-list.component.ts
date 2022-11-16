import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: any;

  constructor(private dataManager: DataManagerService) {
    this.dataManager.getData().subscribe((usersInfo) => { this.users = usersInfo });
  }

  ngOnInit(): void {
  }

}
