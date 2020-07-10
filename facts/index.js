const metaoffacts = [
  {
    title:"Facts of Sumo wrestler", Pageurl:"https://www.scribblesinfo.com/facts/facts-of-sumo-wrestler.html", Imageurl:"https://www.scribblesinfo.com/img/sumo.jpeg", Description:"Kaizen, Facts of Sumo wrestler", Tag:"Facts"},

{  title:"Jonney Depp - Biography", Pageurl:"https://www.scribblesinfo.com/facts/Jonney-depp-biography.html", Imageurl:"https://www.scribblesinfo.com/img/johhey.jpeg", Description:"Jonney depp was born John Christopher Depp II in Owensboro, Kentucky, on June 9, 1963", Tag:"Facts"},

{  title:"50 Things That Not Allowed To Do At Hogwarts", Pageurl:"https://www.scribblesinfo.com/facts/50-things-that-not-allowed-to-do-at-hogwarts.html", Imageurl:"https://www.scribblesinfo.com/img/harry-potter1.jpeg", Description:"Things That Not Allowed To Do At Hogwarts", Tag:"Facts"},

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
