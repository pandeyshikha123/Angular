import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf and *ngFor
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-datetime',
  standalone: true,
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css'],
  imports: [CommonModule, FormsModule] // Include CommonModule and FormsModule in imports
})
export class DatetimeComponent implements OnInit, OnDestroy {
  localDateTime: string = '';
  selectedDateTime: string = '';
  selectedZone: string = 'UTC';
  showTimezoneSelector: boolean = false;  
  private timerId: any;

  timezones = ['UTC', 'Asia/Kolkata', 'America/New_York', 'Europe/London'];

  ngOnInit(): void {
    this.updateLocalTime();
    this.timerId = setInterval(() => this.updateLocalTime(), 1000); // update every second
  }
    
    ngOnDestroy(): void {
      if(this.timerId) {
      clearInterval(this.timerId);
    }
  }

  updateLocalTime() {
    this.localDateTime = new Date().toLocaleString();
  }

  onZoneChange() {
    this.updateSelectedZoneTime();
    this.timerId = setInterval(() => this.updateSelectedZoneTime(), 1000); // update every second
  }

  updateSelectedZoneTime() {
    const now = new Date();
    this.selectedDateTime = now.toLocaleString('en-US', {
      timeZone: this.selectedZone,
    });
  }

  toggleTimezoneSelector() {
    this.showTimezoneSelector = !this.showTimezoneSelector;  // Toggle visibility of the timezone dropdown
  }
}
