import Edge from './Edge/Edge'
import Daze from './Daze/Daze'
import DogDays from './DogDays/DogDays'

interface dogDaysProps {
    isSongSelected: string
}

const Listen: React.FC<dogDaysProps> = (props) => {
    return (
        <div className="listen">
            {
                props.isSongSelected === '' ?
                <Edge />
                :
                props.isSongSelected === 'edge' ?
                <Edge />
                :
                props.isSongSelected === 'daze' ?
                <Daze />
                :
                props. isSongSelected === 'dog' ?
                <DogDays />
                :
                <Edge />
            }            
        </div>
    )
}

export default Listen