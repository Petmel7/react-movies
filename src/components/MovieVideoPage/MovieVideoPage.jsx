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
                        <video controls width="400" height="300">
                            {movieVideos.results.map((video) => (
                                <source src={video.official.toString()} type="video" key={video.id} />
                            ))}
                            Ваш браузер не підтримує відтворення відео.
                        </video>
                        
                    )
                )
            }
        </div>
    );
};
