import { ExpandMore, FiberManualRecord, MoreVert } from "@mui/icons-material";
import { Box, Divider, IconButton, useMediaQuery, styled, FormControlLabel, Select, FormControl, MenuItem, Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useState } from "react";
import SwitchButton from "./SwitchButton";
import Cards from "./Cards";
import path1 from "../images/1.jpg";
import path2 from "../images/2.webp";
import path3 from "../images/3.webp";
import path4 from "../images/4.webp";
import path5 from "../images/5.webp";

const TextBox = styled(Box)`
    display: flex;
    flex-direction: column;
    text-align: left;
    min-width: 300px
`;

const SettingsPanel = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    const [value, setValue] = useState("1");

    const handleMenuChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Box
            border={{ border: "3px solid #e9ecef", borderBottom: "none" }}
            borderRadius="60px 0px 0px 0px"
            padding="22px 15px 0px 15px">
            <Box display="flex" alignItems="center" >
                <FiberManualRecord style={{ padding: "8px", fontSize: "14px" }} />
                <Box sx={{ fontWeight: 550, fontSize: isSmallScreen ? "20px" : "24px" }}>
                    Settings
                </Box>
            </Box>
            <Box display="flex" margin="20px 13px" justifyContent="space-between">
                <Box >
                    <Box
                        display="flex"
                        sx={{
                            padding: "2.5px 0px", fontWeight: 500,
                            fontSize: isSmallScreen ? "16px" : "18px"
                        }}>Appearance</Box>
                    <Box
                        sx={{
                            fontWeight: 400, fontSize: isSmallScreen ? "12px" : "14.7px",
                            color: "#6B7280"
                        }}>Change how Untitled UI looks and feels in your browser.</Box>
                </Box>
                <IconButton><MoreVert sx={{ fontSize: 18 }} /></IconButton>
            </Box>   <Divider sx={{ borderColor: "#e9ecef", margin: !isSmallScreen ? "18px 12px" : "0px 12px", borderWidth: "1px" }} />
            <Box display="flex" flexDirection={isSmallScreen ? "column" : "row"} margin={!isSmallScreen ? "16px 13px" : "10px 13px"}>
                <TextBox>
                    <Box
                        sx={{
                            padding: "2.5px 0px", fontWeight: 500,
                            fontSize: isSmallScreen ? "13px" : "14px"
                        }}>Interface Theme
                    </Box>
                    <Box
                        sx={{
                            fontWeight: 400, fontSize: isSmallScreen ? "13px" : "14px",
                            color: "#6B7280",
                            marginBottom: isSmallScreen && "10px"
                        }}>Select or customize your UI theme</Box>
                </TextBox>
                <Box display="flex" flexWrap="wrap">
                    <Cards id={1} selected={true} sub="System preference" path={path1} />
                    <Cards id={2} selected={false} sub="Light" path={path2} />
                    <Cards id={3} selected={false} sub="Dark" path={path3} />
                </Box>
            </Box>
            <Divider sx={{ borderColor: "#e9ecef", margin: !isSmallScreen ? "18px 12px" : "0px 12px", borderWidth: "1px" }} />
            <Box display="flex" margin={!isSmallScreen ? "16px 13px" : "10px 13px"} >
                <TextBox>
                    <Box
                        display="flex"
                        sx={{
                            padding: "2.5px 0px", fontWeight: 500,
                            fontSize: isSmallScreen ? "13px" : "14px"
                        }}>Transparent sidebar</Box>
                    <Box
                        sx={{
                            fontWeight: 400, fontSize: isSmallScreen ? "13px" : "14px",
                            color: "#6B7280"
                        }}>Make the desktop sidebar transparent.</Box>
                </TextBox>
                <FormControlLabel
                    control={<SwitchButton />}
                />
            </Box>
            <Divider sx={{ borderColor: "#e9ecef", margin: !isSmallScreen ? "18px 12px" : "0px 12px", borderWidth: "1px" }} />
            <Box display="flex" margin={!isSmallScreen ? "16px 13px" : "10px 13px"} flexDirection={isSmallScreen ? "column" : "row"}>
                <TextBox>
                    <Box
                        display="flex"
                        sx={{
                            padding: "2.5px 0px", fontWeight: 500,
                            fontSize: isSmallScreen ? "13px" : "14px"
                        }}>Sidebar feature</Box>
                    <Box
                        sx={{
                            fontWeight: 400, fontSize: isSmallScreen ? "13px" : "14px",
                            color: "#6B7280"
                        }}>What shows in the desktop sidebar</Box>
                </TextBox>
                <FormControl sx={{ width: isSmallScreen && 20, minWidth: 240, textAlign: "start", mt: isSmallScreen && 2 }} >
                    <Select
                        value={value}
                        onChange={handleMenuChange}
                        inputProps={{ 'aria-label': 'Without label' }}
                        size="small"
                        sx={{
                            borderRadius: '8px', fontSize: '13px',
                            fontWeight: 300, padding: isSmallScreen ? "1px 0px" : "4px 0px",
                        }}
                        IconComponent={ExpandMore}
                    >
                        <MenuItem value={1} sx={{ fontSize: '13px', fontWeight: 300 }}>Recent Changes</MenuItem>
                        <MenuItem value={2} sx={{ fontSize: '13px', fontWeight: 300 }}>Changes 1</MenuItem>
                        <MenuItem value={3} sx={{ fontSize: '13px', fontWeight: 300 }}>Changes 2</MenuItem>
                        <MenuItem value={4} sx={{ fontSize: '13px', fontWeight: 300 }}>Changes 3</MenuItem>
                        <MenuItem value={5} sx={{ fontSize: '13px', fontWeight: 300 }}>Changes 4</MenuItem>
                    </Select>
                </FormControl>
            </Box>   <Divider sx={{ borderColor: "#e9ecef", margin: !isSmallScreen ? "18px 12px" : "0px 12px", borderWidth: "1px" }} />
            <Box display="flex" margin={!isSmallScreen ? "16px 13px" : "10px 13px"} flexDirection={isSmallScreen ? "column" : "row"}>
                <TextBox>
                    <Box
                        display="flex"
                        sx={{
                            padding: "2.5px 0px", fontWeight: 500,
                            fontSize: isSmallScreen ? "13px" : "14px"
                        }}>Tables view</Box>
                    <Box
                        sx={{
                            fontWeight: 400, fontSize: isSmallScreen ? "13px" : "14px",
                            color: "#6B7280",
                            marginBottom: isSmallScreen && "10px"
                        }}>How are tables displayed in the app.</Box>
                </TextBox>
                <Box display="flex" flexWrap="wrap">
                    <Cards selected={true} sub="Default" path={path4} />
                    <Cards selected={false} sub="Compact" path={path5} />
                </Box>
            </Box>
            <Divider sx={{ borderColor: "#e9ecef", margin: !isSmallScreen ? "12px 12px" : "11px 12px", borderWidth: "1px" }} />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: isSmallScreen && 2 }}>
                <Button
                    variant="outlined"
                    sx={{
                        marginRight: 2,
                        borderRadius: 2,
                        borderColor: '#d8d8d8',
                        borderWidth: '1px',
                        textTransform: 'none',
                        color: 'black',
                        '&:hover': {
                            backgroundColor: '#e9ecef',
                            color: '#1d4ed8',
                            borderColor: '#e9ecef'
                        },
                    }}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        marginRight: 2,
                        borderRadius: 2,
                        backgroundColor: '#1d4ed8',
                        textTransform: 'none',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#1E3A8A',
                        },
                    }}
                >
                    Save Changes
                </Button>
            </Box>
        </Box>
    );
};

export default SettingsPanel;