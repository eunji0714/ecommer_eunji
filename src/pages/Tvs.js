import React from 'react';
import Cards from "../components/Cards";
import Containerview from "../components/Containerview";
import {useFetchTvs} from "../services/fetchTvs";
import Loading from "../components/Loading";

const Tvs = () => {

    const {data : tvs, isLoading} = useFetchTvs()

    if (isLoading){
        return <Loading />
    }

    return (
        <Containerview title={"티비 방영리스트"}>

            {
                tvs && tvs.map((tv, index) => (
                    <Cards data={tv} provider={"tv"} key={index} />

                ))
            }
        </Containerview>

    );
};

export default Tvs;