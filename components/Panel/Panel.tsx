import { useState } from "react"

const Panel: React.FC = () => {
    const [ isSelected, setIsSelected ] = useState<string>('')

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
        setIsSelected(e.target.innerText)
    }

    return (
        <section className="panel">
            <div className="panel__btn-container">
                {
                    btns.map((btn, id) => {
                        return isSelected === btn.text ?
                            <button className="selected" onClick={storeSelected} key={id}>{btn.text}</button>
                            :
                            <button onClick={storeSelected} key={id}>{btn.text}</button>
                    })
                }
            </div>
            <div className="panel__window">
            </div>
        </section>
    )
}

export default Panel