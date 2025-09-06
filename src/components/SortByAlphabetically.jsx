import '../style.css';
export default function SortByAlphabetically({onSearch}){
    function sort(){
      const result= (prev => [...prev].sort((a, b) => a.title.localeCompare(b.title)));
      onSearch(result)
    }
      return(

        <div className="sort">
          <h3>Sorting tasks by alphabetically.</h3>
        <div>
            <button onClick={sort}>Sort</button>
        </div>
        </div>
      )
  }