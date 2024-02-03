const validatePlus = list => {
    let success = true;

    list.forEach(elem => {
        switch (elem.getAttribute('name')) {
            case 'user_name':
                if (/^[a-zа-яё]{2,}/gi.test(elem.value.trim())) {
                    elem.style.outline = 'none';
                    return;
                }
            case 'user_mail':
                if (/^[a-z\d-\_\.!~*']+@[a-z\d-\_\.!~*']+.[a-z]{2,3}$/gi.test(elem.value.trim())) {
                    elem.style.outline = 'none';
                    return;
                }
                break;
            default: return;
        }
        success = false;
    });

    return success;
};

export default validatePlus;