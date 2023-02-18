import { Grid, MenuItem, Select } from '@mui/material';
import { useState , ChangeEventHandler} from 'react';
import Dropdown from 'react-multilevel-dropdown';
import { useDispatch } from 'react-redux';
import { productActions } from '../store/productSlice';

const Text = (props: {filter : {[key: string]: string |  any}, values: string[] , setValues: React.Dispatch<React.SetStateAction<string[]>>}) => {

    const dispatch = useDispatch();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, val: string) => {
        e.stopPropagation();
        if(Boolean(props.filter[val])){
            dispatch(productActions.setCategory({[val] : props.filter[val] }))
        }
        props.setValues([...props.values, val]);
        console.log(props.filter[val])
    }
    
    return  <ul style={{ width: "225px" }}>
        {Object.keys(props.filter).map((val , index) => Boolean(props.filter[val]) ? 
                                            <li key={index}className="has-dropdown has-dropdown--ul-left-100">
                                                <a onClick={(e) => handleClick(e,val)}>{val}<i className="fas fa-angle-down i-state-right u-s-m-l-6"></i></a>
                                                <span className="js-menu-toggle"></span>
                                                <Text  filter={props.filter[val]} values={[...props.values, val]} setValues={props.setValues}/>
                                                </li>
       
        : <li key={index}> <a onClick={(e) => handleClick(e,val)}>{val}</a></li>)}
     </ul>
    
    
}

export default Text;

/*

{Object.keys(props.filter).map((val) => { return <>

            {Boolean(props.filter[val]) ? <li style={{border: "2px solid red"}} onClick={(e) => handleClick(e, val)}>{val}<ul>
                <Text filter={props.filter[val]} values={[...props.values, val]} setValues={props.setValues}/>
                </ul></li> : <li style={{border: "2px solid red"}} >{val}</li>}
    </>})}

<Grid item md={12}>
           {Object.keys(props.filter).map((label) => <>
           <Select
           value={selected}
           label={selected}
           onChange={(e, val) => setSel(e.target.value)}
           >

            <MenuItem value={label}>{
               Boolean(props.filter[label]) ? <Grid container flexDirection="column"><Text  filter={props.filter[label]}/></Grid> : label
            }</MenuItem>
           </Select>

           </>)}
    </Grid>
*/