import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isPending: false,
  missionId: [],
  missionName: [],
  description: [],
};

export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  try {
    const response = await axios('https://api.spacexdata.com/v3/missions');
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
  return null;
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
        if (state.missionId) {
          action.payload.forEach(() => {
            state.missionId = action.payload.map((mission) => mission.mission_id);
            state.missionName = action.payload.map((mission) => mission.mission_name);
            state.description = action.payload.map((mission) => mission.description);
          });
        }
      })
      .addCase(getMissions.rejected, (state) => {
        state.isPending = false;
      });
  },
});

export default missionsSlice.reducer;
