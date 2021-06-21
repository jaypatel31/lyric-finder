import React, {useState,useEffect} from 'react'
import axios from "axios";

export const GlobalContext = React.createContext();


export const Provider = ({children}) => {

    const [heading, setHeading] = useState("Top 10 Tracks")

    const [trackList, setTrackList] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://calm-refuge-37100.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=US&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res=>{
                console.log(res.data)
                setTrackList(res.data.message.body.track_list)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    const dispatch = (payload) =>{
        setTrackList(payload)
        setHeading("Search Result")
        setIsLoading(false)
    }

    return (
        <div>
            <GlobalContext.Provider value={{trackList,heading, dispatch,isLoading,setIsLoading}}>
                {children}
            </GlobalContext.Provider>
        </div>
    )
}



