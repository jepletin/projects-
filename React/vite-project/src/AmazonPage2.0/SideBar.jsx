import FilterList from "./FilterList";
function SideBar(){
    return(
        <div style={{
            display:"flex",
            width:"300px",
            flexDirection:"column",
        }} 
        >
            <FilterList title={"Conditions"} options={["New","Used","Renewed"]}/>
            <FilterList title={"Matrials"} options={["Plastic","Rubber","PVC","Allot Steel","Aluminium"]}/>
            <FilterList title={"Brand"} options={["Cross Rope","Venum","Sport Bit","Canon Sport","Adidas"]}/>


           

        </div>
    );
}
export default SideBar;