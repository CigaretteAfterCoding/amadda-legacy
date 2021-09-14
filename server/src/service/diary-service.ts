/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import DiaryRepo from 'Model/diary-model';

class DiaryService {
  static async addDiary(req: Request, res: Response): Promise<void> {
    const { title, content, date, weather, is_private } = req.body;
    const isPrivate = is_private ? 1 : 0;
    const userId = parseInt((req.user as any).id);
    const diaryId = await DiaryRepo.addDiary({
      title,
      content,
      date,
      weather,
      isPrivate,
      userId,
    });

    const diary = await DiaryRepo.findOneDiary(diaryId);

    res.status(200).json(diary);
  }

  static async getDiary(req: Request, res: Response): Promise<void> {
    const diaryId = parseInt(req.params.diaryId);
    const diary = await DiaryRepo.findOneDiary(diaryId);
    res.status(200).json(diary);
  }

  static async getAllDiaries(req: Request, res: Response): Promise<void> {
    const diaries = await DiaryRepo.findAllDiaries();
    res.status(200).json(diaries);
  }

  static async updateDiary(req: Request, res: Response): Promise<void> {
    const diaryId = parseInt(req.params.diaryId);
    const { title, content, date, weather, is_private } = req.body;
    const isPrivate = is_private ? 1 : 0;
    await DiaryRepo.updateDiary({ diaryId, title, content, date, weather, isPrivate });
    res.status(200).json({ message: 'modified successfully' });
  }

  static async deleteDiary(req: Request, res: Response): Promise<void> {
    const diaryId = parseInt(req.params.diaryId);
    const { affectedRows } = await DiaryRepo.deleteDiary(diaryId);
    if (affectedRows > 0) {
      res.status(200).json({ message: 'deleted successfully' });
      return;
    }
    res.status(200).json({ message: 'no items to delete' });
  }
}

export default DiaryService;
