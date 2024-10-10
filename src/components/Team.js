import React from 'react';

const Team = () => {
  return (
    <div>
      <h1>Group Members</h1>
      <div className="member">
        <img src="path/to/photo1.jpg" alt="Member 1" />
        <p><strong>Member 1:</strong> Bio for member 1. A brief description of their role and contributions.</p>
      </div>
      <div className="member">
        <img src="path/to/photo2.jpg" alt="Member 2" />
        <p><strong>Member 2:</strong> Bio for member 2. A brief description of their role and contributions.</p>
      </div>
    </div>
  );
};

export default Team;
