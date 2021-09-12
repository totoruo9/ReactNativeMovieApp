import React, { useState } from "react";
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
    const [topIndex, setTopIndex] = useState(0);
    const position = new Animated.ValueXY();
    const panResponser = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (evt, {dx, dy}) => {
            position.setValue({x:dx, y:dy});
        },
        onPanResponderRelease: () => {
            Animated.spring(position, {
                toValue:{
                    x:0,
                    y:0
                },
                bounciness: 12,
                useNativeDriver:true
            }).start();
        }
    });

    const rotationValues = position.x.interpolate({
        inputRange: [-100, 0, 100],
        outputRange: ["-5deg", "0deg", "5deg"],
        extrapolate: "clamp"
    });

    // setInterval(() => console.log(rotationValues), 500)

    return(
        <Container>
            {results.map((result, index) =>{
                if(index===topIndex){
                    return (
                        <Animated.View
                            style={{
                                ...styles,
                                zIndex:1,
                                transform: [{rotate:rotationValues}, ...position.getTranslateTransform()]
                            }}
                            key={result.id}
                            {...panResponser.panHandlers}
                        >
                            <Poster source={{uri: apiImage(result.poster_path)}} />
                        </Animated.View>
                    )
                }
                return (
                    <Animated.View
                        style={{
                            ...styles,
                            zIndex:-index
                        }}
                        key={result.id}
                        {...panResponser.panHandlers}
                    >
                        <Poster source={{uri: apiImage(result.poster_path)}} />
                    </Animated.View>
                )
            })}
        </Container>
    )
} 

export default FavsPresenter;