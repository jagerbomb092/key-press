let api =  "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2a159b5e8c7fc1ac13f63e273c899db8"
fetch(api).then(data => data.json())
            .then(info => console.log(info))