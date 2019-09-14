{"filter":false,"title":"main.js","tooltip":"/ajax.script/main.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":47,"column":0},"end":{"row":48,"column":0},"action":"remove","lines":["",""],"id":48}],[{"start":{"row":0,"column":0},"end":{"row":82,"column":0},"action":"remove","lines":["const baseURL = \"https://swapi.co/api/\";","","function getData(type, cb) {","","    var xhr = new XMLHttpRequest();","","    xhr.onreadystatechange = function() {","","        if (this.readyState == 4 && this.status == 200) {","","            cb(JSON.parse(this.responseText));","","        }","","    };","","","    xhr.open(\"GET\", baseURL + type + \"/\");","","    xhr.send();","","}","","","function getTableHeaders(obj) {","","    var tableHeaders = [];","","","","    Object.keys(obj).forEach(function(key) {","","        tableHeaders.push(`<td>${key}</td>`)","","    });","","","    return `<tr>${tableHeaders}</tr>`;","","}","","","function writeToDocument(type) {","","    var el = document.getElementById(\"data\");","","    el.innerHTML = \"\";","","","    getData(type, function(data) {","","        var tableRows = [];","","        data = data.results;","","        var tableHeaders = getTableHeaders(data[0]);","","","        data.forEach(function(item) {","","            var dataRow = [];","","","","            Object.keys(item).forEach(function(key) {","","                dataRow.push(`<td>${item[key]}</td>`);","","            });","","            tableRows.push(dataRow)","","        });","","","","        el.innerHTML = `<table>${tableHeaders}</table>`;","","    });","","}","",""],"id":49}],[{"start":{"row":0,"column":0},"end":{"row":134,"column":0},"action":"insert","lines":["Skip to content","","","  ","Pull requests ","Issues ","Marketplace ","Explore ","",""," ","","","Code Issues 0 Pull requests 0 Projects 0 Wiki Security Pulse Community ","Branch: master ","WorkingWithExternalResources/03-DataAndTheDOM/05-tabular_data_part_three/main.js ","Find file ","Copy path "," NielMc incorrect argument ","18783a8 on 19 Feb ","2 contributors "," "," ","47 lines (35 sloc) 1.07 KB ","Raw","Blame","History","","","const baseURL = \"https://swapi.co/api/\";","","","","function getData(type, cb) {","","    var xhr = new XMLHttpRequest();","","","","    xhr.onreadystatechange = function() {","","        if (this.readyState == 4 && this.status == 200) {","","            cb(JSON.parse(this.responseText));","","        }","","    };","","","","    xhr.open(\"GET\", baseURL + type + \"/\");","","    xhr.send();","","}","","","","function getTableHeaders(obj) {","","    var tableHeaders = [];","","","","    Object.keys(obj).forEach(function(key) {","","        tableHeaders.push(`<td>${key}</td>`)","","    });","","","","    return `<tr>${tableHeaders}</tr>`;","","}","","","","function writeToDocument(type) {","","    var el = document.getElementById(\"data\");","","    el.innerHTML = \"\";","","","","    getData(type, function(data) {","","        var tableRows = [];","","        data = data.results;","","        var tableHeaders = getTableHeaders(data[0]);","","","","        data.forEach(function(item) {","","            var dataRow = [];","","","","            Object.keys(item).forEach(function(key) {","","                dataRow.push(`<td>${item[key]}</td>`);","","            });","","            tableRows.push(dataRow)","","        });","","","","        el.innerHTML = `<table>${tableHeaders}</table>`;","","    });","","}","","© 2019 GitHub, Inc.","Terms","Privacy","Security","Status","Help","Contact GitHub","Pricing","API","Training","Blog","About","",""],"id":50}],[{"start":{"row":121,"column":0},"end":{"row":134,"column":0},"action":"remove","lines":["© 2019 GitHub, Inc.","Terms","Privacy","Security","Status","Help","Contact GitHub","Pricing","API","Training","Blog","About","",""],"id":51}],[{"start":{"row":0,"column":6},"end":{"row":25,"column":5},"action":"remove","lines":["o content","","","  ","Pull requests ","Issues ","Marketplace ","Explore ","",""," ","","","Code Issues 0 Pull requests 0 Projects 0 Wiki Security Pulse Community ","Branch: master ","WorkingWithExternalResources/03-DataAndTheDOM/05-tabular_data_part_three/main.js ","Find file ","Copy path "," NielMc incorrect argument ","18783a8 on 19 Feb ","2 contributors "," "," ","47 lines (35 sloc) 1.07 KB ","Raw","Blame"],"id":52}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":7},"action":"remove","lines":["Skip t","History"],"id":53}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"remove","lines":["",""],"id":54},{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]},{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"remove","lines":["",""]},{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"remove","lines":["",""],"id":55},{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":16,"column":0},"end":{"row":17,"column":0},"action":"remove","lines":["",""],"id":56}],[{"start":{"row":16,"column":0},"end":{"row":17,"column":0},"action":"remove","lines":["",""],"id":57}],[{"start":{"row":23,"column":0},"end":{"row":24,"column":0},"action":"remove","lines":["",""],"id":58},{"start":{"row":22,"column":0},"end":{"row":23,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":23,"column":31},"end":{"row":24,"column":0},"action":"remove","lines":["",""],"id":59}],[{"start":{"row":76,"column":0},"end":{"row":77,"column":0},"action":"remove","lines":["",""],"id":60},{"start":{"row":75,"column":0},"end":{"row":76,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":66,"column":53},"end":{"row":67,"column":0},"action":"remove","lines":["",""],"id":61}],[{"start":{"row":60,"column":37},"end":{"row":61,"column":0},"action":"remove","lines":["",""],"id":62}],[{"start":{"row":50,"column":34},"end":{"row":51,"column":0},"action":"remove","lines":["",""],"id":63}],[{"start":{"row":51,"column":27},"end":{"row":52,"column":0},"action":"remove","lines":["",""],"id":64}],[{"start":{"row":52,"column":28},"end":{"row":53,"column":0},"action":"remove","lines":["",""],"id":65}],[{"start":{"row":42,"column":32},"end":{"row":43,"column":0},"action":"remove","lines":["",""],"id":66}],[{"start":{"row":43,"column":45},"end":{"row":44,"column":0},"action":"remove","lines":["",""],"id":67}],[{"start":{"row":45,"column":0},"end":{"row":46,"column":0},"action":"remove","lines":["",""],"id":68},{"start":{"row":44,"column":22},"end":{"row":45,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":51,"column":0},"end":{"row":52,"column":0},"action":"remove","lines":["",""],"id":69},{"start":{"row":50,"column":0},"end":{"row":51,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":53,"column":0},"end":{"row":54,"column":0},"action":"remove","lines":["",""],"id":70},{"start":{"row":52,"column":29},"end":{"row":53,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":71},{"start":{"row":67,"column":0},"end":{"row":68,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":39,"column":0},"end":{"row":40,"column":0},"action":"remove","lines":["",""],"id":72}],[{"start":{"row":53,"column":54},"end":{"row":54,"column":0},"action":"insert","lines":["",""],"id":73},{"start":{"row":54,"column":0},"end":{"row":54,"column":16},"action":"insert","lines":["                "]}],[{"start":{"row":54,"column":16},"end":{"row":54,"column":17},"action":"insert","lines":["c"],"id":74},{"start":{"row":54,"column":17},"end":{"row":54,"column":18},"action":"insert","lines":["o"]},{"start":{"row":54,"column":18},"end":{"row":54,"column":19},"action":"insert","lines":["n"]},{"start":{"row":54,"column":19},"end":{"row":54,"column":20},"action":"insert","lines":["s"]},{"start":{"row":54,"column":20},"end":{"row":54,"column":21},"action":"insert","lines":["o"]},{"start":{"row":54,"column":21},"end":{"row":54,"column":22},"action":"insert","lines":["l"]}],[{"start":{"row":54,"column":22},"end":{"row":54,"column":23},"action":"insert","lines":["e"],"id":75},{"start":{"row":54,"column":23},"end":{"row":54,"column":24},"action":"insert","lines":["."]},{"start":{"row":54,"column":24},"end":{"row":54,"column":25},"action":"insert","lines":["l"]}],[{"start":{"row":54,"column":25},"end":{"row":54,"column":26},"action":"insert","lines":["o"],"id":76},{"start":{"row":54,"column":26},"end":{"row":54,"column":27},"action":"insert","lines":["g"]}],[{"start":{"row":54,"column":27},"end":{"row":54,"column":28},"action":"insert","lines":["*"],"id":77}],[{"start":{"row":54,"column":27},"end":{"row":54,"column":28},"action":"remove","lines":["*"],"id":78}],[{"start":{"row":54,"column":27},"end":{"row":54,"column":29},"action":"insert","lines":["()"],"id":79}],[{"start":{"row":54,"column":28},"end":{"row":54,"column":29},"action":"insert","lines":["k"],"id":80},{"start":{"row":54,"column":29},"end":{"row":54,"column":30},"action":"insert","lines":["e"]},{"start":{"row":54,"column":30},"end":{"row":54,"column":31},"action":"insert","lines":["y"]}],[{"start":{"row":54,"column":32},"end":{"row":54,"column":33},"action":"insert","lines":[";"],"id":81}],[{"start":{"row":44,"column":3},"end":{"row":67,"column":0},"action":"remove","lines":[" getData(type, function(data) {","        var tableRows = [];","        data = data.results;","        var tableHeaders = getTableHeaders(data[0]);","","        data.forEach(function(item) {","            var dataRow = [];","","            Object.keys(item).forEach(function(key) {","                dataRow.push(`<td>${item[key]}</td>`);","                console.log(key);","","            });","","            tableRows.push(dataRow)","","        });","","        el.innerHTML = `<table>${tableHeaders}</table>`;","","    });","","}",""],"id":82}],[{"start":{"row":44,"column":3},"end":{"row":76,"column":1},"action":"insert","lines":["getData(type, function(data) {","","        var tableRows = [];","","        data = data.results;","","        var tableHeaders = getTableHeaders(data[0]);","","","","        data.forEach(function(item) {","","            var dataRow = [];","","","","            Object.keys(item).forEach(function(key) {","","                dataRow.push(`<td>${item[key]}</td>`);","","            });","","            tableRows.push(dataRow)","","        });","","","","        el.innerHTML = `<table>${tableHeaders}</table>`;","","    });","","}"],"id":83}],[{"start":{"row":72,"column":56},"end":{"row":73,"column":0},"action":"remove","lines":["",""],"id":84}],[{"start":{"row":70,"column":0},"end":{"row":71,"column":0},"action":"remove","lines":["",""],"id":85},{"start":{"row":69,"column":0},"end":{"row":70,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":66,"column":35},"end":{"row":67,"column":0},"action":"remove","lines":["",""],"id":86}],[{"start":{"row":64,"column":15},"end":{"row":65,"column":0},"action":"remove","lines":["",""],"id":87}],[{"start":{"row":62,"column":6},"end":{"row":62,"column":7},"action":"remove","lines":[" "],"id":88}],[{"start":{"row":62,"column":6},"end":{"row":62,"column":7},"action":"insert","lines":[" "],"id":89}],[{"start":{"row":60,"column":53},"end":{"row":61,"column":0},"action":"remove","lines":["",""],"id":90}],[{"start":{"row":58,"column":0},"end":{"row":59,"column":0},"action":"remove","lines":["",""],"id":91},{"start":{"row":57,"column":0},"end":{"row":58,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":54,"column":37},"end":{"row":55,"column":0},"action":"remove","lines":["",""],"id":92}],[{"start":{"row":51,"column":0},"end":{"row":52,"column":0},"action":"remove","lines":["",""],"id":93}],[{"start":{"row":48,"column":28},"end":{"row":49,"column":0},"action":"remove","lines":["",""],"id":94}],[{"start":{"row":24,"column":0},"end":{"row":25,"column":0},"action":"remove","lines":["",""],"id":95}],[{"start":{"row":32,"column":0},"end":{"row":33,"column":0},"action":"remove","lines":["",""],"id":96}],[{"start":{"row":36,"column":0},"end":{"row":37,"column":0},"action":"remove","lines":["",""],"id":97}],[{"start":{"row":52,"column":11},"end":{"row":62,"column":1},"action":"remove","lines":[" Object.keys(item).forEach(function(key) {","                dataRow.push(`<td>${item[key]}</td>`);","","            });","            tableRows.push(dataRow)","        });","","        el.innerHTML = `<table>${tableHeaders}</table>`;","    });","","}"],"id":98}],[{"start":{"row":52,"column":11},"end":{"row":72,"column":1},"action":"insert","lines":["Object.keys(item).forEach(function(key) {","","                var rowData = item[key].toString();","","                var truncatedData = rowData.substring(0, 15);","","                dataRow.push(`<td>${truncatedData}</td>`);","","            });","","            tableRows.push(`<tr>${dataRow}</tr>`);","","        });","","","","        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>${pagination}`;","","    });","","}"],"id":99}],[{"start":{"row":65,"column":0},"end":{"row":66,"column":0},"action":"remove","lines":["",""],"id":100}],[{"start":{"row":65,"column":0},"end":{"row":66,"column":0},"action":"remove","lines":["",""],"id":101}],[{"start":{"row":56,"column":61},"end":{"row":57,"column":0},"action":"remove","lines":["",""],"id":102}],[{"start":{"row":54,"column":51},"end":{"row":55,"column":0},"action":"remove","lines":["",""],"id":103}],[{"start":{"row":52,"column":52},"end":{"row":53,"column":0},"action":"remove","lines":["",""],"id":104}],[{"start":{"row":41,"column":33},"end":{"row":42,"column":0},"action":"remove","lines":["",""],"id":105}],[{"start":{"row":42,"column":27},"end":{"row":43,"column":0},"action":"remove","lines":["",""],"id":106}],[{"start":{"row":45,"column":0},"end":{"row":46,"column":0},"action":"remove","lines":["",""],"id":107}],[{"start":{"row":0,"column":0},"end":{"row":64,"column":1},"action":"remove","lines":["const baseURL = \"https://swapi.co/api/\";","","function getData(type, cb) {","","    var xhr = new XMLHttpRequest();","","    xhr.onreadystatechange = function() {","","        if (this.readyState == 4 && this.status == 200) {","","            cb(JSON.parse(this.responseText));","","        }","","    };","","    xhr.open(\"GET\", baseURL + type + \"/\");","","    xhr.send();","","}","","function getTableHeaders(obj) {","    var tableHeaders = [];","","","    Object.keys(obj).forEach(function(key) {","","        tableHeaders.push(`<td>${key}</td>`)","","    });","","","    return `<tr>${tableHeaders}</tr>`;","","}","","function writeToDocument(type) {","    var el = document.getElementById(\"data\");","    el.innerHTML = \"\";","","   getData(type, function(data) {","        var tableRows = [];","        data = data.results;","        var tableHeaders = getTableHeaders(data[0]);","","        data.forEach(function(item) {","            var dataRow = [];","","           Object.keys(item).forEach(function(key) {","                var rowData = item[key].toString();","                var truncatedData = rowData.substring(0, 15);","                dataRow.push(`<td>${truncatedData}</td>`);","","            });","","            tableRows.push(`<tr>${dataRow}</tr>`);","","        });","","        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>${pagination}`;","","    });","","}"],"id":108}],[{"start":{"row":0,"column":0},"end":{"row":134,"column":0},"action":"insert","lines":["Skip to content","","","  ","Pull requests ","Issues ","Marketplace ","Explore ","",""," ","","","Code Issues 0 Pull requests 0 Projects 0 Wiki Security Pulse Community ","Branch: master ","WorkingWithExternalResources/03-DataAndTheDOM/05-tabular_data_part_three/main.js ","Find file ","Copy path "," NielMc incorrect argument ","18783a8 on 19 Feb ","2 contributors "," "," ","47 lines (35 sloc) 1.07 KB ","Raw","Blame","History","","","const baseURL = \"https://swapi.co/api/\";","","","","function getData(type, cb) {","","    var xhr = new XMLHttpRequest();","","","","    xhr.onreadystatechange = function() {","","        if (this.readyState == 4 && this.status == 200) {","","            cb(JSON.parse(this.responseText));","","        }","","    };","","","","    xhr.open(\"GET\", baseURL + type + \"/\");","","    xhr.send();","","}","","","","function getTableHeaders(obj) {","","    var tableHeaders = [];","","","","    Object.keys(obj).forEach(function(key) {","","        tableHeaders.push(`<td>${key}</td>`)","","    });","","","","    return `<tr>${tableHeaders}</tr>`;","","}","","","","function writeToDocument(type) {","","    var el = document.getElementById(\"data\");","","    el.innerHTML = \"\";","","","","    getData(type, function(data) {","","        var tableRows = [];","","        data = data.results;","","        var tableHeaders = getTableHeaders(data[0]);","","","","        data.forEach(function(item) {","","            var dataRow = [];","","","","            Object.keys(item).forEach(function(key) {","","                dataRow.push(`<td>${item[key]}</td>`);","","            });","","            tableRows.push(dataRow)","","        });","","","","        el.innerHTML = `<table>${tableHeaders}</table>`;","","    });","","}","","© 2019 GitHub, Inc.","Terms","Privacy","Security","Status","Help","Contact GitHub","Pricing","API","Training","Blog","About","",""],"id":109}],[{"start":{"row":121,"column":0},"end":{"row":134,"column":0},"action":"remove","lines":["© 2019 GitHub, Inc.","Terms","Privacy","Security","Status","Help","Contact GitHub","Pricing","API","Training","Blog","About","",""],"id":110}],[{"start":{"row":0,"column":0},"end":{"row":26,"column":7},"action":"remove","lines":["Skip to content","","","  ","Pull requests ","Issues ","Marketplace ","Explore ","",""," ","","","Code Issues 0 Pull requests 0 Projects 0 Wiki Security Pulse Community ","Branch: master ","WorkingWithExternalResources/03-DataAndTheDOM/05-tabular_data_part_three/main.js ","Find file ","Copy path "," NielMc incorrect argument ","18783a8 on 19 Feb ","2 contributors "," "," ","47 lines (35 sloc) 1.07 KB ","Raw","Blame","History"],"id":111}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"remove","lines":["",""],"id":112},{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]},{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"remove","lines":["",""],"id":113}],[{"start":{"row":21,"column":42},"end":{"row":22,"column":0},"action":"remove","lines":["",""],"id":114}],[{"start":{"row":19,"column":0},"end":{"row":20,"column":0},"action":"remove","lines":["",""],"id":115}],[{"start":{"row":25,"column":0},"end":{"row":26,"column":0},"action":"remove","lines":["",""],"id":116}],[{"start":{"row":26,"column":31},"end":{"row":27,"column":0},"action":"remove","lines":["",""],"id":117}],[{"start":{"row":31,"column":44},"end":{"row":32,"column":0},"action":"remove","lines":["",""],"id":118}],[{"start":{"row":36,"column":0},"end":{"row":37,"column":0},"action":"remove","lines":["",""],"id":119}],[{"start":{"row":76,"column":0},"end":{"row":77,"column":0},"action":"remove","lines":["",""],"id":120}],[{"start":{"row":76,"column":0},"end":{"row":77,"column":0},"action":"remove","lines":["",""],"id":121}],[{"start":{"row":73,"column":35},"end":{"row":74,"column":0},"action":"remove","lines":["",""],"id":122}],[{"start":{"row":67,"column":53},"end":{"row":68,"column":0},"action":"remove","lines":["",""],"id":123}],[{"start":{"row":61,"column":37},"end":{"row":62,"column":0},"action":"remove","lines":["",""],"id":124}],[{"start":{"row":0,"column":0},"end":{"row":80,"column":0},"action":"remove","lines":["const baseURL = \"https://swapi.co/api/\";","","","function getData(type, cb) {","","    var xhr = new XMLHttpRequest();","","","","    xhr.onreadystatechange = function() {","","        if (this.readyState == 4 && this.status == 200) {","","            cb(JSON.parse(this.responseText));","","        }","","    };","","","    xhr.open(\"GET\", baseURL + type + \"/\");","    xhr.send();","","}","","","function getTableHeaders(obj) {","    var tableHeaders = [];","","","","    Object.keys(obj).forEach(function(key) {","        tableHeaders.push(`<td>${key}</td>`)","","    });","","","    return `<tr>${tableHeaders}</tr>`;","","}","","","","function writeToDocument(type) {","","    var el = document.getElementById(\"data\");","","    el.innerHTML = \"\";","","","","    getData(type, function(data) {","","        var tableRows = [];","","        data = data.results;","","        var tableHeaders = getTableHeaders(data[0]);","","","","        data.forEach(function(item) {","            var dataRow = [];","","","","            Object.keys(item).forEach(function(key) {","                dataRow.push(`<td>${item[key]}</td>`);","","            });","","            tableRows.push(dataRow)","        });","","        el.innerHTML = `<table>${tableHeaders}</table>`;","","    });","","}","",""],"id":125}],[{"start":{"row":0,"column":0},"end":{"row":162,"column":0},"action":"insert","lines":["Skip to content","","","  ","Pull requests ","Issues ","Marketplace ","Explore ","",""," ","","","Code Issues 0 Pull requests 0 Projects 0 Wiki Security Pulse Community ","Branch: master ","WorkingWithExternalResources/03-DataAndTheDOM/06-pagination/main.js ","Find file ","Copy path "," aaronsnig501 Update README ","a763538 on 17 Dec 2018 ","1 contributor ","61 lines (49 sloc) 1.74 KB ","Raw","Blame","History","","","function getData(url, cb) {","","    var xhr = new XMLHttpRequest();","","","","    xhr.onreadystatechange = function() {","","        if (this.readyState == 4 && this.status == 200) {","","            cb(JSON.parse(this.responseText));","","        }","","    };","","","","    xhr.open(\"GET\", url);","","    xhr.send();","","}","","","","function getTableHeaders(obj) {","","    var tableHeaders = [];","","","","    Object.keys(obj).forEach(function(key) {","","        tableHeaders.push(`<td>${key}</td>`);","","    });","","","","    return `<tr>${tableHeaders}</tr>`;","","}","","","","function generatePaginationButtons(next, prev) {","","    if (next && prev) {","","        return `<button onclick=\"writeToDocument('${prev}')\">Previous</button>","","                <button onclick=\"writeToDocument('${next}')\">Next</button>`;","","    } else if (next && !prev) {","","        return `<button onclick=\"writeToDocument('${next}')\">Next</button>`;","","    } else if (!next && prev) {","","        return `<button onclick=\"writeToDocument('${prev}')\">Previous</button>`;","","    }","","}","","","","function writeToDocument(url) {","","    var tableRows = [];","","    var el = document.getElementById(\"data\");","","","","    getData(url, function(data) {","","        var pagination = \"\";","","","","        if (data.next || data.previous) {","","            pagination = generatePaginationButtons(data.next, data.previous);","","        }","","        data = data.results;","","        var tableHeaders = getTableHeaders(data[0]);","","","","        data.forEach(function(item) {","","            var dataRow = [];","","","","            Object.keys(item).forEach(function(key) {","","                var rowData = item[key].toString();","","                var truncatedData = rowData.substring(0, 15);","","                dataRow.push(`<td>${truncatedData}</td>`);","","            });","","            tableRows.push(`<tr>${dataRow}</tr>`);","","        });","","","","        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>${pagination}`;","","    });","","}","","© 2019 GitHub, Inc.","Terms","Privacy","Security","Status","Help","Contact GitHub","Pricing","API","Training","Blog","About","",""],"id":126}],[{"start":{"row":148,"column":0},"end":{"row":162,"column":0},"action":"remove","lines":["","© 2019 GitHub, Inc.","Terms","Privacy","Security","Status","Help","Contact GitHub","Pricing","API","Training","Blog","About","",""],"id":127}],[{"start":{"row":141,"column":0},"end":{"row":142,"column":0},"action":"remove","lines":["",""],"id":128},{"start":{"row":140,"column":0},"end":{"row":141,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":95,"column":31},"end":{"row":96,"column":0},"action":"remove","lines":["",""],"id":129}],[{"start":{"row":99,"column":0},"end":{"row":100,"column":0},"action":"remove","lines":["",""],"id":130}],[{"start":{"row":99,"column":0},"end":{"row":100,"column":0},"action":"remove","lines":["",""],"id":131}],[{"start":{"row":100,"column":33},"end":{"row":101,"column":0},"action":"remove","lines":["",""],"id":132}],[{"start":{"row":98,"column":45},"end":{"row":99,"column":0},"action":"remove","lines":["",""],"id":133}],[{"start":{"row":93,"column":0},"end":{"row":94,"column":0},"action":"remove","lines":["",""],"id":134}],[{"start":{"row":0,"column":0},"end":{"row":24,"column":7},"action":"remove","lines":["Skip to content","","","  ","Pull requests ","Issues ","Marketplace ","Explore ","",""," ","","","Code Issues 0 Pull requests 0 Projects 0 Wiki Security Pulse Community ","Branch: master ","WorkingWithExternalResources/03-DataAndTheDOM/06-pagination/main.js ","Find file ","Copy path "," aaronsnig501 Update README ","a763538 on 17 Dec 2018 ","1 contributor ","61 lines (49 sloc) 1.74 KB ","Raw","Blame","History"],"id":135}],[{"start":{"row":21,"column":25},"end":{"row":22,"column":0},"action":"remove","lines":["",""],"id":136}],[{"start":{"row":18,"column":0},"end":{"row":19,"column":0},"action":"remove","lines":["",""],"id":137}],[{"start":{"row":25,"column":0},"end":{"row":26,"column":0},"action":"remove","lines":["",""],"id":138}],[{"start":{"row":26,"column":31},"end":{"row":27,"column":0},"action":"remove","lines":["",""],"id":139}],[{"start":{"row":11,"column":57},"end":{"row":12,"column":0},"action":"remove","lines":["",""],"id":140}],[{"start":{"row":9,"column":41},"end":{"row":10,"column":0},"action":"remove","lines":["",""],"id":141}],[{"start":{"row":3,"column":27},"end":{"row":4,"column":0},"action":"remove","lines":["",""],"id":142}],[{"start":{"row":72,"column":41},"end":{"row":73,"column":0},"action":"remove","lines":["",""],"id":143}],[{"start":{"row":77,"column":28},"end":{"row":78,"column":0},"action":"remove","lines":["",""],"id":144}],[{"start":{"row":82,"column":37},"end":{"row":83,"column":0},"action":"remove","lines":["",""],"id":145}],[{"start":{"row":87,"column":53},"end":{"row":88,"column":0},"action":"remove","lines":["",""],"id":146}],[{"start":{"row":88,"column":51},"end":{"row":89,"column":0},"action":"remove","lines":["",""],"id":147}],[{"start":{"row":89,"column":61},"end":{"row":90,"column":0},"action":"remove","lines":["",""],"id":148}]]},"ace":{"folds":[],"scrolltop":1163,"scrollleft":0,"selection":{"start":{"row":89,"column":61},"end":{"row":89,"column":61},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":5,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1568481263788,"hash":"b61b722f5d05b06ff9564b21b93b2725eedc0ab0"}