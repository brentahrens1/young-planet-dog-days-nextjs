interface dogDaysProps {
    setIsArtistSelected: any
}

const CreditsPanel: React.FC<dogDaysProps> = (props) => {

    function selectArtist(e) {
        props.setIsArtistSelected(e.target.innerText)
    }

    const panelBtns = [
        {
            name: 'cidida'
        },
        {
            name: 'july'
        },
        {
            name: 'mitch'
        },
        {
            name: 'dallas'
        },
        {
            name: 'joe'
        },
        {
            name: 'pj'
        },
    ]
    return (
        <div>
            {
                panelBtns.map((btn, id) => {
                    return <button onClick={selectArtist} key={id}>{btn.name}</button>
                })
            }
        </div>
    )
}

export default CreditsPanel