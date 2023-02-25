import { Link, Breadcrumbs, Grid, Pagination, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import BreadCum from "../components/Breadcrumbs";
import EmptySearch from "../components/EmptySearch";
import FilterCard from "../components/FilterCard";
import FilterProducts from "../components/FilterProducts";
import FilterRow from "../components/FilterRow";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchCart } from "../store/orderSlice";
import { fetchFilterProducts } from "../store/productSlice";
import { productActions } from '../store/productSlice';

const ProductList = () => {
    const filterRef = useRef(null);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const { filterProducts, filters } = useAppSelector(state => state.entities.product);
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(fetchFilterProducts(filters));
      dispatch(fetchCart())
    }, [filters])

    return <>
   <div className="app-content">
    <div className="u-s-p-y-90">
    <div className="container">
        <div className="row">
            <Filters />
            <div className="col-lg-9 col-md-12">
                <div className="shop-p">
                    <div className="shop-p__toolbar u-s-m-b-30">
                        <div className="shop-p__meta-wrap u-s-m-b-60">

                            <span className="shop-p__meta-text-1">FOUND {filterProducts .length} RESULTS</span>
                            {/* <div className="shop-p__meta-text-2">
                                <span className="px-10">Related Searches:</span><hr />
                                <a className="gl-tag btn--e-brand-shadow" href="#">men's clothing</a>
                                <a className="gl-tag btn--e-brand-shadow" href="#">mobiles & tablets</a>
                                <a className="gl-tag btn--e-brand-shadow" href="#">books & audible</a>
                            </div> */}
                        </div>
                        <div className="shop-p__tool-style">
                        <div className="tool-style__group u-s-m-b-8">
                                            <span className="js-shop-list-target">
                                                    <BreadCum />
                                            </span>
                                        </div>
                            <form>
                                <div className="tool-style__form-wrap">
                                    <div className="u-s-m-b-8"><select className="select-box select-box--transparent-b-2" onChange={(e) => {alert(e.target.value) ;dispatch(productActions.setFilter({limit: +e.target.value}));}}>
                                            {[8,12,24,30].map((val) => <option value={val} selected={filters.limit === val}>Show: {val}</option>)}
                                        </select></div>
                                    {/* <div className="u-s-m-b-8"><select className="select-box select-box--transparent-b-2">
                                            <option selected>Sort By: Newest Items</option>
                                            <option>Sort By: Latest Items</option>
                                            <option>Sort By: Best Selling</option>
                                            <option>Sort By: Best Rating</option>
                                            <option>Sort By: Lowest Price</option>
                                            <option>Sort By: Highest Price</option>
                                        </select></div> */}
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="shop-p__collection">
                    <div className="row is-grid-active">
                            {(Boolean(filterProducts.length > 1)) ? filterProducts.map((product , index) => <div className="col-lg-4 col-md-6 col-sm-6">
                                <ProductCard product={product} key={index} id={index}/>
                            </div>) : <EmptySearch/>}
                    </div>
                    </div>
                    <div className="u-s-p-y-60">
                        {(Boolean(filterProducts.length > 1)) && <ul className="shop-p__pagination">
                        <li>
                                <a className="fas fa-angle-left"onClick={() => dispatch(productActions.setFilter({offset: filters?.offset!-1}))}></a>
                            </li>

                            {Array(5).fill(0).slice(0,5).map((val , index) =>  {return <li className={(filters.offset!+index+1) === filters.offset ? "is-active" : ""}>
                                <a onClick={() => dispatch(productActions.setFilter({offset: index+1}))}>{filters.offset!+index+1}</a>
                            </li>})}

                            <li>
                                <a className="fas fa-angle-right"onClick={() =>  {if(filters?.offset! > 0 )dispatch(productActions.setFilter({offset: filters?.offset!+1}))}}></a>
                            </li>
                        </ul>}
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>

</div>
</>
  
}
export default ProductList;