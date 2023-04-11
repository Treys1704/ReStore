import { Switch } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

interface Props {
    darkMode: boolean;
    themeChange: () => void;
}

export default function Header({ darkMode, themeChange }: Props) {
    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Container>
                <Toolbar>
                    <Typography variant="h5" sx={{ flexGrow: 50 }}>RE-STORE</Typography>

                    <Typography variant="h6" sx={{ flexGrow: 1 }}>Theme</Typography>
                    <Switch
                        checked={darkMode}
                        onChange={themeChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    )
}