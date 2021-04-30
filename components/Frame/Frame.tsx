import Default from '../Frame/Default/Default'
import Listen from '../Frame/Listen/Listen'
import Download from '../Frame/Download/Download'
import Credits from '../Frame/Credits/Credits'
import Contact from '../Frame/Contact/Contact'

interface dogDaysProps {
    isSelected: string,
    isSongSelected: string
}

const Frame: React.FC<dogDaysProps> = (props) => {
    return (
        <section className="frame">
            <div className="frame__img frame-border">
                <img src="/images/main/frame.png" alt="Young Planet | Cover Frame" />
                {
                    props.isSelected === '' ?
                    <Default />
                    :
                    props.isSelected === 'LISTEN' ?
                    <Listen isSongSelected={props.isSongSelected} />
                    :
                    props.isSelected === 'DOWNLOAD' ?
                    <Download />
                    :
                    props.isSelected === 'CREDITS' ?
                    <Credits />
                    :
                    props.isSelected === 'CONTACT' ?
                    <Contact />
                    :
                    <Default />
                }
            </div>
            <div className="frame__img background">
                <img src="/images/main/background.png" alt="Young Planet | Cover Frame" />
            </div>
        </section>
    )
}

export default Frame