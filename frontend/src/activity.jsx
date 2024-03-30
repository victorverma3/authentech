import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';

const Activity = () => {
  const [organization, setOrganization] = useState('');
  const [activity, setActivity] = useState('');
  const [position, setPosition] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a backend or store it locally
    console.log({ organization, activity, position, description });
  };

  return (
    <div className="container mt-5">
      <h1>Activity Section</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="organization" className="form-label">Organization</label>
          <input type="text" className="form-control" id="organization" value={organization} onChange={(e) => setOrganization(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="activity" className="form-label">Activity</label>
          <input type="text" className="form-control" id="activity" value={activity} onChange={(e) => setActivity(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="position" className="form-label">Position</label>
          <input type="text" className="form-control" id="position" value={position} onChange={(e) => setPosition(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Verify</button>
        <Link to="/" className="btn btn-dark ms-2">
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </Link>
      </form>
    </div>
  );
};

export default Activity;
