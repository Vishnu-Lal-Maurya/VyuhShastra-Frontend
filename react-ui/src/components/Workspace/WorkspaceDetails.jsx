import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // For route params and Link component
import { getWorkspaceDetails } from '../../API/workspace';

const WorkspaceDetails = () => {
  const { workspaceId } = useParams(); // Extract workspaceId from URL
  const [workspaceDetails, setWorkspaceDetails] = useState(null);

  useEffect(() => {
    const fetchWorkspaceDetails = async () => {
      const data = await getWorkspaceDetails(workspaceId);
      setWorkspaceDetails(data);
    };

    fetchWorkspaceDetails();
  }, [workspaceId]);

  if (!workspaceDetails) return <p>Loading workspace details...</p>;

  const { workspace, files, reports, dashboards, charts } = workspaceDetails;

  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* Main Content */}
      <main className="flex-grow p-8">
        <div className="bg-white rounded shadow-md p-8">
          <div className="flex flex-row justify-between mb-8">
            <h2 className="text-3xl font-semibold text-purple-800">Workspace Details</h2>
            {/* Add delete workspace functionality here */}
            <form method="post" action={`delete_workspace/${workspace.id}`}>
              <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">
                Delete
              </button>
            </form>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-700">{workspace.name}</h3>
            <p className="text-gray-600">Created on: {new Date(workspace.created_on).toLocaleDateString()}</p>
          </div>

          {/* Files Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-700 mb-4">Uploaded Files</h3>
            <table className="min-w-full bg-white border border-gray-200 rounded">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="py-3 px-4 text-left text-gray-600 font-medium">File Name</th>
                  <th className="py-3 px-4 text-left text-gray-600 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {files.map((file) => (
                  <tr key={file.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{file.filename}</td>
                    <td className="py-3 px-4">
                      <Link to={`/workspace/${workspace.id}/file/${file.id}/datagrid`}>
                        <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500">
                          View
                        </button>
                      </Link>
                      <form method="POST" action={`delete_file/${file.id}`} style={{ display: 'inline' }}>
                        <button type="submit" className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500">
                          Delete
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Dashboards Section */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Dashboards</h3>
            <table className="min-w-full bg-white border border-gray-200 rounded">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="py-3 px-4 text-left text-gray-600 font-medium">Title</th>
                  <th className="py-3 px-4 text-left text-gray-600 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {dashboards.map((dashboard) => (
                  <tr key={dashboard.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{dashboard.name}</td>
                    <td className="py-3 px-4">
                      <Link to={`/view_dashboard/${dashboard.id}`}>
                        <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500">
                          View
                        </button>
                      </Link>
                      <form method="POST" action={`delete_dashboard/${dashboard.id}`} style={{ display: 'inline' }}>
                        <button type="submit" className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500">
                          Delete
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4">
              <Link to={`/dashboard/create`} className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-700">
                New Dashboard
              </Link>
            </div>
          </div>

          {/* Reports Section */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Reports</h3>
            <table className="min-w-full bg-white border border-gray-200 rounded">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="py-3 px-4 text-left text-gray-600 font-medium">Title</th>
                  <th className="py-3 px-4 text-left text-gray-600 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{report.name}</td>
                    <td className="py-3 px-4">
                      <Link to={`/view_report/${report.id}`} target="_blank">
                        <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500">
                          View
                        </button>
                      </Link>
                      <form method="POST" action={`delete_report/${report.id}`} style={{ display: 'inline' }}>
                        <button type="submit" className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500">
                          Delete
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4">
              <Link to={`/report/create`} className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-700">
                New Report
              </Link>
            </div>
          </div>

          {/* Charts Section */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Charts</h3>
            <table className="min-w-full bg-white border border-gray-200 rounded">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="py-3 px-4 text-left text-gray-600 font-medium">Title</th>
                  <th className="py-3 px-4 text-left text-gray-600 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {charts.map((chart) => (
                  <tr key={chart.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{chart.name}</td>
                    <td className="py-3 px-4">
                      <Link to={`/view_chart/${chart.id}`} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500">
                        View
                      </Link>
                      <form method="POST" action={`delete_chart/${chart.id}`} style={{ display: 'inline' }}>
                        <button type="submit" className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500">
                          Delete
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4">
              <Link to={`/chart/create`} className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-700">
                New Chart
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WorkspaceDetails;
