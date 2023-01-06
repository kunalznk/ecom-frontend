import { Box } from "@mui/material";
import { ColumnContainer, ColumnItem } from "./components/BareComponets/Column";
import HeadText from "./components/BareComponets/HeadText";
import { RowItem } from "./components/BareComponets/Row";
import Paragraph from './components/BareComponets/Paragraph';

function App() {
  return (
    <Box sx={{flexGrow: 1}}>
      <ColumnContainer minHeight="100vh" justifyContent="space-between">
          <ColumnItem>
              <HeadText>Header</HeadText>
          </ColumnItem>
          <RowItem  justifyContent="center" alignItems="center" container sx={{flexGrow: 1}}>
              <HeadText>Main</HeadText>
            </RowItem>
            <RowItem  justifyContent="center" alignItems="center" container sx={{flexGrow: 1}}>
              <Paragraph>kcnksdvjks</Paragraph>
            </RowItem>
          <ColumnItem>
              <HeadText>Footer</HeadText>
          </ColumnItem>
      </ColumnContainer>
    </Box>
  );
}

export default App;
