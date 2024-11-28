import style from "./tabelaIMC.module.css"
import "../../global.css"

const tabelaImc = () => {

    return (
        <div className={style.tableContainer}>
            <table className={style.table}>
                <thead className={style.tableHead}>
                    <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={style.magro}>Menor que 18,5</td>
                        <td className={style.magro}>Magreza</td>
                    </tr>
                    <tr>
                        <td className={style.normal}>18,5 a 24,9</td>
                        <td className={style.normal}>Normal</td>
                    </tr>
                    <tr>
                        <td className={style.sobrepeso}>25 a 29,9</td>
                        <td className={style.sobrepeso}>Sobrepeso</td>
                    </tr>
                    <tr>
                        <td className={style.obesidade1}>30 a 34,9</td>
                        <td className={style.obesidade1}>Obesidade grau I</td>
                    </tr>
                    <tr>
                        <td className={style.obesidade2}>35 a 39,9</td>
                        <td className={style.obesidade2}>Obesidade grau II</td>
                    </tr>
                    <tr>
                        <td className={style.obesidade3}>Maior que 40</td>
                        <td className={style.obesidade3}>Obesidade grau III</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default tabelaImc