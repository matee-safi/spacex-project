import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isPending: false,
  error: '',
  missionId: [],
  missionName: [],
  description: [],
};

export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  try {
    const response = await axios('https://api.spacexdata.com/v3/missions');
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.isPending = true;
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.isPending = false;
        if (action.payload.length > 0) {
          state.missionId = action.payload.map((mission) => mission.mission_id);
          state.missionName = action.payload.map((mission) => mission.mission_name);
          state.description = action.payload.map((mission) => mission.description);
        }
      })
      .addCase(getMissions.rejected, (state) => {
        state.isPending = false;
        state.error = 'OOPS! An error has occurred while getting data';
      });
  },
});

export default missionsSlice.reducer;
