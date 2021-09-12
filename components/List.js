import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import Media from "./Media";
import Title from "./Title";
import PropTypes from "prop-types";

const Container = styled.View`
    margin-top: 16px;
`;

const List = ({title, children, horizon=false}) => (
    <>
        <Title title={title} />
        {horizon ? (
            <Container>
                {children.map(media =>
                    <Media
                        key={media.id}
                        id={media.id}
                        title={media.title ? media.title : media.name}
                        poster={media.poster_path}
                        overview={media.overview}
                        releaseDate = {media.release_date && media.releaseDate}
                        horizon={horizon}
                    />
                )}
            </Container>
        ):(
            <ScrollView
                style={{marginTop:16, marginBottom: 32}}
                contentContainerStyle={{paddingLeft: 24}}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {children.map(media => (
                    <Media
                        key={media.id}
                        id={media.id}
                        poster={media.poster_path}
                        title={media.original_title ? media.original_title : media.original_name}
                        votes={media.vote_average}
                    />))
                }
            </ScrollView>
        )}
        
    </>
)

List.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    horizon: PropTypes.bool.isRequired
}

export default List