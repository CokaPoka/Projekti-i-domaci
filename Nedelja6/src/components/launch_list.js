import { getPastLaunches } from '../services/spacex_service'
import Launch from './launch';

//Add filters
const LaunchList = (year) => {
    const div = document.createElement('div');
    div.className = 'launch-list';

    getPastLaunches().then(response => {
        // let data=response.data;
        let { data } = response;
        
        // const launch=Launch()
        data.forEach(element => {
            let { launch_year } = element;

            if (year == undefined) {
                div.appendChild(Launch(element));

            }
            else if (year == launch_year) {
                div.appendChild(Launch(element));
            }

        });

    }, error => { console.log(error) });

    return div;
}
export default LaunchList;