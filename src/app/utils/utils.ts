import { HttpHeaders } from '@angular/common/http';
import * as Constants from '../utils/constants';

export class Utils {
  public httpHeaders() {
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-type', Constants.JSON_HEADER);
    httpHeaders.set('Accept', Constants.JSON_HEADER);
    httpHeaders.set('sample', Constants.JSON_HEADER);
    return httpHeaders;
  }

  public authHeaders(credentials: string) {
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Authorization', 'Basic ' + credentials);
    return httpHeaders;
  }
}
