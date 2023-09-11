import React from "react";
import {
    Container,
    Banner,
    Title,
    RateContainer,
    Rate,
} from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { roundedRate } from "../../utils/movie";

function SearchItem({ data, navigatePage }) {

    function detailMovie() {
        if (data.release_date === '') {
            alert("n lançou");
            return;
        }
        navigatePage(data);
    }

    return (
        <Container activeOpacity={0.7} onPress={detailMovie}>
            {data?.poster_path ? (
                <Banner
                    resizeMethod="resize"
                    source={{ uri: `https://image.tmdb.org/t/p/original/${data?.poster_path}` }}
                />
            ) : (
                <Banner
                    resizeMethod="resize"
                    source={require('../../assets/gray.png')}
                />
            )}

            <Title>{data?.title}</Title>
            <RateContainer>
                <Ionicons
                    name="md-star"
                    size={12}
                    color="#E7A74e"
                />
                <Rate>{roundedRate(data)}/10</Rate>
            </RateContainer>
        </Container>
    )
}

export default SearchItem;