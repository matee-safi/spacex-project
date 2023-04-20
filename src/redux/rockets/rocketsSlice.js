import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  isLoading: false,
  error: '',
};

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://api.spacexdata.com/v4/rockets');
      const rockets = await response.json();
      return rockets;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocket = state.rockets.find((r) => r.id === action.payload);
      rocket.reserved = !rocket.reserved;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchRockets.fulfilled, (state, action) => {
        const [rocket1, rocket2, rocket3, rocket4] = action.payload;
        return {
          ...state,
          isLoading: false,
          rockets: [
            { ...rocket1, reserved: false },
            { ...rocket2, reserved: false },
            { ...rocket3, reserved: false },
            { ...rocket4, reserved: false },
          ],
        };
      })
      .addCase(fetchRockets.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export const { reserveRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
