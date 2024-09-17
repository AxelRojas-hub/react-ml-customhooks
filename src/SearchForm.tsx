/* eslint-disable @typescript-eslint/no-explicit-any */

function SearchForm (props:any){
        const handleSubmit = (e:any)=>{
            e.preventDefault();
            if(props.onSearch){
                props.onSearch(e.target.search.value)
            }else{console.error("Hubo un error")}
        }
    return <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" name="search" className="search-form__input" required />
        <button className="search-form__button">Buscar</button>
    </form>
}


export { SearchForm };