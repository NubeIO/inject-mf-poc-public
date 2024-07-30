import React from "react";
import EventEmitter from "eventemitter3";
import { inject, injectable } from "inversify";

import { ICommunicationService } from "./communication-service-type";

@injectable()
export class CommunicationService implements ICommunicationService {
  readonly bus: any;
  readonly messageQueueByTopic: { [topicName: string]: any };
  readonly maxQueueSize = 100000;

  constructor() {
    this.bus = new EventEmitter();
    this.messageQueueByTopic = {};
  }

  storeMessageByTopic(topic: string, message: any) {
    if (!this.messageQueueByTopic[topic]) {
      this.messageQueueByTopic[topic] = [];
    }
    this.messageQueueByTopic[topic].push({
      message: message,
      timestamp: new Date(),
    });

    // Check if the number of messages exceeds the maximum limit
    if (this.messageQueueByTopic[topic].length > this.maxQueueSize) {
      this.messageQueueByTopic[topic].shift();
    }
  }

  getAllStoredMessagesByTopic(topic: string) {
    return this.messageQueueByTopic[topic] || [];
  }

  getLastStoredMessageByTopic(topic: string) {
    return this.messageQueueByTopic[topic]
      ? this.messageQueueByTopic[topic][
          this.messageQueueByTopic[topic].length - 1
        ]
      : null;
  }

  getBus(): any {
    return this.bus;
  }

  subscribeToTopic(topic: string, listener: any): void {
    this.bus.on(topic, listener);
  }

  unsubscribeFromTopic(topic: string, listener: any): void {
    this.bus.off(topic, listener);
  }

  publishToTopic(topic: string, payload: any): void {
    this.bus.emit(topic, payload);
    this.storeMessageByTopic(topic, payload);
  }

  subscribeToTopicOnce(topic: string, payload: any): void {
    this.bus.once(topic, payload);
  }

  removeAllListenersForTopic(topic: string): void {
    this.bus.removeAllListeners(topic);
  }

  removeAllListeners(): void {
    this.bus.removeAllListeners();
  }

  listAllTopics(): (string | symbol)[] {
    return this.bus.eventNames();
  }

  getNumberOfSubscribersForTopic(topic: string): number {
    return this.bus.listenerCount(topic);
  }

  getListenersForTopic(topic: string): any[] {
    return this.bus.listeners(topic);
  }
}
