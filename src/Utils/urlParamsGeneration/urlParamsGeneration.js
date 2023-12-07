const filterUndefinedValues = (params) => {
    return Object.fromEntries(
        Object.entries(params).filter(([key, value]) => value !== undefined)
    )
}

const generationUrlParams = (params) => {
    const queryParams = new URLSearchParams(params);

    return queryParams.toString();
}

export const urlParamsGenerate = (params) => {
    const sortParams = filterUndefinedValues(params) 
    const newParamsString = generationUrlParams(sortParams)    

    const result =  newParamsString.length > 0 ? `/?${newParamsString}` : ''
    
    return result
}