import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


function Card(props){
    return (<div className="col-lg-4">
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">{props.plan.name}</h5>
        <h6 className="card-price text-center">${props.plan.price}<span className="period">/month</span></h6>
        
        <ul class="fa-ul">
       
          {
            props.plan.features.map((item) =>{
              return(
              item.enable ? <li><FontAwesomeIcon icon={faCheck} /> <span className="fa-li"><i className="fas fa-check"></i></span>{item.name}</li> : <li class="text-muted"><FontAwesomeIcon icon={faTimes} /> <span class="fa-li"><i class="fas fa-times"></i></span>{item.mute}</li>
              

                

            )})
          }

          </ul>
        <div className="d-grid">
          <a href="#" class="btn btn-primary text-uppercase">Button</a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Card;