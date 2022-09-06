module.exports = {

  RD : function(error, filelist){
   
    var title = 'welcome';
    var description = 'Hello, Node.Js';
    var list = template.list(filelist);
    var html = template.HTML(title, list,
      `<h2>${title}</h2>${description}`,
      `<a href="create">Create</a>`);

    response.end(html);
    response.writeHead(200);
    
    },

    URD : function(error, filelist){
      fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
        var title = queryData.id;

        var list = template.list(filelist);
        var html = template.HTML(title, list, `<h2>${title}</h2>${description}`,
        `<a href="create">Create</a>
        <a href="/update?id=${title}">update</a>
        <form action="delete_process" method="post" onsubmit="sdsd">
          <input type="hidden" name="id" value="${title}">
          <input type="submit" value="delete">
        </form>`);
        response.end(html);
        response.writeHead(200);
        });
      }

  }