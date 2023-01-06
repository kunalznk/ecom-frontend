import { Grid } from '@mui/material';
const TextIcon = (props: any) => {
    return <div style={{verticalAlign: 'middle',display: 'inline-flex' , fontSize: "124px" , ...props.style}} >
        {props.children}
    </div>
  //   return <Grid container direction="row" alignItems="center" {...props}>
  //   <Grid item>
  //     {props.children[0]}
  //   </Grid>
  //   <Grid item>
  //   {props.children[1]}
  //   </Grid>
  // </Grid>

  // <TextIcon>
  //       <CurrencyRupeeIcon style={{height: "20px"}}/>
  //       <Paragraph style={{fontSize: "22px"}}>12.22</Paragraph>
  //     </TextIcon>
}

export default TextIcon;