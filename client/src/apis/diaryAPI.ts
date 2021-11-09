import { Diary } from 'Types/diary';
import { NoItemsToDeleteErrorResponse, UnauthorizedErrorResponse } from 'Types/errors';
import { amaddaApi } from './baseAPI';

interface AddDiaryParams {
  title: string;
  content: string;
  date: string;
  weather: 'sunny' | 'cloudy' | 'rainy' | 'snowy';
  is_private: boolean;
}

type AddDiaryResponse = Diary | UnauthorizedErrorResponse;

async function addDiary(diary: AddDiaryParams): Promise<AddDiaryResponse | void> {
  try {
    const { data } = await amaddaApi.post<AddDiaryResponse>('/diary', diary);
    return data;
  } catch (error) {
    console.error(error);
  }
}

type GetDiaryResponse = Diary;

async function getDiary(diaryId: number): Promise<GetDiaryResponse | void> {
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

type UpdateDiaryResponse = Diary | UnauthorizedErrorResponse;

async function updateDiary({ diaryId, title, content, date, weather, is_private }: UpdateDiaryParams): Promise<UpdateDiaryResponse | void> {
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

type DeleteDiaryResponse = Diary | UnauthorizedErrorResponse | NoItemsToDeleteErrorResponse;

async function deleteDiary(diaryId: number): Promise<DeleteDiaryResponse | void> {
  try {
    const { data } = await amaddaApi.delete<DeleteDiaryResponse>(`/diary/${diaryId}`);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default {
  addDiary,
  getDiary,
  updateDiary,
  deleteDiary,
};