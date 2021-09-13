function useExtraClasses(extraClasses) {
    const classArr = extraClasses.split(' ')
    let classString = ''
    
    classArr.forEach(extra => {     
        classString = `${classString} ${extra}`
    })
    
    return classString
}

export default useExtraClasses