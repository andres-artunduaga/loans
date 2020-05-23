import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from '@core/services/dialog.service';
import { CreateUserComponent } from 'app/public/dialogs/create-user/create-user.component';

@Component({
  selector: 'znb-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainListComponent implements OnInit {
  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
    console.log("MainListt");
  }

  addUser() {
    const dialogRef = this.dialogService.showCustomDialog(CreateUserComponent);
    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog Closed');
    });
  }
}
