
import "./Generator.css"
import data from "./data"
import { useState } from "react"

const Generator = () => {
const [count, setCount] = useState(0)
const [paragraphs, setParagraphs] = useState([])

const submitForm = (event) => {
    // event zastaví refresh
    event.preventDefault()
    let amount = parseInt(count)
// parseInt(count převede string na number pak console.log(typeof(amount));)

    // kontrola krajních hodnot
    if (amount < 0){
      amount = 1
    } else if (amount > 5){
      amount = 5
    }

    // možnost přez data.filter
   const resultParagraphs = data.filter( (oneParagraph, index) => {
    return index < amount
   })
   setParagraphs(resultParagraphs)

  //  nebo možnost přez data.slice
    // setParagraphs(data.slice(0, amount))
}

  return (
    <section className="form-section">
        <h1>Lorem ipsum generator</h1>
        <form onSubmit={submitForm}>
            {/* paragraphs propojení label a input shodný název*/}
            <label htmlFor="paragraphs">Odstavce:</label>

            <input type="number" id="paragraphs" onChange={ (event) => {setCount(event.target.value)} }/><br />
            <input type="submit" value="Vygenerovat" />
        </form>
{/* vem odstavce a vypiš je mapem */}
        <article>
          {
          paragraphs.map( (oneParagraph, index) => {
              return <p key={index}>{oneParagraph}</p>
          })
          }
        </article>
    </section>
  )
}

export default Generator