export interface Diary {
  entryId: number;
  title: string;
  content: string;
  author?: string;
  sharedToFriends?: string;
  creationTime?: Date;
}
