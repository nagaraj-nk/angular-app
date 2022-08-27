import { Component, OnInit } from '@angular/core';
import { SuccessErrorServiceService } from 'src/app/services/success-error-service.service';

@Component({
  selector: 'app-success-error-alerts',
  templateUrl: './success-error-alerts.component.html',
  styleUrls: ['./success-error-alerts.component.css'],
})
export class SuccessErrorAlertsComponent implements OnInit {
  success: string | undefined;
  error: string | undefined;

  constructor(private responseService: SuccessErrorServiceService) {
    
  }

  ngOnInit(): void {
    this.responseService.subscriber$.subscribe((data: any) => {
      console.log('observing data: '+ JSON.stringify(data));
      
      this.success = data.message;
      this.error = data.error;
    });
  }
}
