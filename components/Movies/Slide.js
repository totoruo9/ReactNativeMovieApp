import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { Dimensions } from "react-native";
import { apiImage } from "../../api";

const {width:WIDTH, height:HEIGHT} = Dimensions.get("screen");

const Container = styled.View`
    width: ${WIDTH}px;
    height: ${HEIGHT / 3.5}px;
    background-color: red;
`;

const BG = styled.Image`
    height: 100%;
    width: 100%;
`


const Slider = ({id, title, backgroundImage, votes, overview}) => {
    return (
        <Container>
            <BG source={{uri: apiImage(backgroundImage)}} />
        </Container>
    )
}

Slider.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired
}

export default Slider;