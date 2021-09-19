import { NextFunction, Request, Response } from 'express';
import DiaryRepo from 'Model/diary-model';
import { JWTKey } from 'Utils/jwt';

export async function checkPermission(req: Request, res: Response, next: NextFunction): Promise<void> {
  const diaryId = parseInt(req.params.diaryId);

  const { user_id: userId } = await DiaryRepo.findUserIdByDiaryId(diaryId);

  if ((req.user as JWTKey).id !== userId) {
    res.status(401).json({ message: 'Permission denied. It\'s not your review' });
    return;
  }

  next();
  return;
}
