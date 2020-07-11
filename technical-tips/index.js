const metaoffacts = [
  {  title:"THE 11 MOST IMPORTANT INTERVIEW TIPS", Pageurl:"https://www.scribblesinfo.com/technical-tips/the-11-most-important-interview-tips.html", Imageurl:"https://www.scribblesinfo.com/img/interview-tips.jpeg", Description:"Interview Tips", Tag:"Technical Tips"},

];



function FactsTemplate(results) {
  return `
<div class="single-latest-post row align-items-center">
<div class="col-lg-5 post-left">
										<div class="feature-img relative">
											<div class="overlay overlay-bg"></div>
											<img class="img-fluid" src="${results.Imageurl}" alt="${results.Imageurl}">
										</div>
										<ul class="tags">
											<li><a href="#">${results.Tag}</a></li>
										</ul>
									</div>
									<div class="col-lg-7 post-right">
										<a href="${results.Pageurl}">
											<h4>${results.title}</h4>
										</a>
										<ul class="meta">
											<li><a href="#"><span class="lnr lnr-user"></span>Scribbles</a></li>
										</ul>
										<p class="excert">	${results.Description}										</p>
									</div>
    </div>
</div>
  `;
}

document.getElementById("app").innerHTML = `
  ${metaoffacts.map(FactsTemplate).join("")}
  <b>These ${metaoffacts.length} facts were added recently. Check back soon for updates.</b>
`;
