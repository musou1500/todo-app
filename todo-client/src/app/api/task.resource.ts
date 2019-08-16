import {ApiResource} from './resource';
import {Task} from '../models';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class TaskResource extends ApiResource<Task> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'tasks');
  }
}
