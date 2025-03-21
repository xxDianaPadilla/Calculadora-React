import './Estilos.css'

const Boton = ({titulo, variant="primary"}) =>{
    return(
        <button type="button" className={`btn btn-${variant} m-2`}>{titulo}</button>
    );
}

export default Boton;