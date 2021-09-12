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
    console.log({ data });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default {
  addDiary,
  getDiary,
  // updateDiary,
  // deleteDiary,
};