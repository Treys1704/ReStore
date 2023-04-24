import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound () {
    return (
        <Container component={Paper} sx={{height: 300}}>
            <Typography variant="h4" sx={{textAlign: 'center'}}>
                We couldn't found any component in this link
            </Typography>
            <Divider/>
            <Button fullWidth component={Link} to='/catalog'>Go to Shop</Button>
        </Container>
    )
}