import HiHome from "../homeComps/HiHome";
import ProfilHome from "../homeComps/ProfilHome";
import ProjectsHome from "../homeComps/ProjectsHome";
import SkillsHome from "../homeComps/SkillsHome";
import "../styles/Home.css";
import { useState,useEffect } from "react";
import * as yup from "yup";
import { checkFormErrors } from "../utils/errorUtil";
import { useDispatch } from "react-redux";
import { uptade } from "../pagesControl/pageSlice";

const connectSchema = yup.object().shape({
    subject: yup
    .string()
    .required("Konu Girilmesi Zorunludur")
    .min(2,"Konu En Az 2 Karakter Olmalı")
    .max(50,"Konu En Fazla 20 Karakter Olmalı"),
    body:yup
    .string()
    .required("Mesaj Girilmesi Zorunludur")
    .min(5,"Mesaj En Az 5 Karakter Olmalı")
    .max(50,"Mesaj En Fazla 50 Karakter Olmalı")
});


export default function Home(){
    document.title="Kenan AKSOY";
    const [disable, setDisable] = useState(true);
    const dispatch=useDispatch();
    dispatch(uptade(0));

    const [connectForm, setConnectForm] = useState({
        subject:"",
        body:""
    });
    const [connectFormErrors, setConnectFormErrors] = useState({
        subject:"",body:""
    })

    useEffect ( () => {
        connectSchema
        .isValid(connectForm)
        .then(valid =>{
          setDisable(!valid)
        })
      },[connectForm]);

    const handleChange = event =>{
        const {value ,name} = event.target; 
        setConnectFormErrors
        (
            checkFormErrors(name, value, connectSchema, connectFormErrors, setConnectFormErrors)
        );

        setConnectForm({
            ...connectForm,
            [name]:value 
        });
    };

    return(
        <div id="home-cont">
            <HiHome/>
            <ProfilHome/>
            <SkillsHome/>
            <ProjectsHome/>
             
            <div id="connect-cont">
                <h2 style={{color:"#5C2E7E"}}>Bana Ulaşın</h2>
                <div className='connect-error-show' style={{color:"red"}}>
                    <p>{connectFormErrors.subject}</p>
                    <p>{connectFormErrors.body}</p>
                </div>
                
                <form method="get" action="mailto:kenannaksoyy@gmail.com">
                        <div id="mail-subject-cont">
                            <strong>Konu Giriniz</strong><br/>
                            <input type="text" name="subject" value={connectForm.subject} onChange={handleChange}
                            placeholder="Lütfen Konu Giriniz" size="30" />
                        </div>
                        <div id="mail-body-cont">
                            <strong>Mesajınızı Giriniz</strong><br/>
                            <input type="textarea" name="body" size="50" 
                            value={connectForm.body} onChange={handleChange} 
                            placeholder="Lütfen Mesajınızı Giriniz"/>
                        </div>
                        <input type="submit" value={disable===false?"Maile Yönlendir":"Gerekli Bilgileri Doldurunuz"} disabled={disable} />
                </form>
                <button 
                onClick={()=>{setConnectForm({subject:"",body:""})}}
                disabled={(connectForm.body.length===0 && connectForm.subject.length===0)}>Yazılanları Kaldır</button>
                <p><strong>Mail Uygulamasına Yönlendirileceksiniz</strong></p>
                
            </div> 
        </div>
        
    );
}