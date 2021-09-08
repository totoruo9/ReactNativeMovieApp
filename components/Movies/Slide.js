import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { Dimensions, TouchableOpacity } from "react-native";
import { apiImage } from "../../api";
import Poster from "../Poster";
import Votes from "../Votes";

const Container = styled.View`
    height: 100%;
    width: 100%;
`;

const BG = styled.Image`
    height: 100%;
    width: 100%;
    opacity: .4;
    position: absolute;
`

const Content = styled.View`
    height: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const Data = styled.View`
    width: 50%;
    align-items: flex-start;
`;

const Title = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 7px;
`;

const VoteContainer = styled.View`
    margin-bottom: 5px;
`;

const Overview = styled.Text`
    color: #cdcdcd;
    font-weight: 500;
`;

const Button = styled.View`
    background-color: #ff4a5b;
    margin-top: 8px;
    padding: 8px 16px;
    border-radius: 4px;
`;

const ButtonText = styled.Text`
    color: #fff;
`;


const Slider = ({id, title, backgroundImage, votes, overview, poster}) => {
    return (
        <Container>
            <BG source={{uri: apiImage(backgroundImage)}} />
            <Content>
                <Poster url={apiImage(poster)} />
                <Data>
                    <Title>{title.length > 40 ? `${title.slice(0,40)}...` : title}</Title>
                    <VoteContainer><Votes votes={votes} /></VoteContainer>
                    <Overview>{overview.length > 100 ? `${overview.slice(0,100)}...` : overview}</Overview>
                    <TouchableOpacity>
                        <Button>
                            <ButtonText>View Text</ButtonText>
                        </Button>
                    </TouchableOpacity>
                </Data>
            </Content>
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