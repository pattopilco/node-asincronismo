//utilizar em6

const some = () =>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('Correcto');
        }else{
            reject('Incorrecto');
        }
    });
};

//ejcutar promesa

some()
.then(response => console.log(response))
.catch(err => console.error(err));


//some2


const some2 = () => {
    return new Promise ((resolve,reject)=>{
        if(true){
            setTimeout(()=>{
                resolve(true);
            },2000)
        }else{
            const error = new Error('Error Some2');
            reject(error);
        }
    })
}

some2()
.then(response => console.log(response))
.catch(error => console.error(error));


Promise.all([some(),some2()])
.then(response => {
    console.log('array',response);
})
.catch(err =>{
    console.error(err)
}

)