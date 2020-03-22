import React, { useState } from 'react';


const App = () => {
    const [contacts, setContacts] = useState([])
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [filteredCont, setFilteredCont] = useState(null)
    const [error, setError] = useState('')

    const replace = (index) => {
        let arr = [...contacts]
        arr[index].number = number
        setContacts(arr)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (name === '' || number === '') {
            setError("Popunite sva polja!")
            return
        }
        if (!number.startsWith('+')) {
            setError("Broj mora poceti sa znakom '+'")
            return
        }
        let index = contacts.findIndex((contact) => contact.name === name)
        if (index !== -1) {
            if (window.confirm('Korisnik vec postoji...Da li zelite da zamenite broj?')) {
                replace(index)
                setError("")
            }
        }
        else {
            setContacts([...contacts, { name, number }])
            setError("")
        }
        e.target.reset()
        
    }
    const search = (e) => {
        let copyList = [...contacts]
        let filteredCont = copyList.filter((contact) => contact.name.startsWith(e.target.value));
        setFilteredCont(filteredCont)
    }


    return (
        <div className="wrapper">
            <form onSubmit={(e) => handleSubmit(e)} className="form">
                <input type="text" placeholder="Unesite ime i prezime" onInput={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Unesite broj telefona" onInput={(e) => setNumber(e.target.value)} />
                <input type="submit" value="OK!" />
                <input type="text" placeholder="Pretrazi..." onChange={search}></input>
            </form>
            <div className="error">
                {`${error}`}
            </div>
            <div className="list">
                {!filteredCont &&
                    <div className="contacts">
                        {contacts.map((contact) =>
                            <div className="one-contact">
                                <p>{contact.name}</p>
                                <p>{contact.number}</p>
                                <hr />
                            </div>
                        )}
                    </div>
                }
                {filteredCont &&
                    <div className="search-list">
                        {filteredCont.map((contact) =>
                            <>
                                <p>{contact.name}</p>
                                <p>{contact.number}</p>
                            </>
                        )}
                    </div>
                }

            </div>
        </div>
    )
}

export default App;