import { Component, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  private breakpointObserver = inject(BreakpointObserver);

  constructor(private router: Router){

  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
      
    );
    
    @ViewChild('drawer') public drawer!: MatDrawer;
    ngOnInit(): void {
    }
  
    receiveEvent(event: any){
      this.drawer.toggle()
      
    }
    
    @Output() messageEvent = new EventEmitter<boolean>();
    clicked: boolean = false;
    
  
    sendEvent() {
      this.clicked = !this.clicked;    
      this.messageEvent.emit(this.clicked)
    }

   
}
