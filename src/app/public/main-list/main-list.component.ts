import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DialogService } from '@core/services/dialog.service';
import { CreateUserComponent } from 'app/public/dialogs/create-user/create-user.component';
import { ZNBTableFieldDefinition } from '@core/types/table.types';
import { User } from '@core/models/user.model';
import { UserService } from '@core/services/user.service';
import { Router } from '@angular/router';
import { USER_DETAIL } from '@core/constants/paths';

@Component({
  selector: 'znb-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainListComponent implements OnInit {

  fieldDefinitions:ZNBTableFieldDefinition<User>[] = [
    {
      field: 'index',
      title: '#',
      getData: _ => {},
      width: '30px',
      templateName: 'indexCell',
    },
    {
      field: 'name',
      title: 'Nombre',
      getData: user => user.name,
      width: '25%',
      templateName: 'regularCell',
    },
    {
      field: 'uid',
      title: 'Cédula',
      getData: user => user.uid,
      width: '20%',
      templateName: 'regularCell',
    },
    {
      field: 'email',
      title: 'Correo electrónico',
      getData: user => user.email,
      width: '25%',
      templateName: 'regularCell',
    },
    {
      field: 'status',
      title: 'Estado',
      getData: user => user.status === "approved" ? "Aprobado" : "Rechazado",
      width: '150px',
      templateName: 'chipCell',
    },
    {
      field: 'actions',
      title: 'Acciones',
      getData: _ => {},
      width: '200px',
      templateName: 'actionCell',
    },
  ]

  users:User[];

  constructor(
    private dialogService: DialogService,
    private userService: UserService,
    private ref: ChangeDetectorRef,
    private router:Router,
  ) {}

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(){
    this.userService.getUsers().subscribe(
      users => {
        this.users = users;
        this.ref.markForCheck();
      }
    )
  }

  addUser() {
    const dialogRef = this.dialogService.showCustomDialog(CreateUserComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.retrieveUsers();
    });
  }

  goToUserDetail(userData:User){
    this.router.navigate([USER_DETAIL,userData.id]);
  }
}
