import {ApiResource} from './resource';
import {Label} from '../models';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class LabelResource extends ApiResource<Label> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'labels');
  }
}
