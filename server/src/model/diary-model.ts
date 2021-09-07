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

}

export default DiaryRepo;
