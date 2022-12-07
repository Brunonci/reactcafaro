
export const climaapi = () => {
    async function localizacion(){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '47b34adc5dmsh4882b336d54192cp1ce67djsn0337bf5942e3',
                'X-RapidAPI-Host': 'spott.p.rapidapi.com'
            }
        };
        fetch('https://spott.p.rapidapi.com/places/ip/me', options)
            .then((response) => {return response.json();})
            .then((data) => {
                document.getElementById("ubi").innerHTML = data.name;
                localStorage.setItem('ubicacion', data.name)
            })
            .catch(err => console.error(err));
            
    }
    function clima(){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '47b34adc5dmsh4882b336d54192cp1ce67djsn0337bf5942e3',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            },
            ubi: document.getElementById("ubi").innerHTML
        };
        fetch('https://weatherapi-com.p.rapidapi.com/current.json?q='+ localStorage.getItem('ubicacion'), options)
            .then(response => response.json())
            .then((data) => {
                document.getElementById("temp").innerHTML = data.current.temp_c + " C°";
                localStorage.setItem('temperatura', data.current.temp_c)
            })
            .catch(err => console.error(err));
    }

    clima()
    localizacion()

    return(
        <div class="clima">
            <h6 id="ubi"></h6>
            <h6 id="temp"></h6>
        </div>
    )
}
