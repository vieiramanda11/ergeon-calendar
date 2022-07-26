import React, { useState } from 'react';
import { Calendar } from './components/Calendar';

function App() {
  const [date, setDate] = useState(new Date());
  return <Calendar value={date} onSelect={setDate} weekday="long" />;
}

export default App;
