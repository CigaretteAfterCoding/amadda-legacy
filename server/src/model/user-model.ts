import { queryExecutor } from 'Utils/query-executor';

export interface UserInfo {
  id: number;
  email: string;
  nickname: string;
  password: string;
  profile_image: string;
}

export interface PublicUserInfo {
  id: number;
  email: string;
  nickname: string;
  profile_image: string;
}

export interface CreateUserParams {
  email: string;
  nickname: string;
  password: string;
  profile_image: string;
}

class UserRepo {
  static async createUser({ email, nickname, password, profile_image }: CreateUserParams): Promise<number> {
    const query = `
      INSERT INTO 
        user(email, nickname, password, profile_image, created_at, updated_at) 
      VALUES('${email}', '${nickname}', '${password}', '${profile_image}', NOW(), NOW())
    `;
    return await queryExecutor(query);
  }

  static async findPublicUserInfoByLoginId(email: string): Promise<PublicUserInfo> {
    const query = `
      SELECT 
        id, email, nickname, profile_image
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
