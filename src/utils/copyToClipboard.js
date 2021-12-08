export const copyToClipboard =  (elementId) => {
    const el = document.getElementById(elementId);
    const range = document.createRange();
    range.selectNodeContents(el);
    const select = window.getSelection();
    select.removeAllRanges();
    select.addRange(range);
    document.execCommand('copy');
    select.removeRange(range);
}   