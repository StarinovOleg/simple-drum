import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  TOP_ARROW = 38,
}
@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  @ViewChild('drumCenter', {static:false}) drumRef: ElementRef
  @ViewChild('drumLeft', {static:false}) leftRef: ElementRef
  @ViewChild('drumRight', {static:false}) rightRef: ElementRef
  constructor() { }
  ngOnInit(): void {

  }
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch(event.keyCode){
      case KEY_CODE.TOP_ARROW:
        this.onClick(event);
        this.stylefunction();
        break;
      case KEY_CODE.LEFT_ARROW:
        this.onClick1(event);
        this.stylefunction1();
        break;
      case KEY_CODE.RIGHT_ARROW:
        this.onClick2(event);
        this.stylefunction2();
        break;
    }
  }
 stylefunction(){
   const newclass = this.drumRef.nativeElement;
   newclass.classList.add('bulk');
   setTimeout(function() {
     newclass.classList.remove('bulk');
   }, 1000);
  }
  stylefunction1(){
    const newclass = this.leftRef.nativeElement;
    newclass.classList.add('bulk');
    setTimeout(function() {
      newclass.classList.remove('bulk');
    }, 1000);
  }
  stylefunction2(){
    const newclass = this.rightRef.nativeElement;
    newclass.classList.add('bulk');
    setTimeout(function() {
      newclass.classList.remove('bulk');
    }, 1000);
  }
  onClick(event: KeyboardEvent) {
    const audio = new Audio('../../assets/sounds/b1.mp3');
    audio.play();
    this.stylefunction();
  }
  onClick1(event: KeyboardEvent) {
    const audio = new Audio('../../assets/sounds/bongo.mp3');
    audio.play();
    this.stylefunction1();
  }
  onClick2(event: KeyboardEvent) {
    const audio = new Audio('../../assets/sounds/bongo-loop.mp3');
    audio.play();
    this.stylefunction2();
  }
}
