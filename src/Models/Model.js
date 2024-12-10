function Model(props){
    const {data}=props;

    return(
        <div className="container">
            <div className="row">
                {data.map((it)=>(
                        <h4>{it.name}</h4>
                    ))}

            </div>

            

        </div>

    )
}
export default Model;