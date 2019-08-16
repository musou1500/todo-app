import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

export class ApiResource<T> {
  constructor(private httpClient: HttpClient, private name: string) {}

  getAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(`${environment.apiBase}/${this.name}`);
  }

  update(id: number, body: Partial<T>): Observable<T> {
    return this.httpClient.patch<T>(
      `${environment.apiBase}/${this.name}/${id}`,
      body,
    );
  }

  store(body: Partial<T>): Observable<T> {
    return this.httpClient.post<T>(this.baseUrl, body);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  get baseUrl() {
    return `${environment.apiBase}/${this.name}`;
  }
}
