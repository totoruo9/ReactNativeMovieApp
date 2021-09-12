import React from "react";
import { Animated, Dimensions, PanResponder } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../../api";

const {width:WiDTH, height:HEIGHT} = Dimensions.get("window");

const Container = styled.View`
    flex: 1;
    background-color: #333;
    align-items: center;
`;

const Poster = styled.Image`
    height: 100%;
    width: 100%;
    border-radius: 20px;
`;

const styles = {
    height: HEIGHT / 1.5,
    width: "90%",
    position: "absolute",
    top: 40,
}

const FavsPresenter = ({results}) => {
    const position = new Animated.ValueXY();
    const panResponser = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (evt, {dx, dy}) => {
            position.setValue({x:dx, y:dy});
        } 
    })

    return(
        <Container>
            {results.reverse().map(result =>(
                <Animated.View
                    style={{
                        ...styles,
                        transform: [...position.getTranslateTransform()]
                    }}
                    key={result.id}
                    {...panResponser.panHandlers}
                >
                    <Poster source={{uri: apiImage(result.poster_path)}} />
                </Animated.View>
            ))}
        </Container>
    )
} 

export default FavsPresenter;