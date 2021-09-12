import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { trimText } from "../../utils";

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    border-bottom-width: 1px;
    border-bottom-color:rgba(255,255,255,.25);

    padding: 12px 12px;
    margin: 0;

    /* padding: 4px 8px;
    border: 2px solid #fff;
    border-radius: 4px;
    background-color: rgba(255,255,255,.15);
    margin: 4px 0; */
`;

const Text = styled.Text`
    margin-left: 12px;
    font-weight: 600;
    color: #fff;
`;

const DetailLink = ({onPress, text, icon}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <Container>
                <FontAwesome name={icon} color="white" size={24}></FontAwesome>
                <Text>{trimText(text, 25)}</Text>
            </Container>
        </TouchableOpacity>
    )
}

export default DetailLink;