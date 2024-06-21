import { useParams } from 'react-router-dom';

export const DeleteProfile = () => {
  const { idProfile, profile } = useParams();
  
  return (
    <div>
      <h1>Delete Profile</h1>
      <p>ID Profile: {idProfile}</p>
      <p>Profile: {profile}</p>
    </div>
  );
};

