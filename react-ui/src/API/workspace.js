import axiosInstance from './axiosInstance'; // Assuming axiosInstance is set up with base URL and token handling

// Get all workspaces
export const getAllWorkspace = async () => {
  try {
    const response = await axiosInstance.get('/workspace/all');
    return response.data.workspaces; // Returns the list of workspaces
  } catch (error) {
    console.error("Error fetching workspaces:", error);
    return [];
  }
};

// Get workspace details
export const getWorkspaceDetails = async (workspaceId) => {
  try {
    const response = await axiosInstance.get(`/workspace/${workspaceId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching workspace details:", error);
    return null;
  }
};

// Create a new workspace
export const createWorkspace = async (workspaceData) => {
  try {
    const response = await axiosInstance.post('/workspace/add_workspace', workspaceData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data; // Ensure you're returning the correct data
  } catch (error) {
    console.error('Error in createWorkspace:', error.response?.data || error.message);
    return null; // Return null if the request fails
  }
};


// Delete a workspace
export const deleteWorkspace = async (workspaceId) => {
  try {
    const response = await axiosInstance.delete(`/workspace/delete/${workspaceId}`);
    return response.data; // Returns success message
  } catch (error) {
    console.error("Error deleting workspace:", error);
    return null;
  }
};


// Get all workspaces
export const getIsWorking = async () => {
  try {
    const response = await axiosInstance.get('/workspace/dummy');
    return response.data; // Returns the list of workspaces
  } catch (error) {
    console.error("Error fetching workspaces:", error);
    return [];
  }
};


export const getImage = async (image) => {
  try {
    const response = await axiosInstance.get(`/uploads/${image}`);
    return response.data;  // Assuming the backend sends the image data
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;  // Return null if there's an error
  }
}


export const getDatagridDetails = async (workspaceId,fileId) => {
  try{
    const respons = await axiosInstance.get(`/workspace/${workspaceId}/file/${fileId}/datagrid`)
  }catch(error){
    console.log("Error fetching datagridDetails",error);
    return null;
  }
}