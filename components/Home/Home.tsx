import { useState } from 'react'
import Frame from '../Frame/Frame'
import Panel from '../Panel/Panel'

const Home: React.FC = () => {
    const [ isSelected, setIsSelected ] = useState<string>('')

    return (
        <section className="home">
            <Frame isSelected={isSelected} />
            <Panel isSelected={isSelected} setIsSelected={setIsSelected} />
        </section>
    )
}

export default Home