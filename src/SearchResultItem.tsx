/* eslint-disable @typescript-eslint/no-explicit-any */
interface SearchResultProp {
    title:string,
    price:string,
    img:string
    permalink: string
}

function SearchResultItem(props: SearchResultProp){
        return (
        <a href={props.permalink} target="blank">
            <div className="search-result-item">
                <img className="search-result-item__img" src={props.img} alt={props.title} />
                <div className="search-result-item__data">
                <h1>{props.title}</h1>
                <h2>$ {props.price}</h2>
                </div>
            </div>
        </a>
        );
}


export { SearchResultItem };