import { Box } from "@mui/material";
import HeadText from "./components/BareComponets/HeadText";
import Paragraph from "./components/BareComponets/Paragraph";


function App() {
  return (
    <Box sx={{flexGrow: 1}}>
      <HeadText>Featured Product</HeadText>
      <Paragraph>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</Paragraph>
    </Box>
  );
}

export default App;
