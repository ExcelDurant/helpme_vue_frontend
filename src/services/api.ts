export const backendApi = {
    url:'https://pure-archive-330723.uc.r.appspot.com',
    fetchRequest(method:string, token:string, body:any) {
        const requestOptions = {
            method: method,
            headers: { 
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
             },
             body:JSON.stringify(body)
          };
          return fetch(this.url, requestOptions)
    }
}