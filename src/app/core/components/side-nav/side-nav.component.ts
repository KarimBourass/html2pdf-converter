import { Component, Input } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzMenuModule } from "ng-zorro-antd/menu";

const modules = [RouterModule, NzMenuModule, NzIconModule];

@Component({
  selector: "app-side-nav",
  standalone: true,
  imports: [...modules],
  template: `
    <div
      class="sidebar-logo relative h-16 pl-4 bg-white transition-all duration-300 overflow-hidden"
    >
      <img
        src="../../../assets/images/berexia.jpg"
        alt="logo"
        class="ml-2 inline-block h-8 w-8 align-middle"
      />
      <h1
        class="inline-block ml-5 font-semibold text-base align-middle text-primary"
      >
        {{ appName }}
      </h1>
    </div>
    <hr class="my-4" />
    <ul nz-menu nzMode="inline" [nzInlineCollapsed]="isCollapsed">
      <li nz-menu-item nzMatchRouter routerLink="/files">
        <i nz-icon nzType="file"></i>
        <span>Files</span>
      </li>
    </ul>
  `,
  styles: [
    `
      .sidebar-logo {
        line-height: 64px;
      }
    `,
  ],
})
export class SideNavComponent {
  @Input() isCollapsed: boolean = false;
  @Input() appName!: string;
}
