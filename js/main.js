
    (function () {

        // Бургер
    

        document.addEventListener('click', burgerInit)
    
        function burgerInit(e) {
    
            const burgerIcon = e.target.closest('.burger-icon')
            
    const burgerNavLink = e.target.closest('.nav__link')
            if (!burgerIcon && !burgerNavLink) return
            if (document.documentElement.clientWidth > 1100) return
    
            if (!document.body.classList.contains('body--opened-menu')) {
                document.body.classList.add('body--opened-menu')
            } else {
                document.body.classList.remove('body--opened-menu')
            }
    
        }
    

        // // Модалка
        const modal = document.querySelector('.modal')
        const modalButtons = document.querySelectorAll('.open__modal')
        
        modalButtons.forEach(button => {
            button.addEventListener('click', openModal)
        })
        
        modal.addEventListener('click', closeModal)
        
        function openModal(e) {
            e.preventDefault()
            document.body.classList.toggle('body--opened-modal')
        }
        
        function closeModal(e) {
            e.preventDefault()
        
            const target = e.target
        
            if (target.closest('.button') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
            }
        }
        // const modal = document.querySelector('.modal')
        // const modalButton = document.querySelector('.open__modal')
    
        // modalButton.addEventListener('click', openModal)
        // modal.addEventListener('click', closeModal)
    
        // function openModal(e) {
        //     e.preventDefault()
        //     document.body.classList.toggle('body--opened-modal')
        // }
    
        // function closeModal(e) {
        //     e.preventDefault()
    
        //     const target = e.target
    
        //     if (target.closest('.button') || target.classList.contains('modal')) {
        //         document.body.classList.remove('body--opened-modal')
        //     }
    
        // }
    
    
    // Слайдер
    const swiper = new Swiper('.gallery__slider', {
        slidesPerView: 2,
        
        pagination: {
        el: '.swiper-pagination',
        },
    
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    
    });
    })()