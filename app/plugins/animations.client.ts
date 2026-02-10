export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:mounted', () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                    observer.unobserve(entry.target)
                }
            })
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        })

        const observeElements = () => {
            document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .stagger-children').forEach((el) => {
                observer.observe(el)
            })
        }

        // Observers need a slight delay to ensure DOM is ready if content is dynamic, 
        // but for static structure it usually works. 
        // A small timeout helps if components render async.
        setTimeout(observeElements, 100)
    })
})
