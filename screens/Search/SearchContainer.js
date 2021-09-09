import React, { useEffect, useState } from "react";
import {View, Text} from "react-native";
import { movieApi, tvApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = () => {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState({
        movies:[],
        shows: [],
        moviesError: null,
        showsError: null
    });
    const onChange = (text) => setKeyword(text);
    const search = async () => {
        const [movies, moviesError] = await movieApi.search(keyword);
        const [shows, showsError] = await tvApi.search(keyword);
        setResults({
            movies,
            shows,
            showsError,
            moviesError,
        })
    };
    console.log(results);
    // useEffect(()=>{
    //     search();
    // }, [])
    
    return (
        <SearchPresenter onChange={onChange} onSubmit={search} keyword={keyword} {...results} />
    )
}

export default SearchContainer;