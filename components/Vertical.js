import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import { apiImage } from "../api";
import Votes from "./Votes";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
    align-items: center;
    margin-right: 16px;
`;

const Title = styled.Text`
    color:#fff;
    font-weight: 500;
    margin: 4px 0;
`;

const Vertical = ({poster, title, votes}) => {
    return(
        <TouchableOpacity>
            <Container>
                <Poster url={apiImage(poster)} />
                <Title>{title.length > 10 ? `${title.slice(0,10)}...` : title}</Title>
                <Votes votes={votes} />
            </Container>
        </TouchableOpacity>
    )
}

Vertical.propTypes = {
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired
}

export default Vertical;