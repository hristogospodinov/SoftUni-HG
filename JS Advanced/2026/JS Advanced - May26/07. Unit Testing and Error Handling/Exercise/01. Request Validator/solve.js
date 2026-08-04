function solve(request) {
    let regex = /^(?:[a-zA-Z0-9.]+|\*)$/;
    let messageRegex = /[<>\\&'"]/;
    let validMethods = ['GET','POST','DELETE','CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    if(!validMethods.includes(request.method)) {
        throw new Error ('Invalid request header: Invalid Method')
    }
    if (!regex.test(request.uri) || typeof request.uri !== 'string') {
        throw new Error ('Invalid request header: Invalid URI')
    }
    if (!validVersions.includes(request.version)) {        
        throw new Error ('Invalid request header: Invalid Version')
    }
    if (messageRegex.test(request.message) || typeof request.message !== 'string') {
        throw new Error ('Invalid request header: Invalid Message')
    }
    return request;
}