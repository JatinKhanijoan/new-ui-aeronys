import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    first_name: string;
    last_name: string;
    email: string;
    profile_image_url: string;
    course_id: Array<{ course_id: string; name: string }>;
    courses: string[];
    license_type: string | null;
    license_number: string;
    wallet_balance: string;
    initials: string;
    is_license_holder: boolean;
    display_authorization_exp_date: string | null;
    mep_expiry_date: string | null;
    ir_se_expiry_date: string | null;
    ir_me_expiry_date: string | null;
    ir_r_expiry_date: string | null;
    user_signature_url: string;
    current_medical_expiry: string;
}

const initialState: UserState = {
    first_name: '',
    last_name: '',
    email: '',
    profile_image_url: '',
    course_id: [],
    courses: [],
    license_type: null,
    license_number: '',
    wallet_balance: '',
    initials: '',
    is_license_holder: false,
    display_authorization_exp_date: null,
    mep_expiry_date: null,
    ir_se_expiry_date: null,
    ir_me_expiry_date: null,
    ir_r_expiry_date: null,
    user_signature_url: '',
    current_medical_expiry: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            return { ...state, ...action.payload };
        },
        clearUser: () => {
            return initialState;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;