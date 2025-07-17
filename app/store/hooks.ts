import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './index';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = () => {
    const token = useAppSelector((state) => state.token);
    const user = useAppSelector((state) => state.user);

    const isAuthenticated = !!token.accessToken;

    return {
        user,
        token,
        isAuthenticated,
    };
};

export const useUser = () => {
    const user = useAppSelector((state) => state.user);
    return user;
};

export const useToken = () => {
    const token = useAppSelector((state) => state.token);
    return token;
};