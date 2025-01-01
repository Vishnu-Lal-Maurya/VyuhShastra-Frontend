import React, { useEffect, useState } from 'react';
import { deleteWorkspace, getAllWorkspace } from '../../API/workspace';
import WorkspaceCard from './WorkspaceCard';
import './AllWorkspace.css';
import CreateWorkspace from './CreateWorkspace';
import { ToastContainer, toast } from 'react-toastify';

const AllWorkspace = () => {
  const [workspaces, setWorkspaces] = useState([]);
  const [reload, setReload] = useState(false);

  // Fetch workspaces whenever `reload` changes
  useEffect(() => {
    const fetchWorkspaces = async () => {
      try {
        const data = await getAllWorkspace();
        setWorkspaces(data || []); // Ensure it's always an array
      } catch (error) {
        console.error("Error fetching workspaces:", error);
        toast.error("Failed to fetch workspaces!");
      }
    };

    fetchWorkspaces();
  }, [reload]); // Add `reload` as a dependency

  // Function to trigger reload
  const reloadParent = () => {
    setReload((prevReload) => !prevReload); // Toggle reload state
  };


  const onDelete = async (id) => {
    const workspaceToDelete = workspaces.find((w) => w.id === id);
    const success = await deleteWorkspace(id);
    if(success){
      // setWorkspaces(prevWorkspaces => {
      //   prevWorkspaces.filter((workspace) => workspace.id !== id)
        toast.success(`Workspace "${workspaceToDelete.name}" has been deleted successfully.`);
        reloadParent()
      
    } else{
      toast.error(`Failed to delete workspace "${workspaceToDelete.name}".`);
      reloadParent()

    }

  }



  return (
    <div className="workspace-container">
      <ToastContainer /> {/* Add ToastContainer for toast messages */}
      <div className="workspace-header">
        <h1>All Workspaces</h1>
      </div>

      <div className="workspace-grid">
        {Array.isArray(workspaces) && workspaces.length > 0 ? (
          workspaces.map((workspace) => (
            <WorkspaceCard key={workspace.id} workspace={workspace} onDelete={onDelete}/>
          ))
        ) : (
          <div className="no-workspaces">
            <p>No workspaces available. Create your first workspace!</p>
          </div>
        )}
      </div>
      <CreateWorkspace reloadParent={reloadParent} />
    </div>
  );
};

export default AllWorkspace;
