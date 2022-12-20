import s from "../styles/button.module.css"


type PropsButtonType = {
    title: string,
    callback:()=>void,
    red?:boolean

}
export const Button = ({title,callback,red}: PropsButtonType) => {
    const finalClassName = `${s.button} ${red ? s.red : ''} `


    return (
        <div className={s.buttonStyle}>
            <button onClick={callback} className={finalClassName} >{title}</button>
        </div>
    );
};

