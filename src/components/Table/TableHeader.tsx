import { Box, Grid, GridProps, SxProps } from '@mui/material';
import React, { ReactNode } from 'react';

export default function TableHeader(props: GridProps) {
    return (
        <Box sx={{ borderRadius: '12px 12px 0px 0px', bgcolor: 'background.secondary', px: { xs: 1, xsm: 2, sm: 3 }, position: 'sticky', top: 0 }}>
            <Grid {...props} container sx={{ height: '56px', placeItems: 'center', ...props.sx }}>
                {props.children}
            </Grid>
        </Box>
    );
}
