import { amaddaApi } from './baseAPI';

interface AddDiaryParams {
  title: string;
  content: string;
  date: string;
  weather: 'sunny' | 'cloudy' | 'rainy' | 'snowy';
  is_private: boolean;
}

async function addDiary(diary: AddDiaryParams): Promise<number | undefined> {
  try {
    const { data } = await amaddaApi.post<number>('/diary', diary);
    return data;
  } catch (error) {
    console.error(error);
  }
}

interface GetDiaryResponse {
  title: string;
  content: string;
  date: string;
  weather: 'sunny' | 'cloudy' | 'rainy' | 'snowy';
  is_private: boolean;
}

async function getDiary(diaryId: number) {
  try {
    const { data } = await amaddaApi.get<GetDiaryResponse>(`/diary/${diaryId}`);
    return data;
  } catch (error) {
    console.error(error);
  }
}

interface UpdateDiaryParams {
  diaryId: number;
  title?: string;
  content?: string;
  date?: string;
  weather?: 'sunny' | 'cloudy' | 'rainy' | 'snowy';
  is_private?: boolean;
}
interface UpdateDiaryResponse {
  message: 'modified successfully';
}

async function updateDiary({ diaryId, title, content, date, weather, is_private }: UpdateDiaryParams) {
  try {
    const { data } = await amaddaApi.patch<UpdateDiaryResponse>(`/diary/${diaryId}`, {
      title,
      content,
      date,
      weather,
      is_private,
    });

    return data;
  } catch (error) {
    console.error(error);
  }
}

export default {
  addDiary,
  getDiary,
  updateDiary,
  // deleteDiary,
};