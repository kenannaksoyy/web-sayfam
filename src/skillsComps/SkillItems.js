
const colors=["#7952B3","#FFC107","#CDC7BE"];

export default function SkillItems(props){
    const {skilltitle, skillList} = props
    return(
    <div id="skills-cont">
        <h2 style={{color:"blue"}}>{skilltitle}</h2>
        <div className="skills-cont-items">
            {
                skillList.map((s,index) => (
                <div className="s-item" style={{background:`${colors[index]}`,color:`black`,border:"5px solid #343A40"}} >
                    <h3 className="s-item-title">{s.name}</h3>
                    <img src={s.img} alt="res" className="s-img" style={{borderRadius:"50%",width:"200px"}}/>
                    <p><strong>{s.name}:</strong>{s.text}</p>
                </div>
                ))
            }
        </div>    
    </div>
    );
}