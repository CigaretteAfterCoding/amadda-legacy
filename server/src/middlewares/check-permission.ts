import { STATUS_CODE, ERROR_RESPONSE } from 'Constants';
import { NextFunction, Request, Response } from 'express';
import DiaryRepo from 'Model/diary-model';
import { JWTKey } from 'Utils/jwt';

export async function checkPermission(req: Request, res: Response, next: NextFunction): Promise<void> {
  const diaryId = parseInt(req.params.diaryId);

  const { user_id: userId } = await DiaryRepo.findUserIdByDiaryId(diaryId);

  if ((req.user as JWTKey).id !== userId) {
    res.status(STATUS_CODE.UNAUTHORIZED).json(ERROR_RESPONSE.PERMISION_DENIED);
    return;
  }

  next();
}
