function initPlot() {
    const margin = { top: 20, right: 50, bottom: 60, left: 70 },
          width = 960 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;

    const svg = d3.select("#chart1").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

const x = d3.scaleLinear().range([0, width]);
const y = d3.scaleLinear().range([height, 0]);

d3.csv("https://raw.githubusercontent.com/Arjun10g/csv-file/main/data_weights.csv").then(data => {
    data.forEach(d => {
        d.Weeks = +d.Weeks;
        d.Weight_lbs = +d.Weight_lbs;
    });

    const minWeeks = d3.min(data, d => d.Weeks);
    const maxWeeks = d3.max(data, d => d.Weeks);
    const padding = (maxWeeks - minWeeks) * 0.05;

    x.domain([minWeeks - padding, maxWeeks + padding]);
    y.domain([0, d3.max(data, d => d.Weight_lbs)]);
  
  svg.append("g")             
        .attr("class", "grid")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x)
            .tickSize(-height)
            .tickFormat("") // Remove tick labels
        );

    // Add grid lines parallel to the X axis (horizontal grid lines)
    svg.append("g")             
        .attr("class", "grid")
        .call(d3.axisLeft(y)
            .tickSize(-width)
            .tickFormat("") // Remove tick labels
        );


    let displayedData = [data[0]]; // Start with the first data point
    const updatePoints = () => {
        // Update circles
        svg.selectAll(".point")
            .data(displayedData, d => d.Weeks)
            .enter().append("circle")
                .attr("class", "point")
                .attr("r", 12)
                .attr("cx", d => x(d.Weeks))
                .attr("cy", -margin.top) // Start above the chart
                .style("fill", "orange")
                .style("stroke", "black")
                .style('cursor', 'pointer')
                .merge(svg.selectAll(".point")) // Merge enter and update selections
                .transition().duration(800)
                .attr("cy", d => y(d.Weight_lbs));

        // Update text labels for weights
        svg.selectAll(".weight-label")
            .data(displayedData, d => d.Weeks)
            .enter().append("text")
                .attr("class", "weight-label")
                .attr("x", d => x(d.Weeks) + 20) // Offset to the right of the circle
                .attr("y", d => y(d.Weight_lbs) + 4) // Vertically aligned with the circle
                .text(d => d.Weight_lbs + " lbs")
                .style('font-size', '18px')
                .style('fill', 'black')
                .style('opacity', 0)
                .transition().duration(800)
                .style('opacity', 1);

        // Add click event to reveal next point
        if (displayedData.length < data.length) {
            svg.selectAll(".point")
                .on("click", () => {
                    displayedData.push(data[displayedData.length]); // Add the next data point
                    updatePoints();
gsap.from('.back',{opacity:0, yPercent:-100,scale:0 ,duration:1});                          currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
back.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
// Cycle through images
                });
        } else {
            svg.selectAll(".point").on("click", null); // Remove click event when all points are displayed
        }
    };

        updatePoints(); // Call to plot the initial point
        svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .style("font-size", "18px"); // Increase font size

    // Add the Y Axis
    svg.append("g")
        .call(d3.axisLeft(y))
        .selectAll("text")
        .style("font-size", "18px"); // Increase font size

    // X Axis Title
    svg.append("text")
        .attr("transform", `translate(${width / 2}, ${height + 40})`)
        .style("text-anchor", "middle")
        .style("font-size", "20px")
        .text("Weeks");

    // Y Axis Title
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -50)
        .attr("x", -height / 2)
        .style("text-anchor", "middle")
        .style("font-size", "20px")
        .text("Weight (lbs)");

    });
}

const backgroundImages = [
    'weight1.jpeg',
    'weight2.jpeg',
    'weight3.jpeg',
    'weight4.jpeg',
    'weight5.jpeg',
    'weight6.jpeg',
    'weight7.jpeg'
  ];
  let currentImageIndex = 0; // To keep track of which image to display next
  
  let back = document.querySelector('.back')
  
  back.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;