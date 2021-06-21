import React,{useState,useEffect, useContext} from 'react'
import axios from "axios";
import { GlobalContext } from '../../context'
import { BsMusicNoteBeamed } from "react-icons/bs";

const Search = () => {
    const [trackTitle, setTrackTitle] = useState("");

    const {dispatch, setIsLoading} = useContext(GlobalContext)

    const submitHandle = (e) => {
        e.preventDefault();
        if(trackTitle !== ""){
            setIsLoading(true)
            axios.get(`https://calm-refuge-37100.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
                .then(res=>{
                    console.log(res.data)
                    dispatch(res.data.message.body.track_list)
                })
                .catch(err => console.log(err))
        }
        else{

        }
    }

    return (
        <div className="card card-body mb-4 p-4">
            <h1 className="display-4 text-center">
                <BsMusicNoteBeamed color="blue"/> Search For A Song
            </h1>
            <p className="lead text-center">Get the lyrics for any song</p>
            <form onSubmit={submitHandle}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Song Title..." name="trackTitle" value={trackTitle} onChange={(e)=>setTrackTitle(e.target.value)}/>
                </div>
                <button style={{width:"100%"}} className="btn btn-primary d-block mb-5 mt-3" type="submit">Get Track Lyrics</button>
            </form>
        </div>
    )
}

export default Search
