import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions, ScrollView } from "react-native";
import Slider from "../../components/Movies/Slide";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import { symbol } from "prop-types";

const {width:WIDTH, height:HEIGHT} = Dimensions.get("window");

const SliderContainer = styled.View`
    width: 100%;
    height: ${HEIGHT / 3}px;
    margin-bottom: 32px;
`;

const Container = styled.View`

`;

const UpcomingContainer = styled.View`
    margin-top: 16px;
`

export default ({loading, nowPlaying, popular, upcoming}) => {
    return (
        <ScrollView
            style={{backgroundColor:"#333"}}
            contentContainerStyle={{
                flex: loading ? 1 : 'auto',
                justifyContent: loading ? "center" : "flex-start"
            }}
        >
            {
                loading
                ? <ActivityIndicator color="#000" size="large" />
                : (
                    <>
                        <SliderContainer>
                            <Swiper controlsEnabled={false} loop timeout={3}>
                                {nowPlaying.map(movie => 
                                    <Slider
                                        key={movie.id}
                                        id={movie.id}
                                        title={movie.original_title}
                                        overview={movie.overview}
                                        votes={movie.vote_average}
                                        backgroundImage={movie.backdrop_path}
                                        poster={movie.poster_path}
                                    />)}
                                
                            </Swiper>
                        </SliderContainer>
                        <Container>
                            <Title title={"Popular Movies"} />
                            <ScrollView style={{marginTop:16, marginBottom: 32}} contentContainerStyle={{paddingLeft: 24}} horizontal showsHorizontalScrollIndicator={false}>
                                {popular.map(movie => (
                                    <Vertical
                                        key={movie.id}
                                        id={movie.id}
                                        poster={movie.poster_path}
                                        title={movie.original_title}
                                        votes={movie.vote_average}
                                    />))}
                            </ScrollView>

                            <Title title={"Coming Soon"} />
                            <UpcomingContainer>
                                {upcoming.map(movie => (
                                    <Horizontal
                                        key={movie.id}
                                        id={movie.id}
                                        title={movie.original_title}
                                        poster={movie.poster_path}
                                        overview={movie.overview}
                                        releaseDate={movie.release_date}
                                    />
                                ))}
                            </UpcomingContainer>
                        </Container>
                    </>
                )
            }
            
        </ScrollView>
    )
}