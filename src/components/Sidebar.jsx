import {
    AddBoxOutlined, OtherHousesOutlined, NearMeOutlined,
    LayersOutlined, LibraryAddCheckOutlined,
    EqualizerOutlined, PeopleAltOutlined, SettingsOutlined,
    AccountCircle, FiberManualRecord
} from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

const Sidebar = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
            padding="0.5rem 2rem 1.5rem 2rem"
            borderRight={{ border: "3px solid #e9ecef" }}
        >
            <Box mb="2.3rem">
                <IconButton sx={{ mb: "0.2rem", }}><AddBoxOutlined sx={{ fontSize: 30, color: "black", "&:hover": { color: "#658af8" } }} /></IconButton>
                <IconButton sx={{ mb: "0.2rem" }}><OtherHousesOutlined sx={{ color: "black", "&:hover": { color: "#658af8" } }} /></IconButton>
                <IconButton sx={{ mb: "0.2rem" }}><NearMeOutlined sx={{ color: "black", "&:hover": { color: "#658af8" } }} /></IconButton>
                <IconButton sx={{ mb: "0.2rem" }}><LayersOutlined sx={{ color: "black", "&:hover": { color: "#658af8" } }} /></IconButton>
                <IconButton sx={{ mb: "0.2rem" }}><LibraryAddCheckOutlined sx={{ color: "black", "&:hover": { color: "#658af8" } }} /></IconButton>
                <IconButton sx={{ mb: "0.2rem" }}><EqualizerOutlined sx={{ color: "black", "&:hover": { color: "#658af8" } }} /></IconButton>
                <IconButton sx={{ mb: "0.2rem" }}><PeopleAltOutlined sx={{ fontSize: 21, color: "black", "&:hover": { color: "#658af8" } }} /></IconButton>
                <IconButton sx={{ mb: "0.2rem" }}><SettingsOutlined sx={{ color: "black", "&:hover": { color: "#658af8" } }} /></IconButton>
            </Box>
            <Box sx={{ mb: "3.2rem" }}>
                <IconButton sx={{ mb: "0.6rem" }}><AddBoxOutlined sx={{ fontSize: 30, color: "black", "&:hover": { color: "#658af8" } }} /></IconButton>
                <IconButton sx={{ mb: "0.6rem" }}><FiberManualRecord sx={{ fontSize: 10, color: "purple" }} /></IconButton>
                <IconButton sx={{ mb: "0.6rem" }}><FiberManualRecord sx={{ fontSize: 10, color: "blue" }} /></IconButton>
                <IconButton sx={{ mb: "0.6rem" }}><FiberManualRecord sx={{ fontSize: 10, color: "green" }} /></IconButton>
                <IconButton sx={{ mb: "0.6rem" }}><FiberManualRecord sx={{ fontSize: 10, color: "magenta" }} /></IconButton>
                <IconButton ><FiberManualRecord sx={{ fontSize: 11, color: "black" }} /></IconButton>
            </Box>
            <IconButton><AccountCircle sx={{ fontSize: 30, color: "black" }} /></IconButton>
        </Box>
    )
}
export default Sidebar;