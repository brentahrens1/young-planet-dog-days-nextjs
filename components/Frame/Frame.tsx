import Image from 'next/image'

const Frame: React.FC = () => {
    return (
        <section className="frame">
            <div className="frame__img">
                <img className="background" src="/images/main/background.png" alt="Young Planet | Cover Frame" />
            </div>
            <div className="frame__img">
                <img className="frame" src="/images/main/frame.png" alt="Young Planet | Cover Frame" />
            </div>
        </section>
    )
}

export default Frame