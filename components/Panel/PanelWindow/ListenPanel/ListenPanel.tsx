import { loadGetInitialProps } from "next/dist/next-server/lib/utils"

interface dogDaysProps {
    isSongSelected: string,
    setIsSongSelected: any
}

const ListenPanel: React.FC<dogDaysProps> = (props) => {

    const btns = [
        {
            text: '1. Edge of the World',
            soundcloud: <><iframe width="100%" height="250" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/655015961&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div><a href="https://soundcloud.com/spinyoungplanet" title="Young_Planet" target="_blank">Young_Planet</a> · <a href="https://soundcloud.com/spinyoungplanet/day-one" title="Day One" target="_blank">Day One</a></div></>,
            class: 'edge'
        },
        {
            text: '2. In a Daze',
            soundcloud: <><iframe width="100%" height="250" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/655015961&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div><a href="https://soundcloud.com/spinyoungplanet" title="Young_Planet" target="_blank">Young_Planet</a> · <a href="https://soundcloud.com/spinyoungplanet/day-one" title="Day One" target="_blank">Day One</a></div></>,
            class: 'daze'
        },
        {
            text: '3. Dog Days',
            soundcloud: <><iframe width="100%" height="250" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/655015961&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div><a href="https://soundcloud.com/spinyoungplanet" title="Young_Planet" target="_blank">Young_Planet</a> · <a href="https://soundcloud.com/spinyoungplanet/day-one" title="Day One" target="_blank">Day One</a></div></>,
            class: "dog"
        }
    ]

    function selectSong(e) {
        props.setIsSongSelected(e.target.className)
    }

    return (
        <div className="listen-panel">
            <div className="listen-panel__btns">
                <h1>Dog Days</h1>
            {
                btns.map((btn, id) => {
                    return (
                        <div key={id}>
                            {
                                props.isSongSelected === btn.class ?
                                <div onClick={selectSong} key={id} className={`${btn.class}`}>
                                    <button className={`${btn.class}`}>{btn.text}</button>
                                    <div className="play-text">
                                        <p className={`${btn.class}`}>...playing</p>
                                    </div>
                                </div>
                                :
                                <div onClick={selectSong} key={id} className={`${btn.class}`}>
                                    <button className={`${btn.class}`}>{btn.text}</button>
                                    <div className="play-icon">
                                        <img className={`${btn.class}`} src="/images/panel/listen/PLAY.png" alt="Young Planet | Play Button" />
                                    </div>
                                </div>
                            }
                        </div>
                    )
                })
            }
            </div>
            {
                btns.map((btn, id) => {
                    return (
                        <div key={id}>
                            {
                                props.isSongSelected === btn.class ?
                                <div className="soundcloud">
                                {btn.soundcloud}
                                </div>
                                :
                                null
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ListenPanel