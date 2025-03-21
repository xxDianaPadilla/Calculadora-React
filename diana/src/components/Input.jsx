import './Estilos.css'

const Input = ({titulo}) =>{
    return(
      <div className='divInputs'> 
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">#</span>
        <input type="Number" class="form-control" placeholder={titulo} aria-label="Username" aria-describedby="addon-wrapping"></input>
      </div>
      </div>
    );
};

export default Input;