const linkNav = document.querySelectorAll('[href^="#"]')
const speed = .25
for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) {
        e.preventDefault()
        let w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1')
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null
        requestAnimationFrame(step)
        function step(time) {
            if (start === null) start = time
            let progress = time - start,
                r = (t < 0 ? Math.max(w - progress/speed, w + t) : Math.min(w + progress/speed, w + t))
            window.scrollTo(0,r)
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash
            }
        }
    }, false)
}
const form = document.querySelector('.contact form')
form.addEventListener("submit", function(e) {
	if (!e)
		e = window.event

	if (e.preventDefault)
		e.preventDefault()

	let invalid = false
	form.querySelectorAll("textarea, input").forEach(element => {
		if (element.value.length == 0) {
			element.classList.add('invalid')
			invalid = true
		} else {
			element.classList.remove('invalid')
		}
	})
	if (!invalid)
		this.classList.add('sended')
})
