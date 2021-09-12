import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
    flex-direction: row;
    align-items: center;
`;

const Text = styled.Text`
    margin-right: 8px;
    font-weight: 600;
    color: #fff;
`;

const DetailLink = ({onPress, text, icon}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <Container>
                <Text>{text}</Text>
                <FontAwesome name={icon} color="white" size={24}></FontAwesome>
            </Container>
        </TouchableOpacity>
    )
}

export default DetailLink;