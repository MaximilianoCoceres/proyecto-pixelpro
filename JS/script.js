const $form = document.querySelector('#form')
const $button = document.querySelector('#mail_to_form')



window.addEventListener("scroll", function () {
    var header = this.document.querySelector('header');
    header.classList.toggle("abajo", window.scrollY > 0);

})


$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $button.setAttribute('href', `mailto:maxiprog7@gmail.com?subject=${form.get('name')} ${form.get('mail')} &body=${form.get('comentario')}`)
    $button.click()
}