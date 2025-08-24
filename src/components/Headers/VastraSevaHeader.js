import css from  '../../css/HomeHeader.module.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOm } from '@fortawesome/free-solid-svg-icons';

const VastraSevaHeader=()=>
{
    return (
       
    <div class={"container-fluid p-3 "+css['box']}>

    <div class="row ">

        <div className="col-4">
            <Link className={css['title1']} to="/"><span className={css['icon']}><FontAwesomeIcon icon={faOm} title="Om" /></span>Albany Hindu Temple</Link>
        </div>


        <div className="col-8">

            <div className="row">

                <div className='col-2 offset-2'><Link to="/" className={css['link']}><div class={css['title_service']+" p-2"}>Home</div></Link></div>
                <div className='col-2'>
                <div className="dropdown ">
                    <button type="button" class={"btn btn-lg  dropdown-toggle "+css['button']} data-bs-toggle="dropdown">
                    Reserve
                    </button>
                    <ul class="dropdown-menu">
                    <li><Link className="dropdown-item" to="/vastra_seva">Vastra Seva</Link></li>
                    <li><Link className="dropdown-item" to="/seva">Seva</Link></li>
                    </ul>
                </div>




                </div>
                <div className='col-2'><Link to="/about_us" className={css['link']}><div class={css['title_service']+" p-2"}>About Us</div></Link></div>
                <div className='col-3'><Link to="/contact_us" className={css['link']}><div class={css['title_service']+" p-2"}>Contact Us</div></Link></div>

            </div>

               
        </div>
                        
        </div>
    </div>

    
    
    )
};

export default VastraSevaHeader;