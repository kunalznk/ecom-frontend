import { IconButton, Snackbar, SnackbarContent,  } from "@mui/material";
import FiberManualRecordTwoToneIcon from '@mui/icons-material/FiberManualRecordTwoTone';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState, useEffect, createRef, forwardRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Children } from 'react';
import { useInView } from "react-intersection-observer";


const  TestOG = ( props: any) => {
    
    const [section , setSection] = useState(props.children?.map((child: any) => child.props.id));
    const [active , setActive ] = useState<number>(0);
    const handleChange = (arrow: boolean) => {
                let activeToSet = arrow ? (active === 0  ? 0 : active - 1) : (active === section.length - 1 ?  section.length - 1 : active + 1)
                if(active != activeToSet){
                    setActive(activeToSet);
                }
            }

    useEffect(() => {
        window.location.hash = "#"+section[active];
    }, [active])
    return <>
    <div style={{zIndex: "1400", position: "fixed", top: "40%", left: "95%"}}>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", minHeight: "100%"}}>
            <IconButton onClick={() => handleChange(true)}>
            <KeyboardArrowUpIcon />
            </IconButton>
        </div>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", flexFlow:"column"}}>
        
            {props.children.map((child: any) => <a href={`#${child.props.id}`} onClick={(e) => {setActive(section.indexOf(child.props.id)); }}
            style={{border: active === child.props.id ? "10px solid blue" : "none"}}>
            {/* <Link to={`#${child.props.id}`}> */}
            <IconButton sx={{border: active === section.indexOf(child.props.id) ? "2px solid blue" : "0px solid white"}}>
                <FiberManualRecordTwoToneIcon color="error"/>
            </IconButton>
            </a>
            )}
        </div>
        <IconButton onClick={() => handleChange(false)}>
            <KeyboardArrowDownIcon />
            </IconButton>
    </div>

    <div>
    </div>
   
    </>
    
}

const SectionContainer = (props: any) => {
    const { ref, inView, entry } = useInView();
    useEffect(() => {
        console.log(inView)
    }, [inView])
    return <div ref={ref}>
        {props.children}
    </div>
}
const Test = () => {
    return <>
    <TestOG>
    <SectionContainer id="section1">
    <div style={{minHeight: "100vh", backgroundColor: "lightblue"}}>
  <h2>Section 1</h2>
  <p>Click on the link to see the "smooth" scrolling effect.</p>
</div>
    </SectionContainer>
    <SectionContainer id="section2">
    <div style={{minHeight: "100vh", backgroundColor: "lightpink"}}>
  <h2>Section 2</h2>
  <p>Click on the link to see the "smooth" scrolling effect.</p>
</div>
    </SectionContainer>
    </TestOG>
    </>
}





export default Test;


/*

<div id="section1" style={{minHeight: "100vh", backgroundColor: "lightblue"}}>
  <h2>Section 1</h2>
  <p>Click on the link to see the "smooth" scrolling effect.</p>
</div>
<div id="section2" style={{minHeight: "100vh", backgroundColor: "lightcoral"}}>
  <h2>Section 2</h2>
  <p>Click on the link to see the "smooth" scrolling effect.</p>
</div>
<div id="section3" style={{minHeight: "100vh", backgroundColor: "lightcyan"}}>
  <h2>Section 3</h2>
  <p>Click on the link to see the "smooth" scrolling effect.</p>
</div>
<div id="section4" style={{minHeight: "100vh", backgroundColor: "lightgreen"}}>
  <h2>Section 4</h2>
  <p>Click on the link to see the "smooth" scrolling effect.</p>
</div>
<div id="section5" style={{minHeight: "100vh", backgroundColor: "lightpink"}}>
  <h2>Section 5</h2>
  <p>Click on the link to see the "smooth" scrolling effect.</p>
</div>

*/
/*

 <div id="section1" style={{minHeight: "100vh", backgroundColor: "lightblue"}}>
  <h2>Section 1</h2>
  <p>Click on the link to see the "smooth" scrolling effect.</p>
  <a href="#section2">Click Me to Smooth Scroll to Section 2 Below</a>
  <p>Note: Remove the scroll-behavior property to remove smooth scrolling.</p>
</div>
<div id="section2" style={{minHeight: "100vh", backgroundColor: "lightcoral"}}>
  <h2>Section 1</h2>
  <p>Click on the link to see the "smooth" scrolling effect.</p>
  <a href="#section1">Click Me to Smooth Scroll to Section 2 Below</a>
  <p>Note: Remove the scroll-behavior property to remove smooth scrolling.</p>
</div>


 const [open, setOpen ] = useState(true);
    const [section , setSection] = useState(1);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
    setOpen(!open);
    };

    const handleUp= () => {
        
        if(Boolean(section)) {
            setSection(section-1);

            window.location.hash = `#section${section - 1}`
        }
    }

    const handleDown = () => {
        if(section < 2) {
            setSection(section+1);
            window.location.hash = `#section${section + 1}`
        }
      
    }


 <Snackbar open={open} anchorOrigin={{ vertical: "top", horizontal: "right" }} 
    sx={{
        border: "2px solid blue",
        maxWidth: "30px"
    }}
     
    >
        <SnackbarContent style={{
      backgroundColor:'white',
      maxWidth: "30px"
    }}
    message= {
        
        <div style={{display: "flex" , flexDirection: "column", alignItems: "center", justifyContent:"center" ,border: "1px solid red", minHeight: "100vh" }} >
            <div style={{backgroundColor: "white", height: "20px", width:"20px", margin: "10px"}}>
            
            <a href="#section2">
            <FiberManualRecordTwoToneIcon color="error"/>
            </a>
            </div>
            <div style={{backgroundColor: "white", height: "20px", width:"20px", margin: "10px"}}>
            
            <a href="#section1">
            <FiberManualRecordTwoToneIcon color="primary"/>
            </a>
            </div>
          
        </div>
        }  />
    </Snackbar>
*/