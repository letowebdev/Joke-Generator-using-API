document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e)
{
    const number = document.getElementById('number').value;

    const  xhttpr = new XMLHttpRequest();


    xhttpr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhttpr.onload = function()
    {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            
            let output = '';
            if (response.type === 'success') {
                response.value.forEach(function(joke)
                {
                    output += `<li>${joke.joke}</li>`
                })
            }else{
                output += '<li>Somthing went TERRIBLY wrong! just joking but seriously something went wrong</li>'

            }
            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhttpr.send();

    e.preventDefault();
}