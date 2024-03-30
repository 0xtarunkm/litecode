import { useRecoilValue } from 'recoil';
import { userState } from '../atoms/user';

export const useUser = () => {
  const value = useRecoilValue(userState);
  return value;
};
