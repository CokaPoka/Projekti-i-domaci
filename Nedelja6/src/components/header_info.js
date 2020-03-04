const Info = (info) => {
    // Object destructuring
    let {
        name,
        founder,
    } = info;
    const divHeader = document.createElement('div');
    divHeader.className = 'info';

    const header_divs = []
    for (let i = 0; i < 2; i++) {
        let headerDivx = document.createElement('div');
        headerDivx.className = `header-div-${i}`;
        header_divs.push(headerDivx);
        divHeader.appendChild(headerDivx);
    }

    const nameCompany=document.createElement('p');
    nameCompany.innerText=name;
    header_divs[0].appendChild(nameCompany);

    const nameFounder=document.createElement('p');
    nameFounder.innerText=founder;
    header_divs[1].appendChild(nameFounder);


    return divHeader;
}

export default Info;