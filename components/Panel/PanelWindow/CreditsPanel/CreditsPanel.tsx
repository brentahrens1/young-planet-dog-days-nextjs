interface dogDaysProps {
    setIsArtistSelected: any
}

const CreditsPanel: React.FC<dogDaysProps> = (props) => {

    function selectArtist(e) {
        props.setIsArtistSelected(e.target.className)
    }

    const panelBtns = [
        {
            name: 'july porter',
            img: '/images/panel/credits/july.png',
            class: 'july',
            blockClass: 'july-block'
        },
        {
            name: 'cidida',
            img: '/images/panel/credits/cidida.png',
            class: 'cidida',
            blockClass: 'cidida-block'
        },
        {
            name: 'pj katz',
            img: '/images/panel/credits/pj.png',
            class: 'pj',
            blockClass: 'pj-block'
        },
        {
            name: 'dallas james',
            img: '/images/panel/credits/dallas.png',
            class: 'dallas',
            blockClass: 'dallas-block'
        },
        {
            name: 'hemstitch mill',
            img: '/images/panel/credits/mitch.png',
            class: 'mitch',
            blockClass: 'mitch-block'
        },
        {
            name: 'joe lambert',
            img: '/images/panel/credits/joe.png',
            class: 'joe',
            blockClass: 'joe-block'
        },
    ]
    return (
        <div className="credits-panel">
            <div className="credits-panel__inner">
            {
                panelBtns.map((btn, id) => {
                    return (
                        <div key={id} className={`${btn.blockClass}`} onClick={selectArtist}>
                            <div className={`icon ${btn.class} ${btn.blockClass}`}>
                                <img className={`${btn.blockClass}`} src={btn.img} alt={btn.name} />
                            </div>
                            <button className={`${btn.blockClass}`}>{btn.name}</button>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default CreditsPanel