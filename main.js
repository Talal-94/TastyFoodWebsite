    /* ========= show menu ========== */

    const showMenu = (toggleId, navId) =>{
        const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

        //validate that variables exist
        if(toggle && nav) {
            //we add the show-menu class to the div tag with the na__menu class
            toggle.addEventListener('click', ()=>{
                nav.classList.toggle('show-menu')
            })
        }
    }
    showMenu("nav-toggle", 'nav-menu')




    /* ====== remove menu mobile ====== */

    const navLink = document.querySelectorAll('.nav__link')

    function linkAction (){
        const navMenu = document.getElementById('nav-menu')
        //when we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

   /* ====== scroll sections active link ====== */


   /* ====== show menu ====== */


    /* ====== cange background header ====== */


    // when the scroll is greater than 200 vh, add scroll header class

    /* ====== show scroll top ====== */

    /* ====== show menu ====== */
