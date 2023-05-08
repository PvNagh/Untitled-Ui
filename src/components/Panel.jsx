import {
    Search, EmojiFlagsOutlined, AccountCircle,
    FiberManualRecord, LockOutlined, AutoAwesome,
    CreditCardOutlined, PeopleAltOutlined, AppRegistrationOutlined,
    ViewInArOutlined
} from '@mui/icons-material';
import { Box, Button, styled, Input, Typography } from '@mui/material';

const StyledButton = styled(Button)({
    color: 'black',
    backgroundColor: 'white',
    padding: "8px",
    fontSize: 17,
    fontWeight: "20%",
    textTransform: 'none',
    justifyContent: 'flex-start',
    '&:hover': {
        color: '#658af8',
        backgroundColor: '#e9ecef'
    },
});

const Panel = () => {
    return (
        <Box
            margin="2rem 1rem 0rem 1rem"
        >
            <Box display="flex" alignItems="center">
                <FiberManualRecord style={{ padding: "8px", fontSize: "15px" }} />
                <Box sx={{ fontWeight: 500, fontSize: 20 }}>Untitled UI</Box>
            </Box>
            <Box sx={{ margin: "8px" }}>
                <Box display="flex" sx={{ fontWeight: 500, fontSize: 19 }}>
                    Settings
                </Box>
                <Box
                    border={{ border: "1.6px solid #e9ecef" }}
                    borderRadius='7px'
                    display="flex"
                    mt="0.5rem"
                >
                    <Search
                        sx={{ margin: "5px", fontSize: 31 }}
                    />
                    <Input
                        sx={{ fontSize: 15 }}
                        type="text"
                        placeholder="Search"
                        disableUnderline={true}
                    />
                </Box>
                <Box
                    display="flex"
                    mt="1rem"
                    flexDirection="column">
                    <StyledButton fullWidth>
                        <EmojiFlagsOutlined sx={{ fontSize: 26 }} />
                        <Typography paddingLeft="1rem">My details</Typography>
                    </StyledButton>
                    <StyledButton fullWidth>
                        <AccountCircle sx={{ fontSize: 26 }} />
                        <Typography paddingLeft="1rem">Profile</Typography>
                    </StyledButton>
                    <StyledButton fullWidth>
                        <LockOutlined sx={{ fontSize: 26 }} />
                        <Typography paddingLeft="1rem">Password</Typography>
                    </StyledButton>
                    <StyledButton fullWidth>
                        <AutoAwesome sx={{ fontSize: 26 }} />
                        <Typography paddingLeft="1rem">Appearance</Typography>
                    </StyledButton>
                    <StyledButton fullWidth>
                        <PeopleAltOutlined sx={{ fontSize: 25 }} />
                        <Typography paddingLeft="1rem">Team</Typography>
                    </StyledButton>
                    <StyledButton fullWidth>
                        <CreditCardOutlined sx={{ fontSize: 25 }} />
                        <Typography paddingLeft="1rem">Billing</Typography>
                        <Box backgroundColor="#e9ecef" borderRadius="8px" marginLeft="6rem" padding="0px 7px"><Typography variant='p' fontSize="14px">12</Typography> </Box>
                    </StyledButton>
                    <StyledButton fullWidth>
                        <AppRegistrationOutlined sx={{ fontSize: 26 }} />
                        <Typography paddingLeft="1rem">Applications</Typography>
                    </StyledButton>
                    <StyledButton fullWidth>
                        <ViewInArOutlined sx={{ fontSize: 26 }} />
                        <Typography paddingLeft="1rem">API</Typography>
                    </StyledButton>
                </Box>
            </Box>
        </Box>
    )
}
export default Panel;