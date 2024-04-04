function plot2() {
    const margin = { top: 50, right: 50, bottom: 70, left: 80 },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    const svg = d3.select("#chart2").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Load the CSV file
    d3.csv("https://raw.githubusercontent.com/Arjun10g/csv-file/main/data_school.csv").then(function (data) {
        // Convert data types
        data.forEach(d => {
            d.Weeks = +d.Weeks;
            d.score = +d.score;
        });

        // Setup the scales with padding
        const xScale = d3.scaleLinear()
            .domain([d3.min(data, d => d.Weeks) - 1, d3.max(data, d => d.Weeks) + 1]) // Adding padding
            .range([0, width]).nice();

        // Adjust the Y scale domain to add padding
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.score) * 1.05]) // Adding 5% padding on top
            .range([height, 0]).nice();
        // Add X and Y axis
        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(xScale).tickSizeOuter(0))
            .selectAll("text")
            .style("font-size", "18px"); // Increase font size by 4px

        svg.append("g")
            .attr("class", "y-axis") // Use this class to select the Y-axis later for updates
            .call(d3.axisLeft(yScale))
            .selectAll("text")
            .style("font-size", "18px"); // Increase font size by 4px

        // Add X and Y axis titles
        svg.append("text")
            .attr("text-anchor", "end")
            .attr("x", width / 2 + margin.left)
            .attr("y", height + margin.bottom - 20) // Adjust position for padding
            .text("Weeks")
            .style("font-size", "20px"); // Increase font size by 4px

        svg.append("text")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-90)")
            .attr("y", -margin.left + 20)
            .attr("x", -margin.top - height / 2 + 100)
            .text("Score")
            .style("font-size", "20px"); // Increase font size by 4px

        // Add grid lines with padding adjustments
        svg.append("g")
            .attr("class", "grid")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(xScale)
                .tickSize(-height)
                .tickFormat(""));

        svg.append("g")
            .attr("class", "grid")
            .call(d3.axisLeft(yScale)
                .tickSize(-width)
                .tickFormat(""));

        // Prepare the select dropdown options
        const types = Array.from(new Set(data.map(d => d.type)));
        d3.select("#typeSelect")
            .selectAll("option")
            .data(types)
            .enter()
            .append("option")
            .text(d => d)
            .attr("value", d => d);

        // Filter function
        function update(selectedType) {
            const filteredData = data.filter(d => d.type === selectedType);

            // Adjust yScale domain with consistent padding for both top and bottom
            const scoreExtent = d3.extent(filteredData, d => d.score);
            yScale.domain([scoreExtent[0] - (scoreExtent[1] - scoreExtent[0]) * 0.05, scoreExtent[1] * 1.05]).nice();

            // Update the Y axis and reapply font size styling
            svg.select(".y-axis")
                .transition()
                .duration(800)
                .call(d3.axisLeft(yScale))
                .selectAll("text")
                .style("font-size", "18px"); // Increase font size by 4px

            // Bind the filtered data to circles and handle enter, update, exit
            // Circles
            let points = svg.selectAll(".point")
                .data(filteredData, d => d.Weeks);

            // Exit
            points.exit()
                .transition()
                .duration(800)
                .attr("cy", height)
                .remove();

            // Update
            points.transition()
                .duration(800)
                .attr("cx", d => xScale(d.Weeks))
                .attr("cy", d => yScale(d.score));

            // Enter
            points.enter().append("circle")
                .attr("class", "point")
                .attr("r", 12)
                .attr("cx", d => xScale(d.Weeks))
                .attr("cy", d => yScale(d.score))
                .style("fill", "orange")
                .style('stroke', 'black')
                .transition()
                .duration(800)
                .attr("cy", d => yScale(d.score));

            // Bind the filtered data to texts and handle enter, update, exit
            // Texts for scores
            let scoreTexts = svg.selectAll(".score-text")
                .data(filteredData, d => d.Weeks);

            // Exit for texts
            scoreTexts.exit()
                .transition()
                .duration(800)
                .attr("y", height)
                .remove();

            // Update for texts
            scoreTexts.transition()
                .duration(800)
                .attr("x", d => xScale(d.Weeks) + 15) // Adjust as needed
                .attr("y", d => yScale(d.score) + 5) // Center text vertically with circle
                .text(d => d.score);

            // Enter for texts
            scoreTexts.enter().append("text")
                .attr("class", "score-text")
                .attr("x", d => xScale(d.Weeks) + 15) // Position text next to the circle
                .attr("y", d => yScale(d.score) + 5) // Adjust for a nice vertical alignment
                .text(d => d.score)
                .style("fill", "black")
                .style("font-size", "22px") // Increase font size by 4px
                .style("text-anchor", "start"); // Ensure text is right-aligned to the circle

            const typeIndex = types.indexOf(selectedType);
            if (typeIndex >= 0 && typeIndex < backgroundImages2.length) {
                if (typeIndex === 1| typeIndex === 3) {
                    back2.style.backgroundImage = `url(${backgroundImages2[typeIndex]})`;
                    back2.style.backgroundSize = 'contain';
                    back2.style.rotate = '0deg';
                } else {
                    back2.style.backgroundImage = `url(${backgroundImages2[typeIndex]})`;
                    back2.style.rotate = '90deg';
                }
            }
        }

        // Initial display
        update(types[0]);

        // Update visualization on select change
        d3.select("#typeSelect").on("change", function (event) {
            update(event.target.value);
        });
    });
};

const backgroundImages2 = [
    'obd1.gif',
    'trick1.jpeg',
    'dem1.gif',
    'ex1.gif',
]

const back2 = document.querySelector('.back2')


back2.style.background = `url(${backgroundImages2[0]})`;
back2.style.backgroundRepeat = 'no-repeat';
back2.style.backgroundSize = 'contain'; // Or 'contain', as per your requirement
back2.style.backgroundPosition = 'center';