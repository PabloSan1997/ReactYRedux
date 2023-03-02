const logger = (store)=>(next)=>(action)=>{
    console.log(action);
    next(action);
}
const featuring = (store)=>(next)=>(actionInfo)=>{
    const featured = [{name:"edies"},...actionInfo.action.payload];
    const updateAction = {...actionInfo, action:{...actionInfo.action, payload:featured}}
    next(updateAction);
}
export{logger, featuring}