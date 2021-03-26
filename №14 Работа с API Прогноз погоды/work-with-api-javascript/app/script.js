fetch('http://api.openweathermap.org/data/2.5/weather?id=700568&appid=a6a6664ee7b1084f6eeca1d29084afbc')
    .then(function (resp) {
        return resp.json()
    })
    .then(function (data) {
        console.log(data);
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer').textContent = data.weather[0]['main'];

        //https://openweathermap.org/img/wn/02d@2x.png
        let weather_img = document.createElement('img');
        let weather_src = `https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`;
        weather_img.setAttribute("src", weather_src);
        document.querySelector('.features li').append(weather_img);
        console.log(weather_img);
        /* document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`; */
    })
    .catch(function () {
        // catch any errors
    });