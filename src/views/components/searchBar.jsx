const SearchBar = ({ setSearch, resultCount }) => (
    <div>
        <form>
            <input 
                type="text"
                onChange={(event) => setSearch(event.target.value)} 
                placeholder='Buscar podcast...'
            />
        </form>
        <h2>{resultCount} Resultados</h2>
    </div>
);

export default SearchBar;
