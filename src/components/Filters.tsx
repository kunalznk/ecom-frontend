import { Button, Container, Grid, Paper, Popper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import Filter from "./Filter";
import FilterCard from "./FilterCard";
import { useDispatch } from 'react-redux';
import { productActions } from '../store/productSlice';

const Rating = (props : {value: number, checked: boolean, handleChange:any}) => {
    return <li>
    <div className="rating__check">
        <input type="checkbox"  value={props.value} checked={props.checked} onChange={(e) => props.handleChange(e)}/>
        <div className="rating__check-star-wrap">
            {new Array(5).fill(1).map((star, posn) => <i className={posn+1 <= props.value ? "fas fa-star"  : "far fa-star"} />)}
            </div>
    </div>
    <span className="shop-w__total-text">({props.value})</span>
</li>
}

const Filters = (props:any) => {

    const {category , filters} = useAppSelector((state) => state.entities.product);
    const [ price , setPrice ] = useState<{min: number , max: number}>({
        min: 0,
        max: 1000000
    })
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log(category, filters)
    // },[category, filters])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newFilter = filters.rating!
        newFilter =  e.target.checked ? [... newFilter, +e.target.value] : newFilter.filter((rate , index) => rate  != +e.target.value)
        dispatch(productActions.setFilter({ rating: newFilter}))
    }
    return <div className="col-lg-3 col-md-12">
    <div className="shop-w-master">
        <h1 className="shop-w-master__heading u-s-m-b-30"><i className="fas fa-filter u-s-m-r-8"></i>

            <span>FILTERS</span></h1>
        <div className="shop-w-master__sidebar sidebar--bg-snow">
            <div className="u-s-m-b-30">
                <div className="shop-w">
                    <div className="shop-w__intro-wrap">
                        <h1 className="shop-w__h">CATEGORY</h1>
                        <span className="fas fa-minus shop-w__toggle" data-target="#s-category" data-toggle="collapse"></span>
                    </div>
                    <div className="shop-w__wrap collapse show" id="s-category">
                        <ul className="shop-w__category-list gl-scroll" style={{display:"block"}}>
                            <Filter filter={category}/>
                           </ul>
                    </div>
                </div>
            </div>
            <div className="u-s-m-b-30">
                <div className="shop-w">
                    <div className="shop-w__intro-wrap">
                        <h1 className="shop-w__h">RATING</h1>

                        <span className="fas fa-minus shop-w__toggle" data-target="#s-rating" data-toggle="collapse"></span>
                    </div>
                    <div className="shop-w__wrap collapse show" id="s-rating">
                        <ul className="shop-w__list gl-scroll">
                            {[1,2,3,4,5].map((rate, index) => 
                            <Rating value={index+1} checked={filters.rating?.includes(rate)!} handleChange={handleChange}/>
                            
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="u-s-m-b-30">
                <div className="shop-w">
                    <div className="shop-w__intro-wrap">
                        <h1 className="shop-w__h">SHIPPING</h1>

                        <span className="fas fa-minus shop-w__toggle" data-target="#s-shipping" data-toggle="collapse"></span>
                    </div>
                    <div className="shop-w__wrap collapse show" id="s-shipping">
                        <ul className="shop-w__list gl-scroll">
                            <li>

                                
                                <div className="check-box">

                                    <input type="checkbox" id="free-shipping" checked={filters.available} onChange={(e) => dispatch(productActions.setFilter({available: !e.target.checked}))}/>
                                    <div className="check-box__state check-box__state--primary">
                                        <label className="check-box__label" htmlFor="free-shipping"> Item Available</label></div>
                                </div>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="u-s-m-b-30">
                <div className="shop-w">
                    <div className="shop-w__intro-wrap">
                        <h1 className="shop-w__h">PRICE</h1>

                        <span className="fas fa-minus shop-w__toggle" data-target="#s-price" data-toggle="collapse"></span>
                    </div>
                    <div className="shop-w__wrap collapse show" id="s-price">
                        <form className="shop-w__form-p">
                            <div className="shop-w__form-p-wrap">
                                    
                                    <div>
                                    <label htmlFor="price-min"></label>
                                    <input className="input-text input-text--primary-style" type="text" id="price-min" placeholder="Min" value={price?.min} onChange={ (e) => setPrice({...price, min: +e.target.value})                                        }/>
                                    </div>
                               
                                    <div>
                                    <label htmlFor="price-max"></label>
                                    <input className="input-text input-text--primary-style" type="text" id="price-max" placeholder="Max" value={price?.max} onChange={ (e) => setPrice({...price , max: +e.target.value})}/>
                                    </div>
                                
                                <div>

                                    <button className="btn btn--icon fas fa-angle-right btn--e-transparent-platinum-b-2" onClick={(e) => {e.preventDefault(); dispatch(productActions.setFilter({price: price}))}}></button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <div className="u-s-m-b-30">
                <div className="shop-w">
                    <div className="shop-w__intro-wrap">
                        <h1 className="shop-w__h">MANUFACTURER</h1>

                        <span className="fas fa-minus shop-w__toggle" data-target="#s-manufacturer" data-toggle="collapse"></span>
                    </div>
                    <div className="shop-w__wrap collapse show" id="s-manufacturer">
                        <ul className="shop-w__list-2">
                            <li>
                                <div className="list__content">

                                    <input type="checkbox" checked />

                                    <span>Calvin Klein</span></div>

                                <span className="shop-w__total-text">(23)</span>
                            </li>
                            <li>
                                <div className="list__content">

                                    <input type="checkbox" />

                                    <span>Diesel</span></div>

                                <span className="shop-w__total-text">(2)</span>
                            </li>
                            <li>
                                <div className="list__content">

                                    <input type="checkbox" />

                                    <span>Polo</span></div>

                                <span className="shop-w__total-text">(2)</span>
                            </li>
                            <li>
                                <div className="list__content">

                                    <input type="checkbox" />

                                    <span>Tommy Hilfiger</span></div>

                                <span className="shop-w__total-text">(9)</span>
                            </li>
                            <li>
                                <div className="list__content">

                                    <input type="checkbox" />

                                    <span>Ndoge</span></div>

                                <span className="shop-w__total-text">(3)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="u-s-m-b-30">
                <div className="shop-w">
                    <div className="shop-w__intro-wrap">
                        <h1 className="shop-w__h">COLOR</h1>

                        <span className="fas fa-minus shop-w__toggle" data-target="#s-color" data-toggle="collapse"></span>
                    </div>
                    <div className="shop-w__wrap collapse show" id="s-color">
                        <ul className="shop-w__list gl-scroll">
                            <li>
                                <div className="color__check">

                                    <input type="checkbox" id="jet" />

                                    <label className="color__check-label" htmlFor="jet" style={{backgroundColor: "#333333"}}></label></div>

                                <span className="shop-w__total-text">(2)</span>
                            </li>
                            <li>
                                <div className="color__check">

                                    <input type="checkbox" id="folly" />

                                    <label className="color__check-label" htmlFor="folly" style={{backgroundColor: "#FF0055"}}></label></div>

                                <span className="shop-w__total-text">(4)</span>
                            </li>
                            <li>
                                <div className="color__check">

                                    <input type="checkbox" id="yellow" />

                                    <label className="color__check-label" htmlFor="yellow" style={{backgroundColor: "#FFFF00"}}></label></div>

                                <span className="shop-w__total-text">(6)</span>
                            </li>
                            <li>
                                <div className="color__check">

                                    <input type="checkbox" id="granite-gray" />

                                    <label className="color__check-label" htmlFor="granite-gray" style={{backgroundColor: "#605F5E"}}></label></div>

                                <span className="shop-w__total-text">(8)</span>
                            </li>
                            <li>
                                <div className="color__check">

                                    <input type="checkbox" id="space-cadet" />

                                    <label className="color__check-label" htmlFor="space-cadet" style={{backgroundColor: "#1D3461"}}></label></div>

                                <span className="shop-w__total-text">(10)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="u-s-m-b-30">
                <div className="shop-w">
                    <div className="shop-w__intro-wrap">
                        <h1 className="shop-w__h">SIZE</h1>

                        <span className="fas fa-minus collapsed shop-w__toggle" data-target="#s-size" data-toggle="collapse"></span>
                    </div>
                    <div className="shop-w__wrap collapse" id="s-size">
                        <ul className="shop-w__list gl-scroll">
                            <li>

                                
                                <div className="check-box">

                                    <input type="checkbox" id="xs" />
                                    <div className="check-box__state check-box__state--primary">

                                        <label className="check-box__label" htmlFor="xs">XS</label></div>
                                </div>
                                

                                <span className="shop-w__total-text">(2)</span>
                            </li>
                            <li>

                                
                                <div className="check-box">

                                    <input type="checkbox" id="small" />
                                    <div className="check-box__state check-box__state--primary">

                                        <label className="check-box__label" htmlFor="small">Small</label></div>
                                </div>
                                

                                <span className="shop-w__total-text">(4)</span>
                            </li>
                            <li>

                                
                                <div className="check-box">

                                    <input type="checkbox" id="medium" />
                                    <div className="check-box__state check-box__state--primary">

                                        <label className="check-box__label" htmlFor="medium">Medium</label></div>
                                </div>
                                

                                <span className="shop-w__total-text">(6)</span>
                            </li>
                            <li>

                                
                                <div className="check-box">

                                    <input type="checkbox" id="large" />
                                    <div className="check-box__state check-box__state--primary">

                                        <label className="check-box__label" htmlFor="large">Large</label></div>
                                </div>
                                

                                <span className="shop-w__total-text">(8)</span>
                            </li>
                            <li>

                                
                                <div className="check-box">

                                    <input type="checkbox" id="xl" />
                                    <div className="check-box__state check-box__state--primary">

                                        <label className="check-box__label" htmlFor="xl">XL</label></div>
                                </div>
                                

                                <span className="shop-w__total-text">(10)</span>
                            </li>
                            <li>

                                
                                <div className="check-box">

                                    <input type="checkbox" id="xxl" />
                                    <div className="check-box__state check-box__state--primary">

                                        <label className="check-box__label" htmlFor="xxl">XXL</label></div>
                                </div>
                                

                                <span className="shop-w__total-text">(12)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
</div>
     
   
}

export default Filters;