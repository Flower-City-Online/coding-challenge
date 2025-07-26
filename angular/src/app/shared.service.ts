import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class SharedService {
  constructor(private http: HttpClient) {}

  fetchCountries(name) {
    return this.http
      .get<any>('https://restcountries.com/v3.1/name/' + name)
      .pipe(
        tap((countries) => {
          return countries;
        })
      );
  }
}
