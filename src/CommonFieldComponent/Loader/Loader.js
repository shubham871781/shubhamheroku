import React from "react";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/styles';

import { LoaderWrapperStyled } from "./Loader.style";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


const Loader = () => {
  const classes = useStyles();

  return (
    <LoaderWrapperStyled>
      <div>
      <Backdrop className={classes.backdrop} open={true} >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
      
    </LoaderWrapperStyled>
  );
};

export default Loader;
