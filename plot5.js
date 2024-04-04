function plot5(){
    // The svg
    const svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");
    
    // Adjust SVG height to fit the legend
    const legendHeight = 50; // Height of the legend
    const legendMargin = { top: 50, right: 30, bottom: 30, left: 30 };
    svg.attr("height", height + legendHeight + legendMargin.top + legendMargin.bottom);
    
    // Map and projection
    const projection = d3.geoMercator()
        .scale(70)
        .center([0, 20])
        .translate([width / 2, height / 2 - legendHeight]);
    const path = d3.geoPath().projection(projection);
    
    // Data and color scale
    const data = new Map();
    const colorScale = d3.scaleThreshold()
        .domain([0, 2, 10, 20, 50, 200, 1000])
        .range(d3.schemeReds[8]);
    
    // Define the tooltip
    const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("position", "absolute")
        .style("opacity", 0)
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "5px")
        .style("padding", "10px");
    
    // Load external data and boot
    Promise.all([
        d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"),
        d3.csv("https://raw.githubusercontent.com/Arjun10g/csv-file/main/gohan.csv", function(d) {
            data.set(d.code, +d.total);
        })
    ]).then(function(loadData) {
        let topo = loadData[0];
    
        // Draw the map
        svg.append("g")
            .selectAll("path")
            .data(topo.features)
            .enter()
            .append("path")
            .attr("d", d3.geoPath().projection(projection))
            .attr("fill", function(d) {
                return colorScale(data.get(d.id) || 0);
            })
            .style("stroke", "transparent")
            .attr("class", "Country")
            .style("opacity", .8)
            .on("mouseover", function(event, d) {
                tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                tooltip.html("Country: " + d.properties.name + "<br>Total: " + (data.get(d.id) || "No data"))
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY - 28) + "px");
                d3.select(this)
                    .style("opacity", 1)
                    .style("stroke", "black");
            })
            .on("mouseleave", function(d) {
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
                d3.selectAll(".Country")
                    .style("opacity", .8)
                    .style("stroke", "transparent");
            });
    
        // Create a group for the legend
        const legend = svg.append("g")
          .attr("class", "legend")
          .attr("transform", `translate(${legendMargin.left},${height - legendHeight + 30})`);
    
        // Legend title
        legend.append("text")
          .attr("class", "legend-title")
          .attr("x", width / 2)
          .attr("y", -10)
          .attr("text-anchor", "middle")
          .style("font-size", "14px")
          .style("font-weight", "bold")
          .text("Popularity Count");
    
        // Add colored rectangles and labels for the legend
        const legendItemSize = 25;
        colorScale.range().forEach((color, index) => {
            const domainValue = colorScale.domain()[index];
            legend.append("rect")
                .attr("x", width / 2 - (colorScale.range().length / 2 - index) * (legendItemSize + 5))
                .attr("y", 0)
                .attr("width", legendItemSize)
                .attr("height", legendItemSize)
                .style("fill", color);
    
            legend.append("text")
                .attr("x", width / 2 - (colorScale.range().length / 2 - index) * (legendItemSize + 5) + legendItemSize / 2)
                .attr("y", legendItemSize * 2)
                .style("text-anchor", "middle")
                .style("font-size", "12px")
                .text(domainValue);
        });
    });
    }

