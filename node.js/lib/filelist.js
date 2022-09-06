var fs = require('fs');

module.exports = {
    fs.readdir('./data', function(error, filelist){
      var title = 'welcome';
      var description = 'Hello, Node.Js';

      // var list = templatelist(filelist);
      // var template = templateHTML(title, list,
      //   `<h2>${title}</h2>${description}`,
      //   `<a href="create">Create</a>`);

        var list = template.list(filelist);
        var html = template.HTML(title, list,
          `<h2>${title}</h2>${description}`,
          `<a href="create">Create</a>`);

      response.end(html);
      response.writeHead(200);
      });
    }