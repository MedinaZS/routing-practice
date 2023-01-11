import React from 'react'
import { useParams } from 'react-router-dom'

const WordsNumbers = () => {
    const { variable } = useParams();

    return (
        <div>
            {/* IsNaN -> Is not a number -> Word */}
            {isNaN(variable) 
                ?
                <span>The word is: {variable}</span>
                :
                <span>The number is: {variable}</span>
            }

        </div>
    )
}

export default WordsNumbers