import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  ButtonCloseDirective,
  ButtonDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ThemeDirective
} from '@coreui/angular';
import { SharedService } from '../SharedService';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    standalone: true,
    styleUrl: './modal.component.css',
    imports: [ButtonDirective, ModalComponent, ModalHeaderComponent, ModalTitleDirective, ThemeDirective, ButtonCloseDirective, ModalBodyComponent, ModalFooterComponent, CommonModule]
})
export class Modal02Component implements OnInit {
  public data : any;
  public map: string = "";
  public cleanMap: any = "";
constructor(private sharedService: SharedService, private sanitizer: DomSanitizer){ }

  @Output() closeEvent = new EventEmitter();

  public toggleLiveDemo() {
    this.closeEvent.emit()
  }
  ngOnInit(): void {
    this.data = this.sharedService.getChosenData()
    this.map = "https://maps.google.com/maps/embed?width=100%25&amp;height=400&amp;hl=en&amp;q=" + this.data.name.common +"+()&amp;t=&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";
    this.cleanMap = this.sanitizer.bypassSecurityTrustResourceUrl(this.map);
  }
}

