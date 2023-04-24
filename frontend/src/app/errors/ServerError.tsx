import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import agent from "../api/agent";
import { useNavigate } from "react-router-dom";

export default function ServerError() {

    const [error, setError] = useState<any>();
    const navigate = useNavigate();

    useEffect(() => {
        agent.TestErrors.get500Error().catch(err => setError(err));
    }, [])

    return (
        <Container component={Paper}>
            {error ? (
                <>
                    <Typography variant="h5" color='error' gutterBottom>{error.data.title}</Typography>
                    <Divider/>
                    <Typography>{error.data.detail || 'Internal server error'}</Typography>
                </>
            ) : (
                <>
                    <Typography variant="h5" gutterBottom>Server Error component</Typography>
                </>
            )}
            <Button onClick={() => navigate('/catalog')}>Go to catalog</Button>
        </Container>

    )
}