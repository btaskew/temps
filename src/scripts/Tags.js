class Tags {
    /**
     * Converts an array of tag objects to a comma separated string
     *
     * @param {Array} tags
     * @return {string}
     */
    toString(tags) {
        let tagString = '';

        tags.forEach(tag => {
            tagString += `${tag.tag}, `;
        });

        return tagString.slice(0, -2);
    }
}

export default new Tags();
