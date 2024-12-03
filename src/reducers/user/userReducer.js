import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, getUserProfile} from "../../api/user";


export const authenticateUser = createAsyncThunk(
    'user/authenticateUser',
    async (credentials, thunkAPI) => {
        try {
            const response = await loginUser(credentials);
            if (response.token) {
                localStorage.setItem('token', response.token);
                return response.user;
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const fetchUserProfile = createAsyncThunk(
    'user/fetchUserProfile',
    async (email, thunkAPI) => {
        try {
            const response = await getUserProfile(email);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: null,
        isLoggedIn: false,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.isLoggedIn = false;
            state.userData = null;
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authenticateUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(authenticateUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isLoggedIn = true;
                state.userData = action.payload;
            })
            .addCase(authenticateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchUserProfile.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.userData = action.payload;
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
