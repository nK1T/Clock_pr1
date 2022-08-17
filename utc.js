// UTC
        let a;
        let date;
        let time;
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        setInterval(() => {
            a = new Date();
            date = a.getUTCMonth() + "/" + a.getUTCDate() + '/' + a.getUTCFullYear();
            time = a.getUTCHours() + ':' + a.getUTCMinutes() + ':' + a.getUTCSeconds();
            document.getElementById('time').innerHTML = time + "<br>on " + date;
        }, 1000);
