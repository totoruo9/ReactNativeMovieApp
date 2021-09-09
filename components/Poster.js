import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { apiImage } from "../api";

const Image = styled.Image`
    height: 150px;
    width: 100px;
    border-radius: 4px;
`

const Poster = ({url}) => (
    <Image source={url ? {uri:apiImage(url)} : {uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftheposterdb.com%2F&psig=AOvVaw3hkuY3Iw-sAlWj2fZr4A60&ust=1631193580782000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJixpeu77_ICFQAAAAAdAAAAABAD"}} />
);

Poster.propTypes = {
    url: PropTypes.string.isRequired
}

export default Poster