import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataManagerService } from '../data-manager.service';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userID: any;

  userInfo: any;

  constructor(private route: ActivatedRoute, private dataManager: DataManagerService) {
    this.userID = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {

    this.dataManager.getDataByID(this.userID).subscribe((userDetail) => { this.userInfo = userDetail });
  }

}
