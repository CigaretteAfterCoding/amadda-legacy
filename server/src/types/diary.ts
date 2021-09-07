export interface Diary {
  id?: number;
  title: string;
  content: string;
  date: string;
  weather: string;
  isPrivate: 0 | 1;
  userId: number;
}