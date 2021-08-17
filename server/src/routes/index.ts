import { Router } from 'express';
import userRouter from 'Routes/user-routes';

const router = Router();

router.use('/user', userRouter);

export default router;
