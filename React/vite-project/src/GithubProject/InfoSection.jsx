
function InfoSection(Props){
    const{people}=Props;
    return(
        <div style={{padding:"20px",display:"flex",alignItems:"center"}}>
            <b style={{fontSize:"28px",}}>{people.length}</b>
            <span style={{fontsize:"14px",marginLeft:"10px"}}>User Results</span>
        </div>
    );
}
export default InfoSection;