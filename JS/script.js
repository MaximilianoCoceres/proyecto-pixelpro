const btn = document.getElementById('button');



window.addEventListener("scroll", function () {
    var header = this.document.querySelector('header');
    header.classList.toggle("abajo", window.scrollY > 0);

})


document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_p4s5tfr';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Gracias! Te responderé pronto!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

fetch("/proyectos.json")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        let portfolio = document.querySelector(".row-container");
        let proyecto = '';
        
        for(var i in data.proyectos){
            let tecnologias='';
            for(var j in data.proyectos[i].tech){
                tecnologias +=` <i class="${data.proyectos[i].tech[j]}"></i>`;
            }

            proyecto += `<div class="column">
            <figure>
              <img src=${data.proyectos[i].img} alt=${data.proyectos[i].alt} />
              <figcaption>
                <div>
                  <h2>${data.proyectos[i].title}</h2>
                  <div class="icons">
                    ${tecnologias}
                  </div>
                  <div>
                    <a href=${data.proyectos[i].proyecto}
                      >Ver proyecto</a
                    >
                    <a href=${data.proyectos[i].github}>
                      <i class="fa-brands fa-github-alt"></i
                    ></a>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div> `;
        }

        portfolio.innerHTML = proyecto;
    })