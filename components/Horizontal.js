import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import { formatDate, trimText } from "../utils";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
    padding: 0 24px;
    margin-bottom: 30px;
    flex-direction: row;
    align-items: flex-start;
`;
const Data = styled.View`
    align-items: flex-start;
    width: 70%;
    margin-left: 16px;
`;
const Title = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 8px;
`;
const ReleaseDate = styled.Text`
    color: #fff;
    margin-bottom: 8px;
    font-size: 12px;
`;

const Overview = styled.Text`
    color:#fff;
`;

const Horizontal = ({id, title, poster, overview, releaseDate}) => (
    <TouchableOpacity>
        <Container>
            <Poster url={poster} />
            <Data>
                <Title>{trimText(title, 30)}</Title>
                {releaseDate ? <ReleaseDate>{formatDate(releaseDate)}</ReleaseDate> : null}
                <Overview>{trimText(overview, 120)}</Overview>
            </Data>
        </Container>
    </TouchableOpacity>
);

Horizontal.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    releaseDate: PropTypes.string
}

export default Horizontal;