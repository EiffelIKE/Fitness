import React from 'react';
import Exercises from './Exercises';
import Loading from '../components/Loading';
import NotFound from './ServerError';
import useFectchAPI from '../cHook/useFetchAPI';
import url from '../Config';
const ExercisesContainer = () => {
    const {data,loading,error}=useFectchAPI(`${url}/excersices`)
     if (error)return<NotFound/>
     if (loading)return<Loading/>
    return(
        <>
        <Exercises
        excersices= {data}/>
        </>
    )
    
};

export default ExercisesContainer;
