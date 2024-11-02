// src/components/FeaturesSection.jsx
import React from 'react';

const features = [
  { title: "Problem Statement Submission", description: "Submit problems easily through a dedicated form." },
  { title: "Motive or Agenda Description", description: "Articulate your motives clearly in a text area." },
  { title: "Important Dates and Deadlines", description: "Set milestones with user-friendly date pickers." },
  { title: "Discussion Forum", description: "Engage in discussions through a comment section." },
  { title: "File Sharing", description: "Upload files relevant to your threads for easy access." },
  { title: "Action Items and Task Assignments", description: "Track responsibilities with task lists and checkboxes." },
  { title: "Progress Updates", description: "Post updates on your progress through simple forms." },
  { title: "Real-Time Editing", description: "Collaborate seamlessly with real-time editing features." },
  { title: "Voting System", description: "Express opinions on topics with a simple voting mechanism." },
  { title: "Mentorship Requests", description: "Request mentorship through a dedicated form." },
  { title: "Feedback Mechanism", description: "Provide feedback with a rating system for threads." },
];

const FeaturesSection = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-4 text-center text-cyan-600">Features of Collab Call - Thread Workspace</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 border border-cyan-700">
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;