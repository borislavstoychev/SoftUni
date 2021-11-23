function solve(obj){
    let method = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let version = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    const checkMethod = ()=>{
        if (obj.method === undefined ||
            !method.includes(obj.method))
            throw new Error('Invalid request header: Invalid Method');         
    };
    const checkUrl = () =>{
        if(obj.uri === undefined || !/^([a-zA-Z0-9\.]+|\*)$/gm.test(obj.uri))
        throw new Error('Invalid request header: Invalid URI');
    };
    const checkVersin = ()=>{
        if (obj.version === undefined ||
        !version.includes(obj.version))
            throw new Error('Invalid request header: Invalid Version');

    };
    const checkMessage = ()=>{
        if(obj.message === undefined || !/^[^<>\\&'"]*$/gm.test(obj.message))
            throw new Error('Invalid request header: Invalid Message');
    }
    checkMethod();
    checkUrl();
    checkVersin();
    checkMessage();
    return obj
}

console.log(solve({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
  }))