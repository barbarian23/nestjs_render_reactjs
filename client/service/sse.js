function sseClient(url) {
    const source = new EventSource('http://localhost:3001/docrawl');
    let sse = {
        connect: function (callback) {
            source.onopen = e => {
                console.log(e);
            }
            source.onmessage = function logEvents(event) {
                callback(event);
            }
            source.addEventListener('ping', e => {
                console.log(e);
            });
        }
    }
    return sse;
}
export default sseClient;