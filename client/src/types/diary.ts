export interface Diary {
  id: number;
  title: string;
  content: string;
  date: string;
  weather: 'sunny' | 'rainy' | 'cloudy' | 'snowy';
  is_private: boolean;
  created_at: string;
  updated_at: string;
  user_email: string;
  user_nickname: string;
  user_profile_image: string;
}
