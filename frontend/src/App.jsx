
import { useState } from 'react';
import './App.css';
import Job from './components/Job';
import JobPostForm from './components/JobPostForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Job />
      <JobPostForm/>
    </>
  );
}

export default App;
