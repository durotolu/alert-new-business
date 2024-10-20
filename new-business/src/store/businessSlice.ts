import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Business {
  id: string;
  name: string;
  type: string;
  industry: string;
  size: string;
  volume: string;
}

interface BusinessState {
  businesses: Business[];
}

const initialState: BusinessState = {
  businesses: [],
};

const businessSlice = createSlice({
  name: 'business',
  initialState,
  reducers: {
    addBusiness: (state, action: PayloadAction<Business>) => {
      state.businesses.push(action.payload);
    },
  },
});

export const { addBusiness } = businessSlice.actions;
export default businessSlice.reducer;
