import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from '../user-info/user-info.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

const modules = [NzIconModule, NzLayoutModule]
const components = [UserInfoComponent]

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [...modules, ...components],
  template: `
    <nz-header class="p-0 w-full z-2">
      <div class="relative h-16 bg-white shadow-sm flex justify-between items-center px-6">
        <span class="h-16 text-4xl cursor-pointer transition-all duration-300" (click)="collapse.emit(true)">
          <span class="text-xl hover:text-blue-500" nz-icon [nzType]="isCollapsed ? 'menu-unfold' : 'menu-fold'"></span>
        </span>
        <app-user-info></app-user-info>
      </div>
    </nz-header>

  `,
  styles: []
})
export class HeaderComponent {
  @Input() isCollapsed: boolean = false;
  @Output() collapse: EventEmitter<boolean> = new EventEmitter();
}
