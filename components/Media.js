import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import { formatDate, trimText } from "../utils";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Votes from "./Votes";

const Container = styled.View`
    padding: ${props => props.horizon ? "0 24px" : "0"};
    margin: ${props => props.horizon ? "0 0 30px 0" : "0 16px 0 0"};
    flex-direction: ${props => props.horizon ? "row" : "column"};
    align-items: ${props => props.horizon ? "flex-start" : "center"};
`;
const Data = styled.View`
    align-items: ${props => props.horizon ? "flex-start" : "center"};
    width: ${props => props.horizon ? "70%" : "auto"};
    margin-left: ${props => props.horizon ? "16px" : "0"};
`;
const Title = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: ${props => props.horizon ? "16px" : "14px"};
    margin: ${props => props.horizon ? "0 0 8px 0" : "4px 0"};
`;
const ReleaseDate = styled.Text`
    color: #fff;
    margin-bottom: 8px;
    font-size: 12px;
`;

const Overview = styled.Text`
    color:#fff;
`;

const Media = ({id, title, poster, overview=null, releaseDate=null, horizon=false, votes=null, backgroundImage, isTV}) => {
    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Detail", {
            id,
            title,
            poster,
            overview,
            releaseDate,
            votes,
            backgroundImage,
            isTV
        })
    }
    return(
        <TouchableOpacity onPress={goToDetail}>
            <Container horizon={horizon}>
                <Poster url={poster} />
                <Data horizon={horizon}>
                    <Title horizon={horizon}>{ horizon ? trimText(title, 30) : trimText(title, 10)}</Title>
                    {releaseDate ? <ReleaseDate>{formatDate(releaseDate)}</ReleaseDate> : null}
                    {overview && horizon ? <Overview>{trimText(overview, 120)}</Overview> : null}
                    {votes > 0 ? <Votes votes={votes} /> : null}
                </Data>
            </Container>
        </TouchableOpacity>
    )
}
    

Media.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    overview: PropTypes.string,
    releaseDate: PropTypes.string,
    votes: PropTypes.number,
    horizon: PropTypes.bool
}

export default Media;