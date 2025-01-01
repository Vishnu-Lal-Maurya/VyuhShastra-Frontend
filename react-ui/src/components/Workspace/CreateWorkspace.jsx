import React, { useState } from 'react';
import { createWorkspace } from '../../API/workspace';
import './CreateWorkspace.scss';
import { ToastContainer, toast } from 'react-toastify';
import axiosInstance from '../../API/axiosInstance';


const CreateWorkspace = ({ reloadParent }) => {



  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
    datafile: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    const workspaceData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      workspaceData.append(key, value);
    });
  
    console.log('FormData Contents:');
    for (const [key, value] of workspaceData.entries()) {
      console.log(`${key}:`, value);
    }
  
    const response = await createWorkspace(workspaceData);
  
    if (response) {
      // Reset form fields
      setFormData({
        title: '',
        description: '',
        image: null,
        datafile: null,
      });
  
      toggleForm(); // Close the form
      toast.success('Workspace created successfully!');
      reloadParent(); // Update the parent UI, ensure this doesn't trigger a page reload
    } else {
      toast.error('Error creating workspace!');
    }
  };
  

  return (

    <div className="create-workspace-wrapper">

      {!isFormVisible?
         <button className="create-workspace-toggle-btn" onClick={toggleForm}>

         Add Workspace
         </button> :
         null
      }
      <div
        className={`create-workspace-container ${
          isFormVisible ? 'visible' : ''
        }`}
      >
        <button className="create-workspace-close-btn" onClick={toggleForm}>
          ✖
        </button>
        <h1 className="create-workspace-title">Add Workspace</h1>
        <form className="create-workspace-form" onSubmit={handleSubmit}>
          <div className="create-workspace-input-group">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
            <label>Workspace Title</label>
          </div>
          <div className="create-workspace-input-group">
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
            <label>Description</label>
          </div>
          <div className="create-workspace-input-group">
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              accept="image/*"
            />
            <label>Image</label>
          </div>
          <div className="create-workspace-input-group">
            <input
              type="file"
              name="datafile"
              onChange={handleFileChange}
              accept=".csv,.xls,.xlsx"
            />
            <label>Data File</label>
          </div>
          <button type="submit" className="create-workspace-btn">
            Create Workspace
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateWorkspace;
