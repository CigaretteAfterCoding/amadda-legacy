import { Router } from 'express';
import { validateBody } from 'Middlewares/validate-body';
import { isSignedIn } from 'Middlewares/auth';
import { AddDiaryBody } from 'Types/validate-body';
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
  DiaryService.addSalon,
);

diaryRouter.get('/:diaryId', DiaryService.getDiary);

export default diaryRouter;
