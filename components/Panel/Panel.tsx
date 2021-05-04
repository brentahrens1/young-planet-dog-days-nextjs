import { useState } from "react"
import PanelWindow from './PanelWindow/PanelWindow'

interface dogDaysProps {
    isSelected: string,
    setIsSelected: any,
    isSongSelected: string
    setIsSongSelected: any,
    isArtistSelected: string,
    setIsArtistSelected: any
}

const Panel: React.FC<dogDaysProps> = (props) => {

    const btns = [
        {
            text: 'LISTEN'
        },
        {
            text: 'DOWNLOAD'
        },
        {
            text: 'CREDITS'
        },
        {
            text: 'CONTACT'
        },
    ]

    function storeSelected(e) {
        props.setIsSelected(e.target.innerText)
        props.setIsSongSelected('')
        props.setIsArtistSelected('')
    }

    return (
        <section className="panel">
            <div className="panel__btn-container">
                {
                    btns.map((btn, id) => {
                        return props.isSelected === btn.text ?
                            <button className="selected" onClick={storeSelected} key={id}>{btn.text}</button>
                            :
                            <button onClick={storeSelected} key={id}>{btn.text}</button>
                    })
                }
            </div>
            <PanelWindow 
                isSelected={props.isSelected} 
                isSongSelected={props.isSongSelected}
                setIsSongSelected={props.setIsSongSelected} 
                isArtistSelected={props.isArtistSelected}
                setIsArtistSelected={props.setIsArtistSelected}
            />
        </section>
    )
}

export default Panel