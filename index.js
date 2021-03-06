/**
 * Load images asynchronously.
 * @param {NodeList} [imgs] -  A NodeList of images. By default, its value is the result of `querySelectorAll('[data-async]'
 * @returns {NodeList}
 */
module = module.exports = function (imgs) {

    imgs = imgs || window.document.querySelectorAll('[data-async]');

    if (imgs.length === undefined) {
         imgs = [imgs];
    }

    var i = 0,
        len = imgs.length,
        img;

    for (i; i < len; i += 1) {
        img = imgs[i];
        img.src = img.getAttribute('data-async');
        img.removeAttribute('data-async');
    }

    return imgs;
};

/**
 * Preload the given array of images.
 * @param {array} imgs - The given array of urls.
 */
module.preload = function (imgs) {
    var len = imgs.length;

    while (len) {
        new Image().src = imgs[len -= 1];
    }
};