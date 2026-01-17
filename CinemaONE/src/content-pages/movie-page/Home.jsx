import { useEffect, useState } from "react";
import { getMovie } from "../../services/movie";
import MovieSection from "./components/MovieSection";
import TVSection from "./components/TVSection";
import { getTV } from "../../services/tv";

function Home() {
    const [carousel, setCarousel] = useState({movie1: {}, movie2: {}, tv1: {}, tv2: {}});
    const [activeIndex, setActiveIndex] = useState(0);
    const matchCarouselWithIndex = {0: carousel.movie1, 1: carousel.movie2, 2: carousel.tv1, 3: carousel.tv2};

    useEffect(() => {
        async function movieAPIRequest() {
            const movieTemp = await getMovie("popular");
            setCarousel(c => {return {...c, movie1: movieTemp[0], movie2: movieTemp[1]}});
        }
        async function tvAPIRequest() {
            const tvTemp = await getTV("popular");
            setCarousel(c => {return {...c, tv1: tvTemp[0], tv2: tvTemp[1]}});
        }

        movieAPIRequest();
        tvAPIRequest();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(i => i === 3 ? 0 : i + 1);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    function handleActiveIndex(index) {
        setActiveIndex(i => index);
    }

    return (
        <div className="w-full flex flex-col">
            <div className="relative overflow-hidden flex">
                <div className="absolute top-0 w-full h-full flex flex-col justify-end items-start bg-gradient-to-t from-black/80 from-[25%] to-[90%] to-transparent p-10 gap-3 z-1">
                    <h2 className="font-bold text-white text-3xl">{matchCarouselWithIndex.movie1 !== null && matchCarouselWithIndex.tv1 !== null && matchCarouselWithIndex.movie2 !== null && matchCarouselWithIndex.tv2 !== null && activeIndex < 2 ? matchCarouselWithIndex[activeIndex].title : matchCarouselWithIndex[activeIndex].original_name}</h2>
                    <p className="text-white max-w-150">{matchCarouselWithIndex.movie1 !== null && matchCarouselWithIndex.tv1 !== null && matchCarouselWithIndex.movie2 !== null && matchCarouselWithIndex.tv2 !== null ? matchCarouselWithIndex[activeIndex].overview :""}</p>
                    <div className="flex gap-2 pt-1">
                        <button onClick={() => handleActiveIndex(0)} style={{backgroundColor: activeIndex === 0 ? "white" : "rgba(255, 255, 255, 0.5)"}} className="bg-white/50 w-[11px] h-[11px] rounded-full"></button>
                        <button onClick={() => handleActiveIndex(1)} style={{backgroundColor: activeIndex === 1 ? "white" : "rgba(255, 255, 255, 0.5)"}} className="bg-white/50 w-[11px] h-[11px] rounded-full"></button>
                        <button onClick={() => handleActiveIndex(2)} style={{backgroundColor: activeIndex === 2 ? "white" : "rgba(255, 255, 255, 0.5)"}} className="bg-white/50 w-[11px] h-[11px] rounded-full"></button>
                        <button onClick={() => handleActiveIndex(3)} style={{backgroundColor: activeIndex === 3 ? "white" : "rgba(255, 255, 255, 0.5)"}} className="bg-white/50 w-[11px] h-[11px] rounded-full"></button>
                    </div>
                </div>
                <div style={{transform: `translateX(calc(-${activeIndex} * 100%))`}} className="flex z-0 transition-transform duration-500 ease-out">
                    <img className="min-w-full object-cover h-100" src={carousel.movie1 !== null ? `https://image.tmdb.org/t/p/w1280/${carousel.movie1.backdrop_path}` :""} />
                    <img className="min-w-full object-cover h-100" src={carousel.movie2 !== null ? `https://image.tmdb.org/t/p/w1280/${carousel.movie2.backdrop_path}` :""} />
                    <img className="min-w-full object-cover h-100" src={carousel.tv1 !== null ? `https://image.tmdb.org/t/p/w1280/${carousel.tv1.backdrop_path}` :""} />
                    <img className="min-w-full object-cover h-100" src={carousel.tv2 !== null ? `https://image.tmdb.org/t/p/w1280/${carousel.tv2.backdrop_path}` :""} />
                </div>
            </div>
            <div className="pl-5 pt-5 pr-3 pb-8 flex flex-col gap-8">
                <MovieSection title="Movies Trending Now" genreID="MoviesTrendingNow" movieListType="popular" />
                <TVSection title="Popular TV Shows" genreID="PopularTVShows" withGenre={false} tvListType="popular" />
                <TVSection title="Shows Airing Today" genreID="ShowsAiringToday" withGenre={false} tvListType="airing_today" />
                <MovieSection title="Upcoming Movies" genreID="UpcomingMovies" movieListType="upcoming"/>
                <TVSection title="Family TV Shows" withGenre={true} genreID="10751" />
                <MovieSection title="Crime Movies" withGenre={true} genreID={80}/>
                <MovieSection title="Thriller Movies" withGenre={true} genreID={53}/>

            </div>
        </div>
    );
}

export default Home;