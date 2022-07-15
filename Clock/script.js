        let a;
        let date;
        let time;
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        setInterval(() => {
            a = new Date(); 
            date = a.toLocaleDateString(undefined, options);
            time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
            document.getElementById('time').innerHTML = time + "<br>on " + date;
        }, 1000);

        function calcTime(city,offset){
            let b=new Date()
            let utc=b.getTime()+(b.getTimezoneOffset()*60000);
            let nd=new Date(utc+(3600000*offset));
            return nd.toLocaleString();
        }
        function country_time(){

        var country_name=document.getElementById('input').value;
        var country_offset=document.getElementById('input2').value;
        var output=calcTime(country_name,country_offset);
        document.getElementById('diff_country').innerHTML ="Time of "+country_name+" is: "+output;
        }
    
