import React from 'react';
import styled, { css } from 'styled-components'

export const CardWrapper = styled.div`
    padding: 0 0 32px;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08); 
`;

export const CardHeader = styled.header`
    padding-bottom: 32px;
`

export const CardHeading = styled.h1`
    font-size: 28px;
    text-align: center;
    margin-bottom: 0;
`
export const CardSubHeading = styled.p`
    font-size: 14px;
    text-align: center;
    font-family: cursive;
`

export const PlayerImage = styled.img`
    width: 80%;
    padding-top: 32px;
    padding-left: 32px;
    padding-right: 32px;
    text-align: center;
    src: ${props => props.src}
`

export const CardBody = styled.div`
    padding-left: 32px;
    padding-right: 32px;
`

/* Dashboard Styling */

export const CardsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80vh;
 `

export const DashForm = styled.form`
    display: flex;
    justify-content: space-evenly;
    width: 70%;
    margin: 0 auto;
`

export const Label = styled.label`
    padding-right: 5px;
`
