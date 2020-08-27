//Author: Dr. Liping Yang at Univerisity of New Mexico (lipingyang@unm.edu)

function export2txt() {

  d3.csv("np_st_webs_est_area_elev_conv.csv", function (csv_data) {

    // change the csv columns acconrding to you rown data
    var nested_data = d3.nest()
      .key(function (d) { return d.UNIT_NAME; })
      .key(function (d) { return d.UNIT_TYPE; })
      .key(function (d) { return d.state; })
      .key(function (d) { return d.nps_page; })
      .key(function (d) { return d.wiki_page; })
      .key(function (d) { return d.establish; })
      .key(function (d) { return d.parkSQmile; })
      .key(function (d) { return d.stateSQmile; })
      .key(function (d) { return d.parkSQkm; })
      .key(function (d) { return d.stateSQkm; })
      .key(function (d) { return d.elev_hi; })
      .key(function (d) { return d.elev_lo; })
      .key(function (d) { return d.relief; })
     


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




