var metricsData = JSON.parse(data);

function convert2table(json) {
    // object.keys gets an array of the elements in the object
    // json[0] which object names to get
    var columns = Object.keys(json[0]);
    
    var headfoot = '';
    var bodyRows = '';
  
    function getPropertyName(string) {
      return string;
    }
  
    columns.map(function(col) {
      headfoot += '<th>' + getPropertyName(col) + '</th>';
    });
  
    json.map(function(row) {
      bodyRows += '<tr>';
  
      columns.map(function(colName) {
        bodyRows += '<td>' + row[colName] + '</td>';
      })
  
      bodyRows += '</tr>';
    });
  
    return '<table class="table table-striped table-bordered" style="width:100%" id="myTable">' +
           '<thead class="thead-dark"><tr>' +
           headfoot +
           '</tr></thead><tbody>' +
           bodyRows +
           '</tbody>' +
           '<tfoot class="thead-dark"><tr>' + 
           headfoot + '</tr></tfoot></table>';
  }
  
  document.getElementById('table').innerHTML = convert2table(metricsData);


  
