import { useState } from 'react'
import Frame from '../Frame/Frame'
import Panel from '../Panel/Panel'

const Home: React.FC = () => {
    const [ isSelected, setIsSelected ] = useState<string>('')
    const [ isSongSelected, setIsSongSelected ] = useState<string>('')

    return (
        <section className="home">
            <Frame isSelected={isSelected} isSongSelected={isSongSelected} />
            <Panel isSelected={isSelected} setIsSelected={setIsSelected} isSongSelected={isSongSelected} setIsSongSelected={setIsSongSelected} />
        </section>
    )
}

export default Home