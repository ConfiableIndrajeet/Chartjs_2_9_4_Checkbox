function checkbox(){
    var legend = document.getElementById('legend');
    chart.data.datasets.forEach((dataset, index) => {
      console.log(dataset); 
      let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = dataset.label;
        checkbox.value = index;
        checkbox.id = `dataset${index}`
        console.log(checkbox.value, checkbox.name, checkbox.id);
        checkbox.checked = true;
        let label = document.createElement('label');
        label.htmlFor = `dataset${index}`
        console.log(label.htmlFor);
        let labelText = document.createTextNode(dataset.label); // here we complete the legend and the checkbox
        label.appendChild(labelText);
        legend.appendChild(checkbox);
        legend.appendChild(label);

        let inputID = checkbox.id;
        datasetId = document.getElementById(inputID);

        datasetId.addEventListener('change', (e)=>{
            checkboxEffect(chart,e)
        })
    });
}

function checkboxEffect(chart,element){
    console.log('checkboxeff');
    const index = element.target.value;
    const cindex=parseInt(index);
    console.log(cindex, chart);
    var legendItem = chart.getDatasetMeta(cindex);
    console.log(legendItem);
    if(element.target.checked == false)
        legendItem.hidden = true;
    else
        legendItem.hidden = false;
    chart.update();
}

if(chart.options.legend.display === false)
    checkbox();