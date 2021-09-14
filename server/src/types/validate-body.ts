// user
export interface SignUpUserBody {
  email: string;
  password: string;
}

export interface SignInUserBody {
  email: string;
  password: string;
}

// diary
export interface AddDiaryBody {
  title: string;
  content: string;
  date: string;
  weather: string;
  is_private: boolean;
}

export interface UpdateDiaryBody {
  title?: string;
  content?: string;
  date?: string;
  weather?: string;
  is_private?: boolean;
}