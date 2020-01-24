import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export const TitleButton = styled(Button)({
    fontSize: "2.5rem",
    textDecoration: "underline"
});

export const PortGrid = styled(Grid)({
    backgroundColor: "#ffffff",
    padding: "2%",
    marginBottom: "2%",
    boxShadow: "10px 10px 10px -5px #000000bf"
});

