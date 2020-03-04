import LaunchList from "./components/launch_list";
import info from './components/header'
import SelectList from "./components/get_select_list";

const app=document.querySelector('#app');

// const header=Header()
const header=info();
const filters=document.createElement('section');
const launch_list=LaunchList();
const selectList =SelectList();

filters.appendChild(selectList);

const footer=document.createElement('footer');

app.append(header,filters,launch_list,footer);



selectList.addEventListener('change', ()=>{
    const oldList = document.querySelector(".launch-list")
    app.replaceChild(LaunchList(selectList.value),oldList)
    });
       
       




