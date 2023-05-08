import { Box} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const Cards = ({ selected, path, sub, id }) => {
    return (
        <Box
            sx={{
                position: "relative",
                marginBottom: { xs: 2,  md: 0  },
                marginRight: { xs: 2,  md: 2  },
                cursor: "pointer",
   
            }}
        >
            {selected && (
                <Box
                    sx={{
                        position: "absolute",
                        top: -5,
                        right: -1,
                        borderRadius: "50%",
                    }}
                >
                    <CheckCircle
                        sx={{ color: "#658af8", backgroundColor: "white", borderRadius: "30px", fontSize: 17 }}
                    />
                </Box>
            )}
            <Box
                sx={{
                    height: id===1? "131px":"auto",
                    borderRadius: '10px',
                    border: selected ? "4px solid #658af8" : "none",
                }}
            >
                <img src={path} alt="" style={{ borderRadius: "10px" }}/>
            </Box>
            <Box display="flex"
                sx={{
                    fontWeight: 400, fontSize:"14px",
                }}>{sub}
            </Box>
        </Box>
    );
};

export default Cards;