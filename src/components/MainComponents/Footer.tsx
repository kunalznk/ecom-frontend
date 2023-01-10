import { Stack } from "@mui/system";
import { ColumnContainer, ColumnItem } from "../BareComponets/Column";
import HeaderText from "../BareComponets/HeadText";
import { RowContainer, RowItem } from "../BareComponets/Row"
import SubHead from '../BareComponets/SubHead';
import SubText from '../BareComponets/SubText';

import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import Paragraph from '../BareComponets/Paragraph';
const Footer = () => {

    const headTextStyle = {fontSize: "24px", lineHeight: "32px" , fontWeight: "700" ,marginBottom: "10px"};
    const subTextStyle = {fontSize: "14px", lineHeight: "20px" , fontWeight: "400", color: "#737373;"};
    const iconStyle = {height: "30px", width: "30px", borderRadius: '20px', color: "#23A6F0"};
    const paragraphStyle = {fontSize: "14px", lineHeight: "20px" , fontWeight: "700", color: "#737373;"}
    const ColumnItemStyle = {}
    
    return <RowContainer justifyContent="space-evenly" gap="10px" xs={12} sm={12}>
            <ColumnItem>
                <Stack  spacing="5px" width={{ xs: "238px"}}>
                <HeaderText sx={headTextStyle}>Get In Touch</HeaderText>
                <SubText sx={subTextStyle}>{"Lorem Ipsum is simply dummy text of "}</SubText>
                <Stack direction="row"><FacebookTwoToneIcon sx={iconStyle}/><FacebookTwoToneIcon sx={iconStyle}/><FacebookTwoToneIcon sx={iconStyle}/></Stack>
                </Stack>
            </ColumnItem>
            <ColumnItem>
            <Stack  width={{ xs: "238px"}}  spacing="5px">
            <HeaderText sx={headTextStyle}>Company Info</HeaderText>
                <Paragraph sx={paragraphStyle}>About Us</Paragraph>
                <Paragraph sx={paragraphStyle}>Carrier</Paragraph>
               <Paragraph sx={paragraphStyle}>We are hiring</Paragraph>
                <Paragraph sx={paragraphStyle}>Blog</Paragraph>

                </Stack>
            </ColumnItem>
            <ColumnItem>
            <Stack  width={{ xs: "238px"}}  spacing="5px">
            <HeaderText sx={headTextStyle}>Features</HeaderText>
                <Paragraph sx={paragraphStyle}>Business Marketing</Paragraph>
                <Paragraph sx={paragraphStyle}>User Analytics</Paragraph>
                <Paragraph sx={paragraphStyle}>Live Chat</Paragraph>
                <Paragraph sx={paragraphStyle}>Unlimited Support</Paragraph>
                </Stack>
            </ColumnItem>
            <ColumnItem>
            <Stack width={{ xs: "238px"}} spacing="5px">
            <HeaderText sx={headTextStyle}>Resources</HeaderText>
                <Paragraph sx={paragraphStyle}>Ios & Android</Paragraph>
                <Paragraph sx={paragraphStyle}>Watch a Demo</Paragraph>
                <Paragraph sx={paragraphStyle}>Customers</Paragraph>
                <Paragraph sx={paragraphStyle}>API</Paragraph>
           
                </Stack>
            </ColumnItem>
    </RowContainer>

    
};

export default Footer;
