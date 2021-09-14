export interface DiaryParams {
  id?: number;
  title: string;
  content: string;
  date: string;
  weather: string;
  isPrivate: 0 | 1;
  userId: number;
}

export interface DiaryResponse {
  id?: number;
  title: string;
  content: string;
  date: string;
  weather: string;
  is_private: 0 | 1 | boolean;
  userId: number;
}