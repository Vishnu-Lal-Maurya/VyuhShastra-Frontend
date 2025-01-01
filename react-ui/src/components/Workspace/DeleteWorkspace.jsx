import React from 'react';
import { useHistory } from 'react-router-dom'; // For redirection after deletion
import { deleteWorkspace } from '../../API/workspace';

const DeleteWorkspace = ({ workspaceId }) => {
  const history = useHistory();

  const handleDelete = async () => {
    const response = await deleteWorkspace(workspaceId);

    if (response) {
      alert('Workspace deleted successfully!');
      history.push('/workspaces'); // Redirect to workspaces list
    } else {
      alert('Error deleting workspace');
    }
  };

  return <button onClick={handleDelete}>Delete Workspace</button>;
};

export default DeleteWorkspace;
