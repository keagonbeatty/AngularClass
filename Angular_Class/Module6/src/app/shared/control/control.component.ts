import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  //@HostBinding('class') className = 'control';
  // @HostListener('click') onClick(){
  //   console.log('click')
  // }
  @Input({ required: true }) label!: string;
  private el = inject(ElementRef)
  onClick(){
    console.log(this.el)
    console.log(this.control)
  }

  
  @ContentChild('input') private control? : ElementRef<HTMLInputElement> | ElementRef<HTMLTextAreaElement>;




}
