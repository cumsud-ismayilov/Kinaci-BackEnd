import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);






function Dashboard() {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [1200, 1900, 3000, 5000, 2300, 3400],
        fill: false,
        borderColor: "#3f51b5",
        tension: 0.1,
      },
    ],
  };



  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom   sx={{ color: "#ffffff" }}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Users Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2, display: "flex", alignItems: "center" }}>
            <PeopleIcon sx={{ fontSize: 40, mr: 2, color: "primary.main" }} />
            <Box>
              <Typography variant="h6">Users</Typography>
              <Typography variant="subtitle1">1,024</Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Orders Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2, display: "flex", alignItems: "center" }}>
            <ShoppingCartIcon sx={{ fontSize: 40, mr: 2, color: "secondary.main" }} />
            <Box>
              <Typography variant="h6">Orders</Typography>
              <Typography variant="subtitle1">512</Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Revenue Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2, display: "flex", alignItems: "center" }}>
            <BarChartIcon sx={{ fontSize: 40, mr: 2, color: "success.main" }} />
            <Box>
              <Typography variant="h6">Revenue</Typography>
              <Typography variant="subtitle1">$12,345</Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Revenue Chart */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Revenue Trend
            </Typography>
            <Line data={chartData} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard
