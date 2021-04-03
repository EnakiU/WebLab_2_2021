const { json, text } = require("body-parser");
const file = require('./Countries.json')
const fs = require('fs');
const { loadavg } = require("os");


const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });


   app.get('/home', (request, response) => {
        response.sendFile(__dirname + '/HTML/index.html', 'utf8');
    });


    app.get('/search/:id', (request, response) => {
        try
        {
            var index = file.data.findIndex(i => i.id == request.params.id);
            if(index == -1)
            {
                var resp = {data:[]};
                response.status(200).send(resp);
                return;
            }
            var resp = {data:[file.data[index]]};
            response.status(200).send(resp);
        }
        catch
        {
            response.status(404).send("error");
        }
    });
    app.post('/search', (request, response) => {
            try
            {
                var item = {id:parseInt(request.body.id), name:request.body.name, capital:request.body.capital, language:request.body.language,  currency:request.body.currency, flag:request.body.flag};
                if(file.data.findIndex(i => i.id == item.id) != -1)
                {
                    response.send("id already exists");
                    return;
                }
                file.data.push(item);    
                pushToJson();
                response.status(200).send('User added');
            }
            catch
            {
                response.send("error");
            }
        });
    
        app.put('/search/:id', (request, response) => {
            try
            {
                var item = {id:parseInt(request.body.id), name:request.body.name, capital:request.body.capital, language:request.body.language, currency:request.body.currency, flag:request.body.flag};
                var id = parseInt(request.params.id);
                var index = file.data.findIndex(i => i.id == id);
                if(index == -1)
                {
                    response.send("id not founded");
                    return;
                }
                file.data[file.data.findIndex(i => i.id == id)] = item;
                pushToJson();
                response.send("PUT ok");
            }
            catch
            {
                response.send("error");
            }
        });
    
        app.delete('/search/:id', (request, response) => {
            try
            {
                var id = parseInt(request.params.id);
                var index = file.data.findIndex(i => i.id == id);
                if(index == -1)
                {
                    response.send("id not founded");
                    return;
                }
                file.data.splice(index,1);
                pushToJson();
                response.send("DELETE ok");
            }
            catch
            {
                response.send("error");
            }
        });
}






module.exports = router;


function pushToJson ()
{
    fs.writeFile('./routes/Countries_Rewrite.json', JSON.stringify(file), function(err) {
        if (err) {
        console.log(err);
        }
    });
}