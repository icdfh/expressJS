
function Search({value, onChange}) {

  return (
    <>
        <input 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Поиск по товарам..."
        />
    </>
  )
}

export default Search
