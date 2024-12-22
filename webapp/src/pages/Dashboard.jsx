import React from 'react';
import { Box, Card, CardContent, Typography, IconButton, Grid2 as Grid } from '@mui/material';
import { FileCopy } from '@mui/icons-material';
import Chart from "react-apexcharts";
import DashboardPage from './pages/Dashboard';

function DashboardPage() {
    const chartOptions = {
        options: { /* ... */ },
        series: [{ name: 'Uploaded Files', data: [10, 20, 15, 30] }],
    };

    return (
        <Box>
            <Typography>Welcome to the Dashboard</Typography>
            <Grid container spacing={3}>
                <Grid item>
                    <Card>
                        <IconButton><FileCopy /></IconButton>
                        <CardContent>
                            <Typography>Files Processed</Typography>
                            <Typography>150</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/* More cards */}
            </Grid>
            <Chart options={chartOptions.options} series={chartOptions.series} type="bar" />
        </Box>
    );
}

export default DashboardPage;