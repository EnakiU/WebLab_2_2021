const connect = "http://localhost:3010/search/";

    function start()
    {
      getajax();
    }
    
    function getajax()
    {   
      console.log("GET");
      $.ajax({
        type: "GET",
        url: connect + document.getElementById('idGET').value,
        success: function(msg){
          //console.log(msg.status);
          console.log(msg);
          console.log(msg.data);
          

          if(msg.data.length == 0)
          {
        
        document.getElementById("image1").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/1200px-Error.svg.png";
        document.getElementById("capital").style.display = "none";
        document.getElementById("lang").style.display = "none";
        document.getElementById("val").style.display = "none";
        document.getElementById("name").style.display = "inline";
        document.getElementById("name").innerHTML = "Страна не найдена";
        document.getElementById("bo").style.display = "inline";
          }
          else
          {
      
          document.getElementById("bo").style.display = "inline";
          document.getElementById("image1").src = msg.data[0].flag;

          document.getElementById("name").innerHTML = msg.data[0].name;

          document.getElementById("name").style.display = "inline";
          document.getElementById("capital").innerHTML = msg.data[0].capital;
          document.getElementById("capital").style.display = "inline";
          document.getElementById("lang").innerHTML = msg.data[0].language;
          document.getElementById("lang").style.display = "inline"; 
          document.getElementById("val").innerHTML = msg.data[0].currency;
          document.getElementById("val").style.display = "inline";
          }



          
        }
      });
    }
    
    function postajax()
    {
      console.log("POST");
      if(document.getElementById('idPOST').value == "")
      {
        document.getElementById('idPOST').classList.add("is-invalid");
        return;
      }
      else
      {
        document.getElementById('idPOST').classList.remove("is-invalid");
      }
      document.getElementById('idGET').value = document.getElementById('idPOST').value;
      var id = parseInt(document.getElementById('idPOST').value);
      $.ajax({
        type: "POST",
        url: connect,
        
        data: "id="+ id +"&name=" + document.getElementById('namePOST').value + "&capital=" + document.getElementById('capitalPOST').value + "&language="+ document.getElementById('languagePOST').value + "&currency=" + document.getElementById('currencyPOST').value  + "&flag=" + document.getElementById('flagPOST').value,
        success: function(msg){
          console.log(msg);
          if(msg == "id already exists")
          {
            document.getElementById("image1").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/1200px-Error.svg.png";
        document.getElementById("capital").style.display = "none";
        document.getElementById("lang").style.display = "none";
        document.getElementById("val").style.display = "none";
        document.getElementById("name").style.display = "inline";
        document.getElementById("name").innerHTML = "id уже существует";
        document.getElementById("bo").style.display = "inline";
          }
          else
          {
          getajax();
        }
        }
      });
    }
    
    function putajax()
    {
      console.log("PUT");
      if(document.getElementById('idPUT').value == "")
      {
        document.getElementById('idPUT').classList.add("is-invalid");
        return;
      }
      else
      {
        document.getElementById('idPUT').classList.remove("is-invalid");
      }
      document.getElementById('idGET').value = document.getElementById('idPUT').value;
      var id = parseInt(document.getElementById('idPUT').value);
      $.ajax({
        type: "PUT",
        url: connect + id,
        
        data: "id="+ id +"&name=" + document.getElementById('namePUT').value + "&capital=" + document.getElementById('capitalPUT').value + "&language="+ document.getElementById('languagePUT').value + "&currency=" + document.getElementById('currencyPUT').value + "&flag=" + document.getElementById('flagPUT').value,
        success: function(msg){
          console.log(msg);
          if(msg == "id not founded")
          {
            document.getElementById("image1").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/1200px-Error.svg.png";
        document.getElementById("capital").style.display = "none";
        document.getElementById("lang").style.display = "none";
        document.getElementById("val").style.display = "none";
        document.getElementById("name").style.display = "inline";
        document.getElementById("name").innerHTML = "id не найден";
        document.getElementById("bo").style.display = "inline";
          }
          else
          {
          getajax();
        }
        }
      });
    }
    
    function deleteajax()
    {
      console.log("DELETE");
      $.ajax({
        type: "DELETE",
        url: connect + document.getElementById('idDELETE').value,
        success: function(msg){
          console.log(msg);
          if(msg == "id not founded")
          {
            document.getElementById("image1").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/1200px-Error.svg.png";
        document.getElementById("capital").style.display = "none";
        document.getElementById("lang").style.display = "none";
        document.getElementById("val").style.display = "none";
        document.getElementById("name").style.display = "inline";
        document.getElementById("name").innerHTML = "id не найден";
        document.getElementById("bo").style.display = "inline";
          }
           if(msg == "DELETE ok")
          {
            document.getElementById("image1").src = "https://static5.depositphotos.com/1011646/443/i/600/depositphotos_4434811-stock-photo-check-mark.jpg";
        document.getElementById("capital").style.display = "none";
        document.getElementById("lang").style.display = "none";
        document.getElementById("val").style.display = "none";
        document.getElementById("name").style.display = "inline";
        document.getElementById("name").innerHTML = "Удаление прошло успешно";
        document.getElementById("bo").style.display = "inline";
          }
          //getajax();
        }
      });
    }
    
    function methodChanged()
    {
      switch(document.getElementById('methods').value)
      {
        case '1':
          document.getElementById('formGet').style.display = "inline";
          document.getElementById('formPost').style.display = "none";
          document.getElementById('formPut').style.display = "none";
          document.getElementById('formDelete').style.display = "none";
          break;
        case '2':
          document.getElementById('formGet').style.display = "none";
          document.getElementById('formPost').style.display = "inline";
          document.getElementById('formPut').style.display = "none";
          document.getElementById('formDelete').style.display = "none";
          break;
        case '3':
          document.getElementById('formGet').style.display = "none";
          document.getElementById('formPost').style.display = "none";
          document.getElementById('formPut').style.display = "inline";
          document.getElementById('formDelete').style.display = "none";
          break;
        case '4':
          document.getElementById('formGet').style.display = "none";
          document.getElementById('formPost').style.display = "none";
          document.getElementById('formPut').style.display = "none";
          document.getElementById('formDelete').style.display = "inline";
          break;
        default:
          document.getElementById('formGet').style.display = "inline";
          document.getElementById('formPost').style.display = "none";
          document.getElementById('formPut').style.display = "none";
          document.getElementById('formDelete').style.display = "none";
          break;
      }
    }