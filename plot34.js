const puppyEras = [
    // Raptor Era (Begins week 10), NoSleep Era (Ends week 11), Rebel Era (Begins week 18)
    { Weeks: 8, Era: "Raptor", YesNo: 0 }, { Weeks: 8, Era: "NoSleep", YesNo: 1 }, { Weeks: 8, Era: "Rebel", YesNo: 0 },
    { Weeks: 9, Era: "Raptor", YesNo: 0 }, { Weeks: 9, Era: "NoSleep", YesNo: 1 }, { Weeks: 9, Era: "Rebel", YesNo: 0 },
    { Weeks: 10, Era: "Raptor", YesNo: 1 }, { Weeks: 10, Era: "NoSleep", YesNo: 1 }, { Weeks: 10, Era: "Rebel", YesNo: 0 },
    { Weeks: 11, Era: "Raptor", YesNo: 1 }, { Weeks: 11, Era: "NoSleep", YesNo: 1 }, { Weeks: 11, Era: "Rebel", YesNo: 0 },
    { Weeks: 12, Era: "Raptor", YesNo: 1 }, { Weeks: 12, Era: "NoSleep", YesNo: 0 }, { Weeks: 12, Era: "Rebel", YesNo: 0 },
    { Weeks: 13, Era: "Raptor", YesNo: 1 }, { Weeks: 13, Era: "NoSleep", YesNo: 0 }, { Weeks: 13, Era: "Rebel", YesNo: 0 },
    { Weeks: 14, Era: "Raptor", YesNo: 1 }, { Weeks: 14, Era: "NoSleep", YesNo: 0 }, { Weeks: 14, Era: "Rebel", YesNo: 0 },
    { Weeks: 15, Era: "Raptor", YesNo: 1 }, { Weeks: 15, Era: "NoSleep", YesNo: 0 }, { Weeks: 15, Era: "Rebel", YesNo: 0 },
    { Weeks: 16, Era: "Raptor", YesNo: 1 }, { Weeks: 16, Era: "NoSleep", YesNo: 0 }, { Weeks: 16, Era: "Rebel", YesNo: 0 },
    { Weeks: 17, Era: "Raptor", YesNo: 1 }, { Weeks: 17, Era: "NoSleep", YesNo: 0 }, { Weeks: 17, Era: "Rebel", YesNo: 0 },
    { Weeks: 18, Era: "Raptor", YesNo: 1 }, { Weeks: 18, Era: "NoSleep", YesNo: 0 }, { Weeks: 18, Era: "Rebel", YesNo: 1 },
    { Weeks: 19, Era: "Raptor", YesNo: 1 }, { Weeks: 19, Era: "NoSleep", YesNo: 0 }, { Weeks: 19, Era: "Rebel", YesNo: 1 },
    { Weeks: 20, Era: "Raptor", YesNo: 1 }, { Weeks: 20, Era: "NoSleep", YesNo: 0 }, { Weeks: 20, Era: "Rebel", YesNo: 1 },
    { Weeks: 21, Era: "Raptor", YesNo: 1 }, { Weeks: 21, Era: "NoSleep", YesNo: 0 }, { Weeks: 21, Era: "Rebel", YesNo: 1 },
    { Weeks: 22, Era: "Raptor", YesNo: 1 }, { Weeks: 22, Era: "NoSleep", YesNo: 0 }, { Weeks: 22, Era: "Rebel", YesNo: 1 },
    { Weeks: 23, Era: "Raptor", YesNo: 1 }, { Weeks: 23, Era: "NoSleep", YesNo: 0 }, { Weeks: 23, Era: "Rebel", YesNo: 1 },
    { Weeks: 24, Era: "Raptor", YesNo: 1 }, { Weeks: 24, Era: "NoSleep", YesNo: 0 }, { Weeks: 24, Era: "Rebel", YesNo: 1 },
  ];
  
  const eraBackgroundImages = {
    "Raptor": "raptor.jpeg",
    "NoSleep": "nosleep.jpeg",
    "Rebel": "rebel.jpeg"
  };
  
  
  const data = [
    { Weeks: 8, day: 1, sleep: 0 },
    { Weeks: 8, day: 2, sleep: 0 },
    { Weeks: 8, day: 3, sleep: 0 },
    { Weeks: 8, day: 4, sleep: 0 },
    { Weeks: 8, day: 5, sleep: 0 },
    { Weeks: 8, day: 6, sleep: 0 },
    { Weeks: 8, day: 7, sleep: 0 },
    { Weeks: 8, day: 8, sleep: 0 },
    { Weeks: 8, day: 9, sleep: 0 },
    { Weeks: 8, day: 10, sleep: 0 },
    { Weeks: 8, day: 11, sleep: 0 },
    { Weeks: 8, day: 12, sleep: 0 },
    { Weeks: 8, day: 13, sleep: 0 },
    { Weeks: 8, day: 14, sleep: 0 },
    { Weeks: 8, day: 15, sleep: 0 },
    { Weeks: 8, day: 16, sleep: 1 },
    { Weeks: 8, day: 17, sleep: 0 },
    { Weeks: 8, day: 18, sleep: 1 },
    { Weeks: 8, day: 19, sleep: 0 },
    { Weeks: 8, day: 20, sleep: 1 },
    { Weeks: 8, day: 21, sleep: 1 },
    { Weeks: 8, day: 22, sleep: 0 },
    { Weeks: 8, day: 23, sleep: 0 },
    { Weeks: 8, day: 24, sleep: 0 },
    { Weeks: 8, day: 25, sleep: 1 },
    { Weeks: 8, day: 26, sleep: 1 },
    { Weeks: 8, day: 27, sleep: 1 },
    { Weeks: 8, day: 28, sleep: 1 },
    { Weeks: 8, day: 29, sleep: 0 },
    { Weeks: 8, day: 30, sleep: 0 },
    { Weeks: 12, day: 1, sleep: 1 },
    { Weeks: 12, day: 2, sleep: 1 },
    { Weeks: 12, day: 3, sleep: 1 },
    { Weeks: 12, day: 4, sleep: 1 },
    { Weeks: 12, day: 5, sleep: 1 },
    { Weeks: 12, day: 6, sleep: 0 },
    { Weeks: 12, day: 7, sleep: 1 },
    { Weeks: 12, day: 8, sleep: 1 },
    { Weeks: 12, day: 9, sleep: 1 },
    { Weeks: 12, day: 10, sleep: 1 },
    { Weeks: 12, day: 11, sleep: 0 },
    { Weeks: 12, day: 12, sleep: 1 },
    { Weeks: 12, day: 13, sleep: 1 },
    { Weeks: 12, day: 14, sleep: 1 },
    { Weeks: 12, day: 15, sleep: 1 },
    { Weeks: 12, day: 16, sleep: 1 },
    { Weeks: 12, day: 17, sleep: 1 },
    { Weeks: 12, day: 18, sleep: 0 },
    { Weeks: 12, day: 19, sleep: 0 },
    { Weeks: 12, day: 20, sleep: 0 },
    { Weeks: 12, day: 21, sleep: 1 },
    { Weeks: 12, day: 22, sleep: 1 },
    { Weeks: 12, day: 23, sleep: 1 },
    { Weeks: 12, day: 24, sleep: 1 },
    { Weeks: 12, day: 25, sleep: 1 },
    { Weeks: 12, day: 26, sleep: 0 },
    { Weeks: 12, day: 27, sleep: 1 },
    { Weeks: 12, day: 28, sleep: 1 },
    { Weeks: 12, day: 29, sleep: 1 },
    { Weeks: 12, day: 30, sleep: 0 },
    { Weeks: 16, day: 1, sleep: 0 },
    { Weeks: 16, day: 2, sleep: 1 },
    { Weeks: 16, day: 3, sleep: 1 },
    { Weeks: 16, day: 4, sleep: 1 },
    { Weeks: 16, day: 5, sleep: 0 },
    { Weeks: 16, day: 6, sleep: 1 },
    { Weeks: 16, day: 7, sleep: 1 },
    { Weeks: 16, day: 8, sleep: 0 },
    { Weeks: 16, day: 9, sleep: 1 },
    { Weeks: 16, day: 10, sleep: 0 },
    { Weeks: 16, day: 11, sleep: 1 },
    { Weeks: 16, day: 12, sleep: 1 },
    { Weeks: 16, day: 13, sleep: 1 },
    { Weeks: 16, day: 14, sleep: 1 },
    { Weeks: 16, day: 15, sleep: 1 },
    { Weeks: 16, day: 16, sleep: 1 },
    { Weeks: 16, day: 17, sleep: 1 },
    { Weeks: 16, day: 18, sleep: 1 },
    { Weeks: 16, day: 19, sleep: 1 },
    { Weeks: 16, day: 20, sleep: 1 },
    { Weeks: 16, day: 21, sleep: 1 },
    { Weeks: 16, day: 22, sleep: 0 },
    { Weeks: 16, day: 23, sleep: 1 },
    { Weeks: 16, day: 24, sleep: 1 },
    { Weeks: 16, day: 25, sleep: 1 },
    { Weeks: 16, day: 26, sleep: 1 },
    { Weeks: 16, day: 27, sleep: 1 },
    { Weeks: 16, day: 28, sleep: 1 },
    { Weeks: 16, day: 29, sleep: 1 },
    { Weeks: 16, day: 30, sleep: 1 },
    { Weeks: 20, day: 1, sleep: 1 },
    { Weeks: 20, day: 2, sleep: 1 },
    { Weeks: 20, day: 3, sleep: 1 },
    { Weeks: 20, day: 4, sleep: 1 },
    { Weeks: 20, day: 5, sleep: 1 },
    { Weeks: 20, day: 6, sleep: 1 },
    { Weeks: 20, day: 7, sleep: 1 },
    { Weeks: 20, day: 8, sleep: 1 },
    { Weeks: 20, day: 9, sleep: 1 },
    { Weeks: 20, day: 10, sleep: 1 },
    { Weeks: 20, day: 11, sleep: 1 },
    { Weeks: 20, day: 12, sleep: 1 },
    { Weeks: 20, day: 13, sleep: 1 },
    { Weeks: 20, day: 14, sleep: 1 },
    { Weeks: 20, day: 15, sleep: 1 },
    { Weeks: 20, day: 16, sleep: 1 },
    { Weeks: 20, day: 17, sleep: 1 },
    { Weeks: 20, day: 18, sleep: 1 },
    { Weeks: 20, day: 19, sleep: 1 },
    { Weeks: 20, day: 20, sleep: 1 },
    { Weeks: 20, day: 21, sleep: 1 },
    { Weeks: 20, day: 22, sleep: 1 },
    { Weeks: 20, day: 23, sleep: 1 },
    { Weeks: 20, day: 24, sleep: 1 },
    { Weeks: 20, day: 25, sleep: 1 },
    { Weeks: 20, day: 26, sleep: 1 },
    { Weeks: 20, day: 27, sleep: 1 },
    { Weeks: 20, day: 28, sleep: 1 },
    { Weeks: 20, day: 29, sleep: 1 },
    { Weeks: 20, day: 30, sleep: 1 },
  ];
  
  function initializeFirstPlot() {
      const margin = { top: 20, right: 70, bottom: 80, left: 80 },
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;
  
      const svg = d3.select("#chart3").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform", `translate(${margin.left},${margin.top})`);
  
      const x = d3.scaleBand().range([0, width]).domain(puppyEras.map(d => d.Weeks)).padding(0.25);
      const y = d3.scaleBand().range([height, 0]).domain(["Raptor", "NoSleep", "Rebel"]).padding(0.1);
  
      svg.append("g")
          .attr("transform", `translate(0,${height})`)
          .call(d3.axisBottom(x))
        .selectAll("text")
          .style("font-size", "16px");
  
      svg.append("text")
          .attr("transform", "translate(" + (width / 2) + " ," + (height + margin.top + 20) + ")")
          .style("text-anchor", "middle")
          .style("font-size", "20px")
          .text("Weeks");
  
      const yAxis = svg.append("g").call(d3.axisLeft(y));
  
      yAxis.selectAll("text")
          .style("cursor", "pointer")
          .style('font-size','16px')
          .on("click", function(event, d) {
              let filteredData = puppyEras.filter(data => data.Era === d);
              svg.selectAll(`.tile-${d.replace(/\s+/g, '-')}`)
                  .data(filteredData, data => data.Weeks)
                  .join(
                    enter => enter.append("rect")
                              .attr("class", `tile tile-${d.replace(/\s+/g, '-')}`)
                              .attr("x", d => x(d.Weeks))
                              .attr("y", d => y(d.Era))
                              .attr("width", x.bandwidth())
                              .attr("height", y.bandwidth())
                              .style("fill", d => d.YesNo === 1 ? "tomato" : "skyblue")
                              .style("stroke", "black")
                              .style("opacity", 0)
                              .call(enter => enter.transition().duration(2000).delay((d, i) => i * 200).style("opacity", 0.45)),
                    update => update,
                    exit => exit.remove()
                  );
  
              let imageUrl = eraBackgroundImages[d];
              let back3 = document.querySelector('.back3');
              back3.style.background = `url(${imageUrl})`;
                back3.style.backgroundSize = "contain";
                back3.style.backgroundPosition = "center";
                back3.style.backgroundRepeat = "no-repeat";
              gsap.from(back3, {opacity: 0, yPercent: -100, duration: 1, ease: 'none'});
          });
  
      createLegend(svg, width);
  }
  
  function createLegend(svg, width) {
      const legend = svg.selectAll(".legend")
          .data(["No", "Yes"])
          .enter().append("g")
          .attr("class", "legend")
          .attr("transform", (d, i) => `translate(${width + 30},${i * 30})`);
  
      legend.append("rect")
          .attr("x", 0)
          .attr("width", 18)
          .attr("height", 18)
          .style("fill", d => d === "Yes" ? "tomato" : "skyblue");
  
      legend.append("text")
          .attr("x", -5)
          .attr("y", 9)
          .attr("dy", ".35em")
          .style("text-anchor", "end")
          .text(d => d);
  }
  
  function initializeSecondPlot() {
      // Assuming 'data' is defined in your scope similar to the first plot
      const margin2 = { top: 40, right: 80, bottom: 100, left: 50 },
            width2 = 960 - margin2.left - margin2.right,
            height2 = 500 - margin2.top - margin2.bottom;
  
      const svg2 = d3.select("#chart4").append("svg")
          .attr("width", width2 + margin2.left + margin2.right)
          .attr("height", height2 + margin2.top + margin2.bottom)
        .append("g")
          .attr("transform", `translate(${margin2.left},${margin2.top})`);
  
      const x2 = d3.scaleBand().range([0, width2]).domain(data.map(d => d.day)).padding(0);
      const y2 = d3.scaleBand().range([height2, 0]).domain([...new Set(data.map(d => d.Weeks))]).padding(0);
  
      svg2.append("text")
          .attr("text-anchor", "end")
          .attr("x", width2 / 2 + margin2.left)
          .attr("y", height2 + margin2.bottom - 5)
          .text("Day");
  
      svg2.append("text")
          .attr("text-anchor", "end")
          .attr("transform", "rotate(-90)")
          .attr("y", -margin2.left + 20)
          .attr("x", -margin2.top - height2 / 2 + 100)
          .text("Week")
          .style('font-size','16px');
  
      const colorScale2 = d3.scaleOrdinal()
          .domain([0, 1])
          .range(["skyblue", "tomato"]);
  
      svg2.selectAll(".tile2")
          .data(data)
          .enter().append("rect")
          .attr("class", "tile2")
          .attr("x", d => x2(d.day))
          .attr("y", d => y2(d.Weeks))
          .attr("width", x2.bandwidth())
          .attr("height", y2.bandwidth())
          .style("fill", d => colorScale2(d.sleep))
          .style("stroke", "black")
          .style("opacity", 0)
          .transition().duration(2000)
          .delay((d, i) => i * 500)
          .style("opacity", 0.45);
  
      svg2.append("g")
          .attr("transform", `translate(0,${height2})`)
          .call(d3.axisBottom(x2).tickSizeOuter(0))
          .style('font-size','16px');
  
      svg2.append("g")
          .call(d3.axisLeft(y2).tickSizeOuter(0))
          .style('font-size','16px');
          const legendData = [
            { label: "Awake", color: "skyblue" },
            { label: "Asleep", color: "tomato" }
        ];
        
        const legend = svg2.append("g")
          .attr("class", "legend")
          .selectAll(".legend-item")
          .data(legendData)
          .enter().append("g")
            .attr("class", "legend-item")
            .attr("transform", (d, i) => `translate(0, ${i * 25})`); // Space out the legend items
        
        // Draw rectangles for each legend item
        legend.append("rect")
            .attr("x", width2 + 60) // Position the legend on the right side of the plot
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", d => d.color);
        
        // Add text labels for each legend item
        legend.append("text")
            .attr("x", width2 + 54) // Position text to the left of the rectangles
            .attr("y", 9) // Vertically center text with rectangles
            .attr("dy", "0.35em") // Further adjust vertical alignment
            .style("text-anchor", "end") // Align text to the right of the point specified by `x`
            .text(d => d.label)
            .style('font-size', '16px');
  }
  
  function initializeSlideshow() {
      let index = 0;
      const images = document.querySelectorAll('.images img');
      const numberOfImages = images.length;
  
      function updateSlideshow() {
          images.forEach((img, i) => {
              img.style.display = i === index ? 'block' : 'none';
              gsap.from(img, {opacity: 0, duration: 1});
          });
          index = (index + 1) % numberOfImages;
      }
  
      setInterval(updateSlideshow, 3000);
  }