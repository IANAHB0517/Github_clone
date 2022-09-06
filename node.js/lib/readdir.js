module.exports = {

  RD : function(error, filelist){

   
    var title = 'welcome';
    var description = 'Hello, Node.Js';
    var list = template.list(filelist);
    var html = template.HTML(title, list,
      `<h2>${title}</h2>${description}`,
      `<a href="create">Create</a>`);

    },

    URD : function(error, filelist){
      var filteredId = path.parse(queryData.id).base;
      fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
        var title = queryData.id;
        var sanitizedTitle = sanitizeHtml(title);
        var sanitizedDescription = sanitizeHtml(description, {
          allowedTags : ['script']
        });
        var list = template.list(filelist);
        var html = template.HTML(sanitizedTitle, list,
          `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
        `<a href="create">Create</a>
        <a href="/update?id=${sanitizedTitle}">update</a>
        <form action="delete_process" method="post" onsubmit="sdsd">
          <input type="hidden" name="id" value="${sanitizedTitle}">
          <input type="submit" value="delete">
        </form>`);
        response.end(html);
        response.writeHead(200);
        });
      }

  }