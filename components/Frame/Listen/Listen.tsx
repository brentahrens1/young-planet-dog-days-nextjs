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
                props.isSongSelected === 'Edge' ?
                <Edge />
                :
                props.isSongSelected === 'Daze' ?
                <Daze />
                :
                props. isSongSelected === 'Dog' ?
                <DogDays />
                :
                <Edge />
            }            
        </div>
    )
}

export default Listen