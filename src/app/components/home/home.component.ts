import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showResume = false;
  resumeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.resumeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Pratik_Bhoskar_Resume.pdf');
  }
}