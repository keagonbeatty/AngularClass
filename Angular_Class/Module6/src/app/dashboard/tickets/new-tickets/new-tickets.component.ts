import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-tickets',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-tickets.component.html',
  styleUrl: './new-tickets.component.css'
})
export class NewTicketsComponent implements OnInit, AfterViewInit {

  @ViewChild('form') private form? : ElementRef<HTMLFormElement>;
  //private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit(title : string, ticketText: string){
    console.log(title)
    console.log(ticketText)
    this.form?.nativeElement.reset()
  }

  ngOnInit(): void {
    console.log('onInit');
    console.log(this.form?.nativeElement);
  }
  ngAfterViewInit(): void {
    console.log('afterViewInit')
    console.log(this.form?.nativeElement)
  }
}
