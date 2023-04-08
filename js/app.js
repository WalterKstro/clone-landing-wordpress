(function () {
    const { createApp } = Vue

    createApp({
        data() {
            return {
                services: [
                    'Web Design',
                    'Web Development',
                    'App Design',
                    'SEO Services',
                    'Game Development',
                    'Data Analysis',
                    'Software Dev',
                    'UI/UX Design',
                    'Blockchain',
                    'Social Media Marketing',
                    'App Development',
                    'Motion Graphics',
                ]
            }
        }
    }).mount('#services')

    gsap.to('.animation-banner', { y: 15, duration: 1, repeat: -1, yoyo: true })
})()