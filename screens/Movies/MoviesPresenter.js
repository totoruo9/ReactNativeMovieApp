import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions, ScrollView } from "react-native";
import Slider from "../../components/Movies/Slide";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";

const {width:WIDTH, height:HEIGHT} = Dimensions.get("window");

const SliderContainer = styled.View`
    width: 100%;
    height: ${HEIGHT / 3}px;
    margin-bottom: 50px;
`;

const Container = styled.View`

`;

export default ({loading, nowPlaying, popular}) => {
    return (
        <ScrollView
            style={{backgroundColor:"#333"}}
            contentContainerStyle={{
                flex: 1,
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
                            <ScrollView style={{marginTop:16}} contentContainerStyle={{paddingLeft: 24}} horizontal showsHorizontalScrollIndicator={false}>
                                {popular.map(movie => <Vertical key={movie.id} poster={movie.poster_path} title={movie.original_title} votes={movie.vote_average} />)}
                            </ScrollView>
                        </Container>
                    </>
                )
            }
            
        </ScrollView>
    )
}