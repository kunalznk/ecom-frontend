import Beam from "../images/beam.png"
import { Backdrop, Box, CircularProgress, Paper } from "@mui/material";
import { connect } from "react-redux";
const Loader = (props: {loading: boolean}) => {
    return <>
        {props.loading && <div className="preloader is-active">
        <div className="preloader__wrap">
          {/* <img className="preloader__img" src="assests/images/preloader.png" alt="" /> */}
          <span className="loader"></span>
          </div>
    </div>}
    </>
}

function mapStateToProps (state: any , ownState: any) {
    const { loading }  = state?.entities?.app;
    return { loading }
}
export default connect(mapStateToProps)(Loader);
