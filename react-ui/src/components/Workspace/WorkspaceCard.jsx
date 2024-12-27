import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import axiosInstance from "../../API/axiosInstance";

const WorkspaceCard = ({ workspace, onDelete }) => {
  const { id, name, description, created_on, image_file_path } = workspace;
  const [imageUrl, setImageUrl] = useState(null);

  // Fetch the image from the backend
  useEffect(() => {
    if (image_file_path) {
      axiosInstance
        .get(`/${image_file_path}`, { responseType: 'blob' })
        .then((response) => {
          const imageUrl = URL.createObjectURL(response.data);
          setImageUrl(imageUrl);
        })
        .catch((error) => {
          console.error("Error fetching image:", error);
          setImageUrl("https://via.placeholder.com/360x180"); // Fallback to placeholder if error occurs
        });
    } else {
      setImageUrl("https://via.placeholder.com/360x180"); // Fallback if no image is provided
    }
  }, [image_file_path]);






  return (
    <Card
      sx={{
        Width: 500,
        Height: 400,
        borderRadius: "0px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(192, 17, 169, 0.1)",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.1)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
        },
      }}
    >
      <Link to={`/workspace/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <CardMedia
          component="img"
          height="180" // Fixed height for the image
          image={imageUrl || "https://via.placeholder.com/360x180"} // Use fetched image URL or placeholder
          alt={name}
          sx={{ objectFit: "cover", height: 180 }}
        />
      </Link>
      <CardContent sx={{ padding: "16px 20px 5px", height: "calc(100% - 180px)", display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography
            variant="h6"
            component="h2"
            sx={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              marginBottom: "8px",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </Typography>
          <IconButton
            aria-label="delete"
            color="gray"
            onClick={() => onDelete(id)}
            sx={{ marginLeft: "auto", alignSelf: "flex-end" }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            marginBottom: "12px",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
         <span style={{color:"gray", fontSize:"15px"}}>Description</span> {description}
        </Typography>

        <Box
          sx={{
            fontSize: "0.875rem",
            color: "text.disabled",
            textAlign: "right",
            fontStyle: "italic",
            marginTop: "auto", // Pushes the date to the bottom
          }}
        >
          Created on: {new Date(created_on).toLocaleDateString()}
        </Box>
      </CardContent>
    </Card>
  );
};

export default WorkspaceCard;
