export function card({name, price, image}){
    return (
        <div 
        style = {{
      backgroundColor : "grey",
      padding : "20px",
      borderRadius: "8px"
        }}>
    <img src={image} alt="" />
    <h2>{name}</h2>
    <h3>{price}</h3>
        </div>
    )
}