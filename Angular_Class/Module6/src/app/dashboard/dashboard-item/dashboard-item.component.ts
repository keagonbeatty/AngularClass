import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  // host: {
  //   class: 'dashboard-item'
  // }
})
export class DashboardItemComponent {
@Input({required: true}) title!:string;
@Input({required: true}) imageSrc!: {src: string, alt: string};
}
