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
  businesses: Business;
}

const initialState: BusinessState = {
  businesses: {
    id: '',
    name: '',
    type: '',
    industry: '',
    size: '',
    volume: ''
  },
};

const businessSlice = createSlice({
  name: 'business',
  initialState,
  reducers: {
    addBusiness: (state, action: PayloadAction<Business>) => {
      state.businesses = action.payload;
    },
  },
});

export const { addBusiness } = businessSlice.actions;
export default businessSlice.reducer;
