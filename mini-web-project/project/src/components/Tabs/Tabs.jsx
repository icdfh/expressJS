
function Tabs({value, onChange}) {

  return (
    <>
      <div>
        <button onClick={() => onChange("feed")}>Лента</button> 
        <button onClick={() => onChange("shop")}>Магазин</button>
        <button onClick={() => onChange("profile")}>Профиль</button>            
      </div>
    </>
  )
}

export default Tabs
