import React, {useState, useEffect} from 'react'
import axios from "axios";
import Spinner from "../layout/Spinner"
import { Link } from 'react-router-dom';
import Moment from "react-moment"

const Lyrics = ({match}) => {
    const [track, setTracks] = useState({})
    const [lyrics, setLyrics] = useState({})

    useEffect(() => {
        axios.get(`https://calm-refuge-37100.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res=>{
                setLyrics(res.data.message.body.lyrics)
                console.log(res.data.message.body.lyrics)
                return axios.get(`https://calm-refuge-37100.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
                .then(res=>{
                    console.log(res.data.message.body.track)
                    setTracks(res.data.message.body.track)
                })
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }, [])

    console.log(track,lyrics)
    return (
        <div>
            {
                (track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0)?<Spinner/>
                :
                <>
                    <Link to="/" className="btn btn-dark btn-sm mb-4" >Go Back</Link>
                    <div className="card">
                        <h5 className="card-header">
                            {track.track_name} by <span className="text-secondary">{track.artist_name}</span>
                        </h5>
                        <div className="card-body">
                            <p className="card-text">{lyrics.lyrics_body}</p>
                        </div>
                    </div>
                    <ul className="list-group mt-3">
                        <li className="list-group-item">
                            <strong style={{fontWeight:"bold"}}>Album ID</strong>: {track.album_id}
                        </li>
                        <li className="list-group-item">
                            <strong style={{fontWeight:"bold"}}>Song Genre</strong>: {(track.primary_genres.music_genre_list.length>0)?track.primary_genres.music_genre_list[0].music_genre.music_genre_name:"Not Available"}
                        </li>
                        <li className="list-group-item">
                        <strong style={{fontWeight:"bold"}}>Explict</strong>: {track.explict === 0 ? 'No': 'Yes'}
                        </li>
                        <li className="list-group-item">
                        <strong style={{fontWeight:"bold"}}>Updated Date</strong>: <Moment format="MM/DD/YYYY">{track.updated_time}</Moment>
                        </li>
                    </ul>
                </>
            }
        </div>
    )
}

export default Lyrics
