import { AfterViewInit, Component, DestroyRef, inject, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, AfterViewInit{
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  //private interval?: ReturnType<typeof setInterval>;

  private destroyRef = inject(DestroyRef)

  

  ngOnInit() {
    const interval = setInterval(() => {
      console.log('INIT');
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    this.destroyRef.onDestroy(() =>{
      clearInterval(interval)
    })
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  // ngOnDestroy(){
  //   clearTimeout(this.interval)
  // }
}
