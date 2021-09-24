module.exports = {

    /**
     * Gets a string of random lower case letters
     * @param {Number} length
     * @returns {string}
     */
    getRandomString(length) {
        let result = '';
        let characters = 'abcdefghijklmnopqrstuvwxyz';
        let charactersLength = characters.length;

        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            )
        }

        return result;
    }
}