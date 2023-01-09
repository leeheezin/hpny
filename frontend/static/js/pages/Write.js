export default class {
    constructor() {
        document.title = "Write";
    }
    async getHtml() {
        return `
           <div class="writeWrap">
                <div class="imgBox">
                </div>
                <div class="titBox">
                    <h4>제목</h4>
                    <input type="text" placeholder="글 제목을 입력해주세요">
                </div>
                <div class="txtBox">
                    <h4>내용</h4>
                    <input type="text" placeholder="글 내용을 입력해주세요">
                </div>
                <div class="submit">
                    <a href="/" class="nav_item">등록하기</a>
                </div>
           </div>
        `;
    }
}