const SearchBar = ({ setSearch, resultCount }) => (
    <div className="search-bar">
        <div className="result-counter">{resultCount}</div>
        <form>
            <input 
                type="text"
                onChange={(event) => setSearch(event.target.value)} 
                placeholder='Buscar podcast...'
            />
        </form>
    </div>
);

export default SearchBar;
