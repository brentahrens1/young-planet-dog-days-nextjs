import { useState } from "react"
import PanelWindow from './PanelWindow/PanelWindow'

interface dogDaysProps {
    isSelected: string,
    setIsSelected: any,
    setIsSongSelected: any,
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
                setIsSongSelected={props.setIsSongSelected} 
                setIsArtistSelected={props.setIsArtistSelected}
            />
        </section>
    )
}

export default Panel