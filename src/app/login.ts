var login = (username : string, password:string)=>{
    if(username !== 'admin' || password !== 'test')
        console.log('incorrect login!');
}

login('admin','test');

export {login}