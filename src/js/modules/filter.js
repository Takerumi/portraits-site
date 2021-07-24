const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          btnAll = menu.querySelector('.all'),
          btnLovers = menu.querySelector('.lovers'),
          btnChef = menu.querySelector('.chef'),
          btnGirl = menu.querySelector('.girl'),
          btnGuy = menu.querySelector('.guy'),
          btnGrandmom = menu.querySelector('.grandmother'),
          btnGranddad = menu.querySelector('.granddad'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          markLovers = wrapper.querySelectorAll('.lovers'),
          markChef = wrapper.querySelectorAll('.chef'),
          markGirl = wrapper.querySelectorAll('.girl'),
          markGuy = wrapper.querySelectorAll('.guy'),
          no = document.querySelector('.portfolio-no');


    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    const setHandler = (btn, mark=undefined) => {
        btn.addEventListener('click', () => {
            typeFilter(mark);
        });
    }

    setHandler(btnAll, markAll);
    setHandler(btnLovers, markLovers);
    setHandler(btnChef, markChef);
    setHandler(btnGirl, markGirl);
    setHandler(btnGuy, markGuy);
    setHandler(btnGrandmom);
    setHandler(btnGranddad);

    menu.addEventListener('click', (e) => {
        let target = e.target;
        
        if (target && target.tagName == 'LI') {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });

};

export default filter;