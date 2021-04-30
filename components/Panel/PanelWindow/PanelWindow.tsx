import DogDays from "../../Frame/Listen/DogDays/DogDays"
import DefaultPanel from './DefaultPanel/DefaultPanel'
import ListenPanel from './ListenPanel/ListenPanel'
import CreditsPanel from './CreditsPanel/CreditsPanel'
import DownloadPanel from './DownloadPanel/DownloadPanel'
import ContactPanel from './ContactPanel/ContactPanel'

interface dogDaysProps {
    isSelected: string
}

const PanelWindow: React.FC<dogDaysProps> = (props) => {
    return (
        <div className="panel-window">
            {
                props.isSelected === '' ?
                <DefaultPanel />
                :
                props.isSelected === 'LISTEN' ?
                <ListenPanel />
                :
                props.isSelected === 'DOWNLOAD' ?
                <DownloadPanel />
                :
                props.isSelected === 'CREDITS' ?
                <CreditsPanel />
                :
                props.isSelected === 'CONTACT' ?
                <ContactPanel />
                :
                <DefaultPanel />
            }
        </div>
    )
}

export default PanelWindow