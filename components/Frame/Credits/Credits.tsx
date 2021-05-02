interface dogDaysProps {
    isArtistSelected: string
}

const Credits: React.FC<dogDaysProps> = (props) => {
    const artists = [
        {
            name: 'CIDIDA',
            img: '/images/frame/credits/cidida.png',
            class: 'cidida',
            blockClass: 'cidida-block'
        },
        {
            name: 'JULY PORTER',
            img: '/images/frame/credits/july.png',
            class: 'july',
            blockClass: 'july-block'
        },
        {
            name: 'HEMSTITCH MILL',
            img: '/images/frame/credits/mitch.png',
            class: 'mitch',
            blockClass: 'mitch-block'
        },
        {
            name: 'DALLAS JAMES',
            img: '/images/frame/credits/dallas.png',
            class: 'dallas',
            blockClass: 'dallas-block'
        },
        {
            name: 'JOE LAMBERT',
            img: '/images/frame/credits/joe.png',
            class: 'joe',
            blockClass: 'joe-block'
        },
        {
            name: 'PJ KATZ',
            img: '/images/frame/credits/pj.png',
            class: 'pj',
            blockClass: 'pj-block'
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
                    return props.isArtistSelected === artist.blockClass ?
                    <div className={`credits__box ${artist.class}`} key={id}>
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
                    return props.isArtistSelected === artist.blockClass ?
                    <div key={id} className={`credits__img ${artist.class}`}>
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