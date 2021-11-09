import { Router } from 'express';
import userRouter from 'Routes/user-routes';
import diaryRouter from 'Routes/diary-routes';

const router = Router();

router.use('/user', userRouter);
router.use('/diary', diaryRouter);

export default router;
