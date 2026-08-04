function FilterList(Props){
    const {title,options}=Props
    return(
        <div>
            <b>{title}</b>
            <div>
                {options.map((options,index)=>{
                    return(
                        <div key ={index}>
                            <input type="checkbox"/>
                            <span>{options}</span>

                        </div>
                    );
                }
            )}
               
               
            </div>
        </div>

    );
}
  
export default FilterList;
