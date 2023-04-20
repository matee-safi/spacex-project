import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isPending: false,
  error: '',
  missions: [],
};

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async () => {
    try {
      const response = await axios('https://api.spacexdata.com/v3/missions');
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const mission = state.missions.find((m) => m.mission_id === action.payload);
      if (mission) {
        mission.reserved = !mission.reserved;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.isPending = true;
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        const [mission1, mission2, mission3, mission4, mission5,
          mission6, mission7, mission8, mission9, mission10] = action.payload;
        return {
          ...state,
          isPending: false,
          missions: [
            { ...mission1, reserved: false },
            { ...mission2, reserved: false },
            { ...mission3, reserved: false },
            { ...mission4, reserved: false },
            { ...mission5, reserved: false },
            { ...mission6, reserved: false },
            { ...mission7, reserved: false },
            { ...mission8, reserved: false },
            { ...mission9, reserved: false },
            { ...mission10, reserved: false },
          ],
        };
      })
      .addCase(getMissions.rejected, (state) => {
        state.isPending = false;
        state.error = 'OOPS! An error has occurred while getting data';
      });
  },
});

export const { joinMission } = missionsSlice.actions;

export default missionsSlice.reducer;
