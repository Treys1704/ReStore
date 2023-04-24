import { Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, ListItemText, Typography } from "@mui/material";
import agent from "../../app/api/agent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {

    const [validationError, setValidationError] = useState<string[]>([]);
    function getValidationError (){
        agent.TestErrors.getValidationError().then(() => console.log("should not see this"))
        .catch(error => setValidationError(error));
    }

    const navigate = useNavigate();

    return (
        <Container>
            <Typography gutterBottom variant="h2">Errors for testing</Typography>
            <ButtonGroup fullWidth>
                <Button variant="contained" onClick={() => agent.TestErrors.get400Error().catch(error => console.log(error))}>Get 400 Error</Button>
                <Button variant="contained" onClick={() => agent.TestErrors.get401Error().catch(error => console.log(error))}>Get 401 Error</Button>
                <Button variant="contained" onClick={() => agent.TestErrors.get404Error().catch(error => console.log(error))}>Get 404 Error</Button>
                <Button variant="contained" onClick={() => {
                    agent.TestErrors.get500Error().catch(error => console.log(error))
                    navigate('/server-error')
                }}>Get 500 Error</Button>
                <Button variant="contained" onClick={getValidationError}>Get Validation Error</Button>
            </ButtonGroup>

            {validationError.length > 0 && 
                <Alert severity="error">
                    <AlertTitle>Validation error</AlertTitle>
                    <List>
                        {validationError.map(error => (
                            <ListItem key={error}>
                                <ListItemText>{error}</ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Alert>
            }
        </Container>
    )
}