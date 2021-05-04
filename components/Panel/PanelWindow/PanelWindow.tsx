import DefaultPanel from './DefaultPanel/DefaultPanel'
import ListenPanel from './ListenPanel/ListenPanel'
import CreditsPanel from './CreditsPanel/CreditsPanel'
import DownloadPanel from './DownloadPanel/DownloadPanel'
import ContactPanel from './ContactPanel/ContactPanel'

interface dogDaysProps {
    isSelected: string,
    isSongSelected: string,
    setIsSongSelected: any,
    isArtistSelected: string,
    setIsArtistSelected: any
}

const PanelWindow: React.FC<dogDaysProps> = (props) => {
    return (
        <div className="panel-window">
            {
                props.isSelected === '' ?
                <DefaultPanel />
                :
                props.isSelected === 'LISTEN' ?
                <ListenPanel setIsSongSelected={props.setIsSongSelected} isSongSelected={props.isSongSelected} />
                :
                props.isSelected === 'DOWNLOAD' ?
                <DownloadPanel />
                :
                props.isSelected === 'CREDITS' ?
                <CreditsPanel setIsArtistSelected={props.setIsArtistSelected} isArtistSelected={props.isArtistSelected} />
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