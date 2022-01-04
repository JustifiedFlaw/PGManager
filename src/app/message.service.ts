import { Injectable } from '@angular/core';
import { Message } from './models/message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: Message[] = [];

  success(message: string) {
    this.messages.push(new Message(message, 'success'));
  }

  error(message: string) {
    this.messages.push(new Message(message, 'danger'));
  }

  clear() {
    this.messages = [];
  }
}