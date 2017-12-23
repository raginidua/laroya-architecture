const App = App || {};

App.init = function() {
  this.apiUrl = `${window.location.origin}/api`;
  console.log('loaded');
  this.$main  = $('main');
  App.showHomePage();
  $('.projectsLink').on('click', this.showProjectsSummary.bind(this));
  $('.mainLink').on('click', this.showHomePage.bind(this));
  $('.visionLink').on('click', this.showProcessPage.bind(this));
  $('.aboutUsLink').on('click', this.showaboutUsPage.bind(this));
  $('.contactLink').on('click', this.showcontactPage.bind(this));
};

App.showHomePage = function(e) {
  if (e) e.preventDefault();
  this.$main.html(`<div class="homeImage"></div>`);
}

App.showProjectsSummary = function(e) {
  if (e) e.preventDefault();
  this.ajaxRequest(`${this.apiUrl}/projects`, 'get', null, this.loopThroughProjects.bind(this));
}

App.loopThroughProjects = function(data){
  this.$main.html(`<div class="projectsSummaryContainer"><ul class="projectsUl"></ul></div>`)
  console.log(this);
  console.log(data);
  $.each(data.projects, (index, project) => {
    console.log(project.name);
    $('ul.projectsUl').append(`<img class="projectSummaryImages" id="${project.name}" src="../images/${project.images[0]}" alt="">`)
    $(`#${project.name}`).on('click', function() {
      console.log(`${project.name} was clicked`);
      console.log(data);
      console.log(this);
      console.log(project);
      console.log(App.$main);
      App.$main.html(`<div class="individualProjectContainer"><img class="projectImage"" src="../images/${project.images[0]}" alt=""><div class="scroller"><h6 class="arrow leftArrow">&#x219e</h6><h6 class="arrow rightArrow">&#x21a0</h6></div><div class="projectDescription"><h6>${project.description}</h6></div></div>`);
      $('.rightArrow').on('click', function(){
        var imageFullSrc = $('.projectImage').attr('src');
        var imageSrc = imageFullSrc.replace('../images/', '');
        var imgArray = project.images;
        var imgArrayLength = `${project.images.length}`;
        var imageNmbr = imgArray.indexOf(imageSrc);
        var newImgNmbr = imageNmbr + 1;
        var position = (`${project.images[newImgNmbr]}`);
        if (position !== 'undefined') {
          $('.projectImage').attr("src", `../images/${position}`);
        }
      });
      $('.leftArrow').on('click', function(){
        var imageFullSrc = $('.projectImage').attr('src');
        var imageSrc = imageFullSrc.replace('../images/', '');
        var imgArray = project.images;
        var imgArrayLength = `${project.images.length}`;
        var imageNmbr = imgArray.indexOf(imageSrc);
        var newImgNmbr = imageNmbr - 1;
        var position = (`${project.images[newImgNmbr]}`);
        if (position !== 'undefined') {
          $('.projectImage').attr("src", `../images/${position}`);
        }
      });
    });
  });
};

App.showProcessPage = function(e) {
  console.log('Process was clicked');
  if (e) e.preventDefault();
  App.$main.html(`<div class="processContainer"><h3>Process</h3><h4>At the core of our design process is a client-focused approach. Our process is centered around the lifestyle of each of those that interact with the space.</h4><div class="infoProcessContainer"><div class="processListItems"><ul class="processNeeds"><li class="needAssessment">Need Assessment</li><li class="conceptCreation">Concept Creation</li><li class="design">Design</li><li class="projectPlanning">Project Planning</li><li class="designImplementation">Design Implementation</li><li class="realEstateAdvisory">Real Estate Advisory Services</li></ul></div><div class="processInfo"></div></div></div>`)
  $('.needAssessment').on('click', function(e){
    if (e) e.preventDefault();
    $('.processInfo').html(`<h4>It begins with a site visit and detailed discussions with the client for understanding the expectations and their interactions with the designed space. These discussions are a critical input to the design process as they determine how the spaces are experienced. The need assessment provides great insights that lend to enhancement opportunities at the design stage.</h4>`)
    $('.needAssessment').css("font-weight", "900");
  });
  $('.conceptCreation').on('click', function(e){
    if (e) e.preventDefault();
    $('.processInfo').html(`<h4>On completion of our understanding of the client’s needs, we get to work at creating concepts. During the concept creation phase – we generate preliminary concepts along with mood boards to illustrate a look and feel. A shortlist of these concepts is then progressed to the creation of 2D or 3D images that help our clients visualise the space and the final outcome.</h4>`)
    $('.conceptCreation').css("font-weight", "900");
  });
  $('.design').on('click', function(e){
    if (e) e.preventDefault();
    $('.processInfo').html(`<h4>The design phase consists of an in-depth understanding of the elements that interact with the space. The design phase takes into consideration movement flows, cross ventilation to enhance circulation and light studies that have a bearing on the mood that each space will ultimately create.</h4>`)
    $('.design').css("font-weight", "900");
  });
  $('.projectPlanning').on('click', function(e){
    if (e) e.preventDefault();
    $('.processInfo').html(`<h4>Working with other professionals such as Planning Consultants, Structural Engineers and Landscape professionals, at the Project planning stage we ensure that the build is completed as per specifications and meets all planning regulations.</h4>`)
    $('.projectPlanning').css("font-weight", "900");
  });
  $('.designImplementation').on('click', function(e){
    if (e) e.preventDefault();
    $('.processInfo').html(`<h4>Beginning with an approval of schematic drawings, it is at this stage that the graphics now begin to take actual form. Finishes and materials are chosen to achieve a cohesive design statement.</h4>`)
    $('.designImplementation').css("font-weight", "900");
  });
  $('.realEstateAdvisory').on('click', function(e){
    if (e) e.preventDefault();
    $('.processInfo').html(`<h4>As a Buying Agent we focus on the needs of our client to help identify appropriate locations and properties by working with a network of real estate agents. Once the real estate has been identified we work with our associates who are lawyers, surveyors and mortgage consultants to ensure a quick closure.</h4>`)
    $('.realEstateAdvisory').css("font-weight", "900");
  });
}

App.showaboutUsPage = function (e) {
  console.log('About us was clicked!');
  if (e) e.preventDefault();
  App.$main.html(`<div class="aboutUsContainer"><div class="imageReema"><img src="images/reemaPhoto.png" alt=""></div><div class="aboutUsText"><h6>Laroya & Co was founded with a commitment to deliver outstanding architectural design and real estate solutions centered around the clients lifestyle and expectations. At the core of it’s design ethic is, to not only fulfill present needs of clients but importantly to create spaces that they can grow into and enjoy for years to come.<br><br>Reema Laroya has never been know to maintain a status quo. Challenging the conventional path that an MBA degree offered, Reema decided to follow her passion for architecture and interior design which led her to the prestigious Inchbald School of Design.<br><br>Her meticulous approach to the discipline earned her commendation by judges and industry stalwarts. Her unconventional creative approach to build spaces around the individuals that inhabit them earned her the internship at Blacksheep, the award winning design agency that harnesses the power of creative ideas.<br><br>Widely travelled, Reema has created her own unique style of design that is derived from the many cultural influences that she has been exposed and chosen to immerse herself in to.</h6></div></div>`)
}

App.showcontactPage = function (e) {
  console.log('Contact was clicked');
  if (e) e.preventDefault();
  App.$main.html(`<h1>Contact</h1>`)
}

App.ajaxRequest = function(url, method, data, callback){
  return $.ajax({
    url,
    method,
    data,
    beforeSend: this.setRequestHeader.bind(this)
  })
  .done(callback)
  .fail(data => {
    console.log(data);
  });
};

App.setRequestHeader = function(xhr) {
  return xhr.setRequestHeader('Authorization', `Bearer ${this.getToken()}`);
};

App.setToken = function(token){
  return window.localStorage.setItem('token', token);
};

App.getToken = function(){
  return window.localStorage.getItem('token');
};

$(App.init.bind(App));
