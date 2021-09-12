import React from "react";
import ScrollContainer from "../../components/ScrollContainer";
import styled from "styled-components/native";
import List from "../../components/List";
import SliderContainer from "../../components/SliderContainer";

const Container = styled.View`
    margin-top: 30px;
`;

const TVPresenter = ({refrashFn, loading, today, popular, topRated, thisWeek}) => (
    
    <ScrollContainer refrashFn={refrashFn} loading={loading}>
        <Container>
            <List title={"Popular Shows"} children={popular} isTV={true} />
            <SliderContainer children={thisWeek} isTV={true} />
            <List title={"Top Rated"} children={topRated} isTV={true} />
            <List title={"Airing Today"} children={today} horizon={true} isTV={true} />
        </Container>
    </ScrollContainer>
)


export default TVPresenter;