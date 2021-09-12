import React from "react";
import {Dimensions, TouchableOpacity} from "react-native";
import styled from "styled-components/native"
import { apiImage } from "../../api";
import DetailLink from "../../components/Detail/DetailLink";
import Poster from "../../components/Poster";
import ScrollContainer from "../../components/ScrollContainer";
import Votes from "../../components/Votes";
import { formatDate } from "../../utils";

const Header = styled.View`
    height: ${Dimensions.get("window").height / 3}px;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 40px;
`;

const BG = styled.Image`
    width: 100%;
    height: 100%;
    opacity: .4; 
    position: absolute;
`;

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    top:40px;
    width: ${Dimensions.get("window").width - 48}px;
`;

const Info = styled.View`
    margin-left: 24px;
    width: ${Dimensions.get("window").width - 172}px;;
`;

const Title = styled.Text`
    color:#fff;
    font-weight: 600;
    font-size: 24px;
    margin: 0 0 8px 0;
`;

const ReleaseDate = styled.Text`
    color:#fff;
`;

const Data = styled.View`
    padding: 0 24px 80px;
`;

const DataName = styled.Text`
    color: #fff;
    font-weight: 600;
    margin-bottom: 8px;
    font-size: 16px;
    margin-top:32px;
`;

const DataValue = styled.Text`
    color: #fff;
    opacity: .8;
    font-weight: 500;
`;

const DetailPresenter = ({media, loading, openBrowser, refrashFn}) => {
    return(
        <ScrollContainer refrashFn={refrashFn} key={media.id} loading={loading} contentContainerStyle={{paddingBottom: 100}}>
            <Header>
                <BG source={{uri:apiImage(media.backgroundImage, "-")}} />
                <Container>
                    <Poster url={media.poster} />
                    <Info>
                        <Title>{media.title}</Title>
                        {media.votes ? <Votes votes={media.votes} /> : <ReleaseDate>{media.releaseDate}</ReleaseDate>}
                    </Info>
                </Container>
            </Header>
            <Data>
                {media.overview ? (
                    <>
                        <DataName>Overview</DataName>
                        <DataValue>{media.overview}</DataValue>
                    </>
                ) : null}
                {media.genres ? (
                    <>
                        <DataName>Genres</DataName>
                        <DataValue>{media.genres.map((genre, index) => `${genre.name}${index === media.spoken_languages.length + 1 ? "" : ", "}`)}</DataValue>
                    </>
                ) : null}
                {media.spoken_languages && (
                    <>
                        <DataName>Languages</DataName>
                        <DataValue>{media.spoken_languages.map((lang, index) => `${lang.name}${index === media.spoken_languages.length + 1 ? "" : ", "}`)}</DataValue>
                    </>
                )}
                {media.release_date && (
                    <>
                        <DataName>Release Date</DataName>
                        <DataValue>{formatDate(media.release_date)}</DataValue>
                    </>
                )}
                {media.status && (
                    <>
                        <DataName>Status</DataName>
                        <DataValue>{media.status}</DataValue>
                    </>
                )}
                {media.revenue ? (
                    <>
                        <DataName>Revenue</DataName>
                        <DataValue>💰 {media.revenue.toLocaleString('ko-KR')}</DataValue>
                    </>
                ) : null}
                {media.runtime ? (
                    <>
                        <DataName>Runtime</DataName>
                        <DataValue>{media.runtime} min</DataValue>
                    </>
                ) : null}
                {media.first_air_date ? (
                    <>
                        <DataName>First Air Date</DataName>
                        <DataValue>{formatDate(media.first_air_date)}</DataValue>
                    </>
                ) : null}
                {media.number_of_episodes ? (
                    <>
                        <DataName>Seasons / Episodes</DataName>
                        <DataValue>{media.number_of_seasons} / {media.number_of_episodes}</DataValue>
                    </>
                ) : null}
                {media.imdb_id ? (
                    <>
                        <DataName>Links</DataName>
                        <DetailLink
                            onPress={() => openBrowser(`https://www.imdb.com/title/${media.imdb_id}`)}
                            text={"IMDB Page"}
                            icon={"imdb"}
                        />
                    </>
                ) : null}
            </Data>
        </ScrollContainer>
    )
}

export default DetailPresenter;