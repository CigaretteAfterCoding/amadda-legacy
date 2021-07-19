import { queryExecutor } from 'Utils/query-executor';
import { CreateUserParams } from 'Types/repository-param';

export interface UserInfo {
  id: number;
  email: string;
  nickname: string;
  password: string;
}

export interface PublicUserInfo {
  id: number;
  email: string;
  nickname: string;
}

class UserRepo {
  static async createUser({ email, nickname, password }: CreateUserParams): Promise<number> {
    const query = `
      INSERT INTO 
        user(email, nickname, password, created_at, updated_at) 
      VALUES('${email}', '${nickname}', '${password}', NOW(), NOW())
    `;
    return await queryExecutor(query);
  }

  static async findPublicUserInfoByLoginId(email: string): Promise<PublicUserInfo> {
    const query = `
      SELECT 
        id, email, nickname 
      FROM
        user 
      WHERE 
        email='${email}'
    `;
    const user: PublicUserInfo[] = await queryExecutor(query);
    return user[0];
  }

  static async findByEmail(email: string): Promise<UserInfo> {
    const query = `
      SELECT
        * 
      FROM 
        user 
      WHERE 
        email='${email}'
    `;
    const user: UserInfo[] = await queryExecutor(query);
    return user[0];
  }
}

export default UserRepo;
