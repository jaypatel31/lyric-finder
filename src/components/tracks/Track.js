import React from 'react'
import { Link } from 'react-router-dom'
import { BsPlayFill } from "react-icons/bs";
import { FiDisc } from "react-icons/fi";

const Track = ({track}) => {
    return (
        <div className="col-md-6">
            <div className="card mb-4 bg-light shadow-sm">
                <div className="card-body">
                    <h5 className="">{track.artist_name}</h5>
                    <p className="card-text">
                        <strong style={{fontWeight:"bold"}}><FiDisc style={{color:"red"}}/> Track</strong>:{track.track_name}
                        <br/>
                        <strong style={{fontWeight:"bold"}}><BsPlayFill style={{color:"green"}}/> Album</strong>:{track.album_name}
                    </p>
                    <Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark d-block">
                        View Lyrics
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Track
