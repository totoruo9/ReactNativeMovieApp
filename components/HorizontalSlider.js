import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Title from "./Title";
import PropTypes from "prop-types";

const HorizontalSlider = ({title, children}) => {
    return(
        <>
            <Title title={title} />
            <ScrollView
                style={{marginTop:16, marginBottom: 32}}
                contentContainerStyle={{paddingLeft: 24}}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {children}
            </ScrollView>
        </>
    )
}

HorizontalSlider.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default HorizontalSlider;