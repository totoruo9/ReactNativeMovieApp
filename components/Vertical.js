import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import Votes from "./Votes";
import { TouchableOpacity } from "react-native";
import { trimText } from "../utils";

const Container = styled.View`
    align-items: center;
    margin-right: 16px;
`;

const Title = styled.Text`
    color:#fff;
    font-weight: 500;
    margin: 4px 0;
`;

const Vertical = ({ id, poster, title, votes }) => {
    return(
        <TouchableOpacity>
            <Container>
                <Poster url={poster} />
                <Title>{trimText(title, 10)}</Title>
                {votes > 0 && <Votes votes={votes} />}
            </Container>
        </TouchableOpacity>
    )
}

Vertical.propTypes = {
    id: PropTypes.number.isRequired,
    poster: PropTypes.string,
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired
}

export default Vertical;