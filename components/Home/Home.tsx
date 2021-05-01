import { useState } from 'react'
import Frame from '../Frame/Frame'
import Panel from '../Panel/Panel'

const Home: React.FC = () => {
    const [ isSelected, setIsSelected ] = useState<string>('')
    const [ isSongSelected, setIsSongSelected ] = useState<string>('')
    const [ isArtistSelected, setIsArtistSelected] = useState<string>('')

    return (
        <section className="home">
            <Frame 
                isSelected={isSelected} 
                isSongSelected={isSongSelected} 
                isArtistSelected={isArtistSelected} 
            />
            <Panel 
                isSelected={isSelected} 
                setIsSelected={setIsSelected} 
                setIsSongSelected={setIsSongSelected} 
                setIsArtistSelected={setIsArtistSelected} 
            />
        </section>
    )
}

export default Home