import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Session {
  id: string;
  therapist: string;
  client: string;
  date: string;
  duration: number; // in minutes
  notes?: string;
}

interface SessionsState {
  sessions: Session[];
}

const initialState: SessionsState = {
  sessions: [],
};

export const sessionsSlice = createSlice({
  name: 'sessions',
  initialState,
  reducers: {
    addSession: (state, action: PayloadAction<Session>) => {
      state.sessions.push(action.payload);
    },
    removeSession: (state, action: PayloadAction<string>) => {
      state.sessions = state.sessions.filter(
        session => session.id !== action.payload,
      );
    },
  },
});

export const {addSession, removeSession} = sessionsSlice.actions;

export default sessionsSlice.reducer;
