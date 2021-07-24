const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);
        //   blocks = document.querySelectorAll(itemsSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            let sibling = this.nextElementSibling;
            this.classList.toggle('active-style');
            sibling.classList.toggle('active-content');
 
            if (this.classList.contains('active-style')) {
                sibling.style.maxHeight = sibling.scrollHeight + 80 + 'px';
            } else {
                sibling.style.maxHeight = '0px';
            }
        });
    });

    //аккордеон на css
    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown');
    // });

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         if (!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style');
    //             });
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });


};

export default accordion;