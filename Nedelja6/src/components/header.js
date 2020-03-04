import { getInfo } from '../services/spacex_service'
import Info from '../components/header_info'

const info = () => {
    const headerDiv = document.createElement('div');
    headerDiv.className = 'info-header';

    getInfo().then(response => {
        
        let { data } = response;

         
        headerDiv.appendChild(Info(data));
        

    }, error => { console.log(error) });

    return headerDiv;
}
export default info;