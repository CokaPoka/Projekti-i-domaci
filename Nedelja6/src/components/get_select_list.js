import { getPastLaunches } from '../services/spacex_service'

const SelectList = () => {
    const select = document.createElement('select');
    select.id = 'select-list';
    getPastLaunches().then(response => {
        //  let data=response.data;
        let { data } = response;

        const Years = (year) => {
            let { launch_year } = year
            let years = document.createElement('option');
            years.setAttribute(`value`, `${launch_year}`);
            let textYear = document.createTextNode(`${launch_year}`);
            years.appendChild(textYear);
            return years;
        }

        data.forEach(element => {
            select.appendChild(Years(element));
            // console.log(select);
            
        });
    }, error => { console.log(error) });
    return select;
}

export default SelectList;
