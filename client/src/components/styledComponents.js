import React from 'react';
import { styled } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export const TitleButton = styled(Button)({
    textAlign: "center",
    fontSize: "2.3rem",
    textDecoration: "underline",
});
export const pageBodyGrid = styled(Grid)({
    width: "100%",
    borderStyle: "solid",
    borderWidth: "0.1rem",
    borderColor: "#007DC2",
    boxShadow: "-10px 10px 10px -5px #000000bf",
    backgroundColor: "#ffffff",
    padding: "3%",
    borderRadius: "0px 15px 15px 15px"
})

export const PortGrid = styled(Grid)({
    borderStyle: "solid",
    borderColor: "#007DC2",
    borderWidth: "0.1rem",
    borderRadius: "0px 15px 0px 15px",
    backgroundColor: "#ffffff",
    padding: "2%",
    marginBottom: "2%",
    boxShadow: "10px 10px 10px -5px #000000bf"
});

export const InfoGrid = styled(Grid)({
    marginLeft: "1%"
})
export const RepoGrid = styled(Grid)({
    marginTop: "-4%"
})
export const HeaderLinkGrid = styled(Grid)({
    marginBottom: "-3%"
})
export const BlueButton = styled(Button)({
    backgroundColor: "#007DC2"
})
