import { ShoppingCart } from "@mui/icons-material";
import { Badge, Box, IconButton, List, ListItem, Switch } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

interface Props {
    darkMode: boolean;
    themeChange: () => void;
}

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' }
];

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' }
];

const navStyles = {
    typography: 'h6',
    color: 'inherit',
    '&:hover': {
        color: 'secondary.main'
    },
    '&.active': {
        color: 'grey.400'
    }
}

export default function Header({ darkMode, themeChange }: Props) {
    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Container>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h6" component={NavLink} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>RE-STORE</Typography>

                        <Switch
                            checked={darkMode}
                            onChange={themeChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </Box>

                    <List sx={{ display: 'flex' }}>
                        {midLinks.map(({ title, path }) => (
                            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>

                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <IconButton size="large" sx={{ color: 'inherit' }}>
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>

                        <List sx={{ display: 'flex' }}>
                            {rightLinks.map(({ title, path }) => (
                                <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                                    {title.toUpperCase()}
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}