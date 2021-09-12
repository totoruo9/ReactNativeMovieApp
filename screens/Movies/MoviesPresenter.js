import React from "react";
import styled from "styled-components/native";
import ScrollContainer from "../../components/ScrollContainer";
import List from "../../components/List"
import SliderContainer from "../../components/SliderContainer";

const Container = styled.View`

`;

export default ({refrashFn, loading, nowPlaying, popular, upcoming}) => {
    return (
        <>
            <ScrollContainer refrashFn={refrashFn} loading={loading}>
                <SliderContainer children={nowPlaying} />
                <Container>
                    <List title={"Popular Movies"} children={popular} />
                    <List title={"Coming Soon"} children={upcoming}  horizon={true} />
                </Container>
            </ScrollContainer>
        </>
    )
}