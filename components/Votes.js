import React from "react";
import styled from "styled-components/native";

const Container = styled.Text`
    color: #cdcdcd;
    font-size: 12px;
    font-weight: 500;
`;

const Votes = ({votes}) => <Container>⭐️ {votes} / 10</Container>

export default Votes;