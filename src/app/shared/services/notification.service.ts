import { Injectable, NgZone } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    public snackBar: NzNotificationService,
    private notfication: NzMessageService,
    public zone: NgZone
  ) {
  }

  default(message: string) {
    this.show(message, 'DEFAULT', {
      nzDuration: 2000,
      nzAnimate: true,
      nzPlacement: 'topRight'
    });
  }

  close(id: any = null) {
    if (!id) {
      this.notfication.remove();
      return;
    }
    this.notfication.remove(id);
  }

  loading(message: string) {
    return this.show(message, 'LOADING', {
      nzDuration: 0,
      nzAnimate: true,
      nzPlacement: 'topRight'
    });
  }

  success(message: string, title?: string) {
    this.show(message, 'SUCCESS', {
      nzDuration: 2000,
      nzAnimate: true,
      nzPlacement: 'topRight'
    }, title);
  }

  warn(message: string, duration?: number) {
    if (!duration) { duration = 2500; }
    this.show(message, 'WARNING', {
      nzDuration: duration,
      nzAnimate: true,
      nzPlacement: 'topRight'
    });
  }

  error(message: string) {
    this.show(message, 'ERROR', {
      nzDuration: 4500,
      nzAnimate: true,
      nzPlacement: 'topRight'
    });
  }

  openLogs(title: string, description: string) {
    this.snackBar.create(
      "warning",
      title,
      description,
    );
  };

  private show(message: string, type: string, configuration: any, title?: string) {
    const finalConfig: any = { ...configuration, nzPauseOnHover: true };
    this.zone.run(() => {
      switch (type) {
        case 'ERROR': {
          return this.snackBar.error('Error', message, finalConfig);
        }
        case 'SUCCESS': {
          return this.snackBar.success(title || 'Success', message, finalConfig);
        }
        case 'WARNING': {
          return this.snackBar.warning('Warning', message, finalConfig);
        }
        case 'DEFAULT': {
          return this.snackBar.info('Information', message, finalConfig);
        }
        case 'LOADING': {
          return this.notfication.loading(message, finalConfig);
        }
        default:
          return null;
      }
    });
  }
}
