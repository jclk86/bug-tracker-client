import {AuthType} from '../../shared/constants/AppEnums';

export interface AuthUser {
  id: string;
  displayName?: string;
  email?: string;
  photoURL?: string;
  token?: string;
  authType: AuthType;
  role: string[];
  accountId?: string;
}
