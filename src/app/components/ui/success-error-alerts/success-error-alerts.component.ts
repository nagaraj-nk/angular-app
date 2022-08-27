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
    this.responseService.subscriber$.subscribe((data: any) => {
      this.success = data.message;
      this.error = data.error;
    });
  }

  ngOnInit(): void {}
}
