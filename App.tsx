import React from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store, RootState} from './store';

function App() {
  const sessions = useSelector((state: RootState) => state.sessions.sessions);
  const dispatch = useDispatch();

  // Example of adding a session
  const handleAddSession = () => {
    const newSession = {
      id: '123',
      therapist: 'Dr. Smith',
      client: 'John Doe',
      date: '2023-09-30',
      duration: 60
    };
    dispatch(addSession(newSession));
  };

  return (
    <Provider store={store}>
      <div>
        <button onClick={handleAddSession}>Add Session</button>
        <ul>
          {sessions.map(session => (
            <li key={session.id}>{session.client} with {session.therapist} on {session.date}</li>
          ))}
        </ul>
      </div>
    </Provider>
  );
}

export default App;
