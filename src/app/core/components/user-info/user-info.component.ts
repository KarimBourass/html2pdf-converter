import { Component } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [NzIconModule, NzAvatarModule, NzDropDownModule, NzTagModule, NzDividerModule],
  templateUrl: './user-info.component.html',
  styleUrls: []
})
export class UserInfoComponent {

}
