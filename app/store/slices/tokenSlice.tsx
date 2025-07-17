import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface TokenState {
    accessToken: string;
    refreshToken: string;
    userId: string;
    organisations: string[];
    currentOrganisation: string;
}

const initialState: TokenState = {
    accessToken: '',
    refreshToken: '',
    userId: '',
    organisations: [],
    currentOrganisation: '',
};

const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setAuthTokens: (state, action: PayloadAction<TokenState>) => {
            return { ...state, ...action.payload };
        },
        clearAuthTokens: () => {
            return initialState;
        },
    },
});

export const { setAuthTokens, clearAuthTokens } = tokenSlice.actions;
export default tokenSlice.reducer;