import Sidebar from "./Sidebar";
import Panel from "./Panel";
import { Box, IconButton, styled, useMediaQuery } from "@mui/material";
import SettingsPanel from "./SettingsPanel";
import { useTheme } from '@mui/material/styles';
import { FiberManualRecord, Menu } from "@mui/icons-material";

const GradBox = styled(Box)(() => ({
  backgroundImage: `linear-gradient(to right, white, 50%, #D14D72)`,
}));

const HomePage = () => {
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up('md'));
  
  const sidebarWidth = "70px";
  const panelWidth = "280px";
  const settingsWidth = "calc(100% - 350px)";

  return (
    <Box display="flex">
      {isBigScreen && (
        <Box width={sidebarWidth}>
          <Sidebar />
        </Box>
      )}

      {isBigScreen && (
        <Box width={panelWidth}>
          <Panel />
        </Box>
      )}
      <Box width={isBigScreen ? settingsWidth : "100%"}>
        <GradBox bgcolor="red" height="1.70vh" />
        {!isBigScreen &&
          <Box 
          display="flex" 
          justifyContent="space-between"
          padding="10px 10px"
          >
            <Box display="flex" alignItems="center">
              <FiberManualRecord style={{ padding: "8px", fontSize: "15px" }} />
              <Box sx={{ fontWeight: 500, fontSize: 20 }}>Untitled UI</Box>
            </Box>
            <Box>
            <IconButton><Menu sx={{color:"black", fontSize:30}}/> </IconButton>
            </Box>
          </Box>
        }
        <Box>
          <SettingsPanel />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
