import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import PropTypes from "prop-types";
import { ActivityIndicator, RefreshControl } from "react-native";

const ScrollContainer = ({ refrashFn, loading, children}) => {
    const [refreshing, setRefreshing] = useState(false); 
    const onRefresh = async() => {
        setRefreshing(true);
        await refrashFn();
        setRefreshing(false);
    }
    return (<ScrollView
        style={{backgroundColor:"#333"}}
        contentContainerStyle={{
            flex: loading ? 1 : 'auto',
            justifyContent: loading ? "center" : "flex-start"
        }}
        refreshControl={<RefreshControl tintColor={"#fff"} enabled={false} refreshing={refreshing} onRefresh={onRefresh} />}
    >
        {
            loading
                ? <ActivityIndicator color="#000" size="large" />
                : children
        }
    </ScrollView>)
};

ScrollContainer.propTypes = {
    loading:PropTypes.bool.isRequired,
    children:PropTypes.node.isRequired,
    contentContainerStyle: PropTypes.object,
    refrashFn: PropTypes.func
}

export default ScrollContainer;
