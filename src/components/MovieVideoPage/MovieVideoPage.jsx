import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { axiosMovieVideos } from '../../Api';

export const MovieVideoPage = () => {
    const { movieId } = useParams();
    const [movieVideos, setMovieVideos] = useState(null);
    console.log('movieVideos', movieVideos)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getMovieVideoId() {
            try {
                setLoading(true)
                const axiosVideo = await axiosMovieVideos(movieId)
                setMovieVideos(axiosVideo)
            } catch (error) {
                console.log('Videos', error)
            } finally {
                setLoading(false)
            }
        }
        getMovieVideoId()
    }, [movieId]);
    return (
        <div>
            {
                loading ? (
                    <h1> Loading...</h1>
                ) : (
                    movieVideos && (
                        // <video controls width="400" height="300">
                        //     {movieVideos.results.map((video) => (
                        //         <source src={video.official.toString()} type="video" key={video.id} />
                        //     ))}
                        //     Ваш браузер не підтримує відтворення відео.
                        // </video>
                        <div>
                            {/* {movieVideos.results.map((video) => (
                                <div key={video.id}>
                                    <video controls width="400" height="300">
                                        <source src={video.official.toString()} type="video" />
                                        Ваш браузер не підтримує відтворення відео.
                                    </video>
                                    <div>{video.name}</div>
                                    <div>{video.published_at}</div>
                                    <div>{video.site}</div>
                                    <div>{video.size}</div>
                                    <div>{video.type}</div>
                                </div>
                            ))} */}
                                

                                
                                <div >
                                    {/* <video controls width="400" height="300">
                                        <source src={`https://video.tmdb.org/t/p/w400${movieVideos.results.official}`} type="video" />
                                        Ваш браузер не підтримує відтворення відео.
                                    </video> */}
                                    <div>{movieVideos.results.name}</div>
                                    <div>{movieVideos.results.published_at}</div>
                                    <div>{movieVideos.results.site}</div>
                                    <div>{movieVideos.results.size}</div>
                                    <div>{movieVideos.results.type}</div>
                                </div>
                        </div>
                    )
                )
            }
        </div>
    );
};
