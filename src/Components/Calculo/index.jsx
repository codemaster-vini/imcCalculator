import { useState } from "react";

import style from "./calculo.module.css";
import "../../global.css";

const Calculo = () => {
    const [altura, setAltura] = useState();
    const [peso, setPeso] = useState();
    const [imc, setImc] = useState();

    const imcFormatado = (e) => {
        if (e !== undefined) {
            return e.toFixed(1);
        }
        return "";
    };

    const calcularImc = () => {
        if (peso !== undefined && altura !== undefined) {
            const alturaEmMetros = altura / 100;
            const novoImc = peso / (alturaEmMetros * alturaEmMetros);
            setImc(novoImc);
        }
    };

    const exibirImc = () => {
        if(imc < 18.5) {
             return <div className={style.imc}>
                IMC: <span className={style.magro}>{imcFormatado(imc)} Magreza</span>
            </div>
        } else if(imc >= 18.5 & imc <= 24.9) {
             return <div className={style.imc}>
                IMC: <span className={style.normal}>{imcFormatado(imc)} Normal</span>
            </div>
        } else if(imc >= 25 & imc <= 29.9) {
            return <div className={style.imc}>
               IMC: <span className={style.sobrepeso}>{imcFormatado(imc)} Sobrepeso</span>
           </div>
        } else if(imc >= 30 & imc <= 34.9) {
            return <div className={style.imc}>
               IMC: <span className={style.obesidade1}>{imcFormatado(imc)} Obesidade grau 1</span>
           </div>
        } else if(imc >= 25 & imc <= 39.9) {
            return <div className={style.imc}>
               IMC: <span className={style.obesidade2}>{imcFormatado(imc)} Obesidade grau 2</span>
           </div>
        } else if (imc >= 40){
            return <div className={style.imc}>
               IMC: <span className={style.obesidade3}>{imcFormatado(imc)} Obesidade grau 3</span>
           </div>
        } else{
            return <div className={style.imc}>
                Preencha a altura e o peso
            </div>
        }
    }

    return (
        <div className="container">
            <header className={style.header}>
                <h1 className={style.h1}>Calculadora de IMC</h1>
            </header>
            <div className={style.calculo}>
                <ul className={style.lista}>
                    <li className={style.listaItem}>
                        <label className={style.listaItemLabel} htmlFor="altura">Digite sua altura em cm</label>
                        <input onChange={e => setAltura(parseFloat(e.target.value))} className={style.input} type="number" id="altura" />
                    </li>
                    <li className={style.listaItem}>
                        <label className={style.listaItemLabel} htmlFor="peso">Digite seu peso em kg</label>
                        <input onChange={e => setPeso(parseFloat(e.target.value))} className={style.input} type="number" id="peso" />
                    </li>
                </ul>
                <button onClick={calcularImc} className={style.button} type="button">Calcular</button>
            </div>
            {exibirImc()}
        </div>
    );
};

export default Calculo;
