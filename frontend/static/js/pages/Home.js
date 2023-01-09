export default class {
    constructor() {
        document.title = "Home";
    }
    async getHtml() {
        return `
            <a href="/write" class="nav_item" data-link>새 글 작성하기</a>
        `;
    }
}