import React from "react";
import { Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import Slider from "./Movies/Slide";

const {width:WIDTH, height:HEIGHT} = Dimensions.get("window");

const Container = styled.View`
    width: 100%;
    height: ${HEIGHT / 3}px;
    margin-bottom: 32px;
`;

const SliderContainer = ({children}) => (
    <Container>
        <Swiper controlsEnabled={false} loop timeout={3}>
            {children.map(media =>
                <Slider
                    key={media.id}
                    id={media.id}
                    title={media.title ? media.title : media.name}
                    overview={media.overview}
                    votes={media.vote_average}
                    backgroundImage={media.backdrop_path || "../../assets/noFoundPoster.png"}
                    poster={media.poster_path}
                />)
            }
        </Swiper>
    </Container>
)

export default SliderContainer;