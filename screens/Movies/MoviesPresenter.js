import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator } from "react-native";
import Slider from "../../components/Movies/Slide";



const Container = styled.View`
    flex:1;
    background-color: #333;
    justify-content: center;
`


export default ({loading, nowPlaying}) => {
    return (
        <Container>
            {
                loading
                ? <ActivityIndicator color="#000" size="large" />
                : <>
                    <Swiper controlsEnabled={false} loop timeout={3}>
                        {nowPlaying.map(movie =>
                            <Slider
                                key={movie.id}
                                id={movie.id}
                                title={movie.original_language}
                                overview={movie.overview}
                                votes={movie.vote_average}
                                backgroundImage={movie.backdrop_path}
                            />)}
                        
                    </Swiper>
                </>
            }
            
        </Container>
    )
}