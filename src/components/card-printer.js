import Card from "./card"
import data from "./companies"

// item={item} each item being mapped from "data" will have the value of itself destructured. So item = the destructured object from a text file.
export default function CardPrinter(){

    const companies = data.map(item =>{
        return(
          <Card
          item={item}
        />)
      })

    return(
        <div>
            {companies}
        </div>
        
    )
}
