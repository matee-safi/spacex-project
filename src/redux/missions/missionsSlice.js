import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  mission_id: [],
  mission_name: [],
  description: [],
};

export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  try {
    const response = await axios('https://api.spacexdata.com/v3/missions');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return null;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => {
      action.payload.forEach(() => {
        state.mission_id = action.payload.map((mission) => mission.mission_id);
        state.mission_name = action.payload.map((mission) => mission.mission_name);
        state.description = action.payload.map((mission) => mission.description);
      });
    });
  },
});

export default missionsSlice.reducer;
