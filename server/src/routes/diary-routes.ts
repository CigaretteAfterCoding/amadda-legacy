import { Router } from 'express';
import { validateBody } from 'Middlewares/validate-body';
import { isSignedIn } from 'Middlewares/auth';
import { AddDiaryBody, UpdateDiaryBody } from 'Types/validate-body';
import { decodeJWT } from 'Middlewares/decode-jwt';
import DiaryService from 'Service/diary-service';

const diaryRouter = Router();

diaryRouter.post(
  '/',
  decodeJWT,
  validateBody<AddDiaryBody>([
    'title',
    'content',
    'date',
    'weather',
    'is_private',
  ]),
  isSignedIn,
  DiaryService.addDiary,
);

diaryRouter.get('/:diaryId', DiaryService.getDiary);

diaryRouter.patch(
  '/:diaryId',
  decodeJWT,
  validateBody<UpdateDiaryBody>([
    'title',
    'content',
    'date',
    'weather',
    'is_private',]),
  DiaryService.updateDiary,
);

diaryRouter.delete('/:diaryId', decodeJWT, DiaryService.deleteDiary);

export default diaryRouter;
