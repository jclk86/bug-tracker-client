import {AuthUser} from '../../types/models/AuthUser';
import {AuthType} from './AppEnums';

export const authRole = {
  admin: ['admin'],
  user: ['user', 'admin', 'owner', 'mananger', 'developer'],
};

export const defaultUser: AuthUser = {
  id: 'RFedvhji876rfhjuecvh7',
  displayName: 'John Alex',
  email: 'jcnyg1986@gmail.com',
  token: 'access-token',
  role: authRole.user,
  authType: AuthType.AUTH0,
  photoURL: 'https://via.placeholder.com/150',
  accountId: '490583905834ffewf',
};
export const initialUrl = '/dashboards/health-care'; // this url will open after login
