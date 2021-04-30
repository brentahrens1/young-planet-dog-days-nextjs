import { loadGetInitialProps } from "next/dist/next-server/lib/utils"

interface dogDaysProps {
    setIsSongSelected: any
}

const ListenPanel: React.FC<dogDaysProps> = (props) => {

    const btns = [
        {
            text: 'Edge'
        },
        {
            text: 'Daze'
        },
        {
            text: 'Dog'
        }
    ]

    function selectSong(e) {
        props.setIsSongSelected(e.target.innerText)
    }

    return (
        <div>
            {
                btns.map((btn, id) => {
                    return (
                        <button key={id} onClick={selectSong}>{btn.text}</button>
                    )
                })
            }
        </div>
    )
}

export default ListenPanel