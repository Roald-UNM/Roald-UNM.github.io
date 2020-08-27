//Author: Dr. Liping Yang at Univerisity of New Mexico (lipingyang@unm.edu)

function export2txt() {

  d3.csv("example.csv", function (csv_data) {

    // change the csv columns acconrding to you rown data
    var nested_data = d3.nest()
      .key(function (d) { return d.mode; })
      .key(function (d) { return d.device; })
      .key(function (d) { return d.stb; })
      .entries(csv_data);

    console.log(csv_data);
    console.log(nested_data);

    const originalData = nested_data;

    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(originalData, null, 2)], {
      type: "text/plain"
    }));
    a.setAttribute("download", "data_3level.json");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

  });



}




