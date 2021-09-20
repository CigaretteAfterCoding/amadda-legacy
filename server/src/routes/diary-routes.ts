import { Router } from 'express';
import { validateBody } from 'Middlewares/validate-body';
import { isSignedIn } from 'Middlewares/auth';
import { AddDiaryBody, UpdateDiaryBody } from 'Types/validate-body';
import { decodeJWT } from 'Middlewares/decode-jwt';
import DiaryService from 'Service/diary-service';
import { checkPermission } from 'Middlewares/check-permission';

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
    'image',
  ]),
  isSignedIn,
  DiaryService.addDiary,
);

diaryRouter.get('/:diaryId', decodeJWT, DiaryService.getDiary);
diaryRouter.get('/', decodeJWT, DiaryService.getAllMyDiaries);
diaryRouter.get('/square', DiaryService.getAllPublicDiaries);

diaryRouter.patch(
  '/:diaryId',
  decodeJWT,
  checkPermission,
  validateBody<UpdateDiaryBody>([
    'title',
    'content',
    'date',
    'weather',
    'is_private',
    'image',
  ]),
  DiaryService.updateDiary,
);

diaryRouter.delete(
  '/:diaryId',
  decodeJWT,
  checkPermission,
  DiaryService.deleteDiary
);

export default diaryRouter;
