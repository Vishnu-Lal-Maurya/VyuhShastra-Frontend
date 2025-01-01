import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';
import { getDatagridDetails } from '../../API/workspace';

const Datagrid = () => {
  const { workspaceId, fileId } = useParams(); // Extract params from URL
  const [datagridDetails, setDatagridDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedColumn, setSelectedColumn] = useState(null); // Track the selected column
  const [columnStats, setColumnStats] = useState(null); // Track column stats

  useEffect(() => {
    const fetchDatagridDetails = async () => {
      try {
        const data = await getDatagridDetails(workspaceId, fileId);
        console.log('API Response:', data);
        setDatagridDetails(data);
        
        // Set initial selected column (first column)
        const initialColumn = data?.columns ? data.columns[0] : null;
        setSelectedColumn(initialColumn);

        // Set initial column stats for the first column
        const initialStats = data?.column_stats ? data.column_stats[initialColumn] : null;
        setColumnStats(initialStats);
        
        console.log("Initial selected column", initialColumn);
        console.log("Initial column stats", initialStats);
      } catch (error) {
        console.error('Error fetching datagrid details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDatagridDetails();
  }, [workspaceId, fileId]);

  const transformedColumns = Array.isArray(datagridDetails?.columns)
    ? datagridDetails.columns.map((col) => ({
        field: col,
        headerName: col,
        width: 150,
      }))
    : [];

  const transformedRows = Array.isArray(datagridDetails?.rows) && Array.isArray(datagridDetails?.columns)
    ? datagridDetails.rows.map((row, index) => {
        if (!Array.isArray(row)) {
          console.error(`Row at index ${index} is not an array:`, row);
          return { id: index }; // Fallback for invalid rows
        }
        return {
          id: index,
          ...Object.fromEntries(
            datagridDetails.columns.map((col, colIndex) => [
              col,
              row[colIndex] !== undefined && row[colIndex] !== null && !Number.isNaN(row[colIndex])
                ? row[colIndex]
                : null, // Replace invalid or missing values with null
            ])
          ),
        };
      })
    : [];

  const handleColumnClick = (params) => {
    const selectedField = params.field; // Extract the selected field
    setSelectedColumn(selectedField); // Update the selected column state
    const stats = datagridDetails?.column_stats?.[selectedField];
    console.log(selectedColumn);
    console.log(stats);
    setColumnStats(stats || null); // Update column stats or set null if not available
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'row', 
      alignItems: 'center',
      background: 'linear-gradient(135deg, rgba(178, 220, 215, 0.8) 0%, rgba(253, 253, 253, 0.8) 100%)', 
      height: '100vh',
      padding: '20px'
    }}>
      {/* Section to display selected column stats */}
      {selectedColumn && columnStats && (
        <Box 
          sx={{
            color:'rgba(68, 79, 87, 0.97)',
            height:'90%',
            margin: 4, 
            padding: 3, 
            borderRadius: '8px', 
            width: '35%',
            background: 'linear-gradient(135deg, rgba(176, 189, 222, 0.8) 0%, rgba(246, 246, 247, 0.8) 100%)',
            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)', // Added deeper shadow
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            fontFamily: 'Arial, sans-serif',
            fontSize: '16px',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)', // Slightly enlarge on hover
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)', // Stronger shadow on hover
            },
          }}
        >
          <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '15px' }}>
            Statistics : {selectedColumn}
          </h2>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li style={{ marginBottom: '8px' }}><strong>Minimum:</strong> {columnStats.min_value}</li>
            <li style={{ marginBottom: '8px' }}><strong>Maximum:</strong> {columnStats.max_value}</li>
            <li style={{ marginBottom: '8px' }}><strong>Sum:</strong> {columnStats.sum}</li>
            <li style={{ marginBottom: '8px' }}><strong>Mean:</strong> {columnStats.mean}</li>
            <li style={{ marginBottom: '8px' }}><strong>Standard Deviation:</strong> {columnStats.std}</li>
            <li style={{ marginBottom: '8px' }}><strong>Median:</strong> {columnStats.median}</li>
            <li style={{ marginBottom: '8px' }}><strong>Skewness:</strong> {columnStats.skew}</li>
            <li style={{ marginBottom: '8px' }}><strong>Kurtosis:</strong> {columnStats.kurtosis}</li>
            <li style={{ marginBottom: '8px' }}><strong>Count (Null Values):</strong> {columnStats.null_values}</li>
            <li style={{ marginBottom: '8px' }}><strong>Datatype:</strong> {columnStats.data_type}</li>
          </ul>
        </Box>
      )}

      <Box sx={{ height: 590, width: '60%', marginLeft: 5 }}>
        {loading ? (
          <p style={{ color: '#fff' }}>Loading...</p>
        ) : (
          <DataGrid
            rows={transformedRows || []}
            columns={transformedColumns || []}
            onColumnHeaderClick={handleColumnClick} // Listen for column header clicks
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5, 10, 20]}
            checkboxSelection
            disableRowSelectionOnClick
            sx={{
              '& .MuiDataGrid-columnSeparator': {
                borderRight: '3px solid rgb(15, 14, 15)', // Column separator
              },
              '& .MuiDataGrid-cell': {
                borderRight: '2px solid rgb(14, 14, 15)', // Cell border
                backgroundColor: 'rgb(240, 232, 232)', // Optional: Add a light background to the headers

              },
              '& .MuiDataGrid-cell:last-of-type': {
                borderRight: 'none', // Remove border for the last cell
              },
              '& .MuiDataGrid-row': {
                border: '1px solid rgb(17, 17, 17)', // Row border
              },
              '& .MuiDataGrid': {
                border: '1px solid rgb(17, 17, 17)', // DataGrid border
              },
              '& .MuiDataGrid-columnHeader': {
                fontSize: '16px', // Make column headers bold
                fontWeight: 'bold',
                backgroundColor: 'rgb(240, 232, 232)', // Optional: Add a light background to the headers

              },
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: 'rgb(206, 64, 64)', // Optional: Add a light background to the headers
              },
              boxShadow: 2,
              border: 2,
              borderColor: 'primary.black',
              '& .MuiDataGrid-cell:hover': {
                color: 'primary.main',
              },
            }}
          />
        )}
      </Box>
    </div>
  );
};

export default Datagrid;
