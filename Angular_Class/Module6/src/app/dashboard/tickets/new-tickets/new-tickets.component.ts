import { Component } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-new-tickets',
  standalone: true,
  imports: [ControlComponent, ButtonComponent],
  templateUrl: './new-tickets.component.html',
  styleUrl: './new-tickets.component.css'
})
export class NewTicketsComponent {

}
