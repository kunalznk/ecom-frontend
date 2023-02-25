import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { productActions } from '../store/productSlice';

const Filter = (props: {filter: {[key: string]: any}}) => {
    
    const [isCollapsed , setIsCollapsed ] = useState<Boolean>(false);
    const dispatch = useAppDispatch();
    
    return <>
    {
        Object.keys(props.filter).map((val) => {
        let length = Boolean(props.filter[val]) ? Object.keys(props.filter[val])?.length: 0
        return <>
         <li className="has-list" onClick={(e) => {e.stopPropagation(); dispatch(productActions.setFilter({categories: val}))}}><a>{val}</a>
    <span className="category-list__text u-s-m-l-6">({length})</span>
    <span className={Boolean(length) ? (isCollapsed ? "js-shop-category-span fas fa-plus u-s-m-l-6": "js-shop-category-span fas fa-minus u-s-m-l-6") : "js-shop-category-span fas u-s-m-l-6"} onClick={(e) => {e.stopPropagation(); setIsCollapsed(!isCollapsed);}}/>
    <ul style={{display:"block"}}>
       {/* {Boolean(props.filter[val]) && isCollapsed && Object.keys(props.filter).map((val) => <li>{val}</li>)} */}
        {Boolean(props.filter[val]) &&  isCollapsed? <Filter filter={props.filter[val]}/> : null}
    </ul>
    </li>
    </>}
    )
    }
    </>
}

export default Filter;