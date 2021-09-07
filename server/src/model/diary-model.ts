import { Diary } from 'Types/diary';
import { queryExecutor } from 'Utils/query-executor';

interface AddDiaryParams extends Diary {};

class DiaryRepo {
  static async addDiary({ title, content, date, weather, isPrivate, userId }: AddDiaryParams): Promise<number> {
    const query = `
      INSERT INTO 
        diary(title, content, date, weather, private, user_id, created_at, updated_at) 
      VALUES('${title}', '${content}', '${date}', '${weather}', '${isPrivate}', '${userId}', NOW(), NOW())
    `;
    return await queryExecutor(query);
  }

  static async findOneDiary(diaryId: number): Promise<Diary> {
    const query = `
      SELECT
        diary.id id,
        diary.title title,
        diary.content content,
        diary.date date,
        diary.weather weather,
        diary.private private,
        diary.created_at created_at,
        diary.updated_at updated_at,
        user.email user_email,
        user.nickname user_nickname,
        user.profile_image user_profile_image
      FROM 
        diary
      JOIN
        user
      ON
        diary.user_id=user.id
      WHERE
        diary.id=${diaryId}
    `;
    const result = await queryExecutor(query);
    return result[0];
  }

}

export default DiaryRepo;
