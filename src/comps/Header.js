import { Link } from "react-router-dom";
import personInfos from "../datas/personDatas";
import "../styles/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { selectPage, uptade } from "../pagesControl/pageSlice";

const links=
[
    {_name:"Ana Sayfam",_to:"/"},
    {_name:"Projelerim",_to:"/projects"},
    {_name:"Becerilerim",_to:"/skills"}
];

export default function Header(){
    const currentPage = useSelector(selectPage);
    const dispatch=useDispatch();
    console.log(currentPage);
    return(
        <div id="header-cont">
            <h1 id="header-name-surname" style={{color:"#EB6440"}}>{personInfos.name} {personInfos.surname}</h1>
            <div id="header-link-cont">
                {
                    links.map((l,index)=> (
                        <Link to={l["_to"]} className="header-link" style={{ textDecoration: 'none' }}
                        id={index===currentPage && "active"} onClick={()=>{dispatch(uptade(index))}}>
                            {l["_name"]}
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}