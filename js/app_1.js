// import data from table.js
const tableData = data;

// reference HTML table using D3
var tbody = d3.select("tbody");

function buildTable(data) {
    // this clears existing table
    tbody.html("");

//for each loops
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}


function handleClick() {
    //grab datetime value form filter. Def variable
    let date = d3.select("#datetime").property("value")
    let filteredData = tableData;

    //check dat was entered and filer the data. Create conditional 
    if (date){
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //rebuild table using 
    buildTable(filteredData)
};

d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);
