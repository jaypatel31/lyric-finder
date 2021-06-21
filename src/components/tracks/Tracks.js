import React, {useContext} from 'react'
import { GlobalContext } from '../../context'
import Spinner from "../layout/Spinner"
import Track from './Track'

const Tracks = () => {
    const {trackList,heading,isLoading} = useContext(GlobalContext)

    console.log(trackList)
    return (
        <div>
            {
                (isLoading)?<Spinner/>
                :(trackList.length === 0)?<h1  className="text-center mb-4">Song Not Available</h1>:<>
                    <h3 className="text-center mb-4">{heading}</h3>
                    <div className="row">
                        {
                            trackList.map((item,index)=>(
                                <Track key={item.track.track_id} track={item.track}/>
                            ))
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default Tracks
