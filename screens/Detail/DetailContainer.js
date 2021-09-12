import React, { useEffect, useState } from "react";
import { movieApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";
import * as WebBrowser from 'expo-web-browser';


const DetailContainer =  ({
        navigation,
        route:{
            params:{id, title, backgroundImage, poster, votes, releaseDate, overview, isTV},
        }
    }) => {
    
    const [media, setMedia] = useState({
        loading: true,
        media : {
            id,
            title,
            backgroundImage,
            poster,
            votes,
            releaseDate,
            overview
        }
    })
    
    const getData = async() => {
        const [getMedia, getMediaError] = isTV ? await tvApi.show(id) : await movieApi.movie(id);
        setMedia({
            loading:false,
            media : {
                ...getMedia,
                title: getMedia.title || getMedia.name,
                backgroundImage: getMedia.backdrop_path,
                poster: getMedia.poster_path,
                overview: getMedia.overview,
                votes: getMedia.vote_average,
                releaseDate: getMedia.release_date || null
            }
        })
    }

    useEffect(() => {
        navigation.setOptions({title});
        getData();
    }, [id])

    const openBrowser = async(url) => {
        await WebBrowser.openBrowserAsync(url);
    }

    return(
        <DetailPresenter openBrowser={openBrowser} refrashFn={getData} {...media} />
    )
}

export default DetailContainer;