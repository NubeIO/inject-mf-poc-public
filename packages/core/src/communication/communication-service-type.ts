export type StoredMessage = {
  message: any;
  timestamp: Date;
};

export interface ICommunicationService {
  readonly bus: any;
  readonly messageQueueByTopic: { [topicName: string]: any };

  getBus(): any;

  storeMessageByTopic(topic: string, message: any): void;

  getAllStoredMessagesByTopic(topic: string): StoredMessage[];

  getLastStoredMessageByTopic(topic: string): StoredMessage | null;

  subscribeToTopic(topic: string, listener: any): void;

  unsubscribeFromTopic(topic: string, listener: any): void;

  publishToTopic(topic: string, payload: any): void;

  subscribeToTopicOnce(topic: string, payload: any): void;

  removeAllListenersForTopic(topic: string): void;

  removeAllListeners(): void;

  listAllTopics(): (string | symbol)[];

  getNumberOfSubscribersForTopic(topic: string): number;

  getListenersForTopic(topic: string): any[];
}
