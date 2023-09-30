import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { axiosMovieVideos } from '../../Api';

export const MovieVideoPage = () => {
    const { movieId } = useParams();
    const [movieVideos, setMovieVideos] = useState(null);
    console.log(movieVideos)
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
                    <ul>
                        <video controls width="400" height="300">
                            {movieVideos.results.map((result) => (
                                <li>
                                    <source src={result.official} type="video/mp4" />
                                </li>
                            ))}
                            Ваш браузер не підтримує відтворення відео.
                        </video>
                    </ul>
                )
            }
        </div>
    );
};