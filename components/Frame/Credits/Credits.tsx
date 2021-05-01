interface dogDaysProps {
    isArtistSelected: string
}

const Credits: React.FC<dogDaysProps> = (props) => {
    const artists = [
        {
            name: 'cidida',
            img: '/images/frame/credits/cidida.png',
        },
        {
            name: 'july',
            img: '/images/frame/credits/july.png',
        },
        {
            name: 'mitch',
            img: '/images/frame/credits/mitch.png',
        },
        {
            name: 'dallas',
            img: '/images/frame/credits/dallas.png',
        },
        {
            name: 'joe',
            img: '/images/frame/credits/joe.png',
        },
        {
            name: 'pj',
            img: '/images/frame/credits/pj.png',
        },
    ]
    return (
        <div className="credits">
            <div className="credits__left-tree">
                <img src="/images/main/left-tree.png" alt="Young Planet | left tree" />
            </div>
            <div className="credits__right-tree">
                <img src="/images/main/right-tree.png" alt="Young Planet | right tree" />
            </div>
            {
                artists.map((artist, id) => {
                    return props.isArtistSelected === artist.name ?
                    <div className={`credits__box ${artist.name}`} key={id}>
                        <h2 className="title">Dog Days</h2>
                        <p className="name">Credits</p> 
                        <p className="creds">{artist.name}</p>
                    </div>
                    :
                    null
                })
            }
            {
                artists.map((artist, id) => {
                    return props.isArtistSelected === artist.name ?
                    <div key={id} className={`credits__img ${artist.name}`}>
                        <img src={artist.img} alt={artist.name} />
                    </div>
                    :
                    null
                })
            }
        </div>
    )
}

export default Credits