import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";

interface Props {
    message?: string;
}

export default function LoadingComponent ({message = 'Loading Component...'}: Props) {
    return (
        <Backdrop open={true} invisible={true}>
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress size={100} color="secondary" />
                <Typography variant="h4" sx={{justifyContent: 'center', paddingTop: '70%'}}>{message}</Typography>
            </Box>

        </Backdrop>
    )
}