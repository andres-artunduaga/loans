import { ComponentType } from '@angular/cdk/portal';
import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable()
export class DialogService {
  private dialogRefs: MatDialogRef<any>[] = [];

  constructor(private dialog: MatDialog) {}

  showCustomDialog<T>(
    componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
    options?: Record<string, any>,
    backdropClass?: string,
    width?: string,
  ): MatDialogRef<T> {
    const ref = this.dialog.open(componentOrTemplateRef, {
      data: options,
      disableClose: options?.disableClose ?? false,
      backdropClass,
      width,
    });
    this.dialogRefs.push(ref);
    return ref;
  }
}
