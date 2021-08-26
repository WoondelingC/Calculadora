import React, { useState } from 'react';
import './index.css'


const Calculadora = () => {
        const [resultado, setResultado] = useState ("");
    
        const handleClick = (e) => {
            setResultado(resultado.concat(e.target.name));
        }
        const limpiar = () => {
            setResultado("");
        }
        const borrar = () => {
            setResultado(resultado.slice(0, resultado.length -1));
        }
        const operaciones = () => {
            try {
                
                // eslint-disable-next-line no-eval
                setResultado(eval(resultado).toString());
             
            } catch(err) {
                setResultado("Error")
            }
        }


    return (
        <div id="contenedor">
            <form id= "resultado">
                <input type="text" value={resultado} placeholder="resultado" />
            </form>

            <div id="botones">
                <div id="f1" >
                <button name="clear" onClick= {limpiar} id="limpiar">Clear</button>
                <button name="C" onClick= {borrar} id="borrar">C</button>
                <button id="divide" name="/" onClick= {handleClick}>&divide;</button>
                </div>

                <div id="f2">
                <button name="7" onClick= {handleClick}>7</button>
                <button name="8" onClick= {handleClick}>8</button>
                <button name="9" onClick= {handleClick}>9</button>
                <button name="*" onClick= {handleClick}>&times;</button>
                </div>

                <div id="f3">
                <button name="4" onClick= {handleClick}>4</button>
                <button name="5" onClick= {handleClick}>5</button>
                <button name="6" onClick= {handleClick}>6</button>
                <button name="-" onClick= {handleClick}>&ndash;</button>
                </div>

                <div id="f4">
                <button name="1" onClick= {handleClick}>1</button>
                <button name="2" onClick= {handleClick}>2</button>
                <button name="3" onClick= {handleClick}>3</button>
                <button name="+" onClick= {handleClick}>+</button>
                </div>

                <div id="f5">
                <button id="cero" name="0" onClick= {handleClick}>0</button>
                <button id="." name="." onClick= {handleClick}>.</button>
                <button id="igual" name="igualda" onClick= {operaciones}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculadora
