import React, { useState } from 'react';
import ThreadForm from '../components/ThreadForm';

const ThreadWorkspace = () => {
  const [threads, setThreads] = useState([]);

  const handleThreadSubmit = (data) => {
    setThreads([...threads, data]);
  };

  return (
    <div className="p-4">
      <h1>Thread Workspace</h1>
      <ThreadForm onSubmit={handleThreadSubmit} />
      <div>
        {threads.map((thread, index) => (
          <div key={index} className="border p-2 my-2">
            <h3>Problem Statement: {thread.problemStatement}</h3>
            <p>Motive: {thread.motive}</p>
            {thread.deadline && <p>Deadline: {thread.deadline}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreadWorkspace;