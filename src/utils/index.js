
import {useEffect, useState} from 'react'
export const isFalsy = (value) => value === 0 ? false :!value
export const cleanObject = (object) => {
    const result = { ...object }
    Object.keys(result).forEach(key => {
        const value = result[key]
        if (isFalsy(value)) {
            delete result[key]
        }
    });
    return result
}

export const useMount = (callback) => {
    useEffect(() => {
        callback()
    }, [])
}

export const useDebounce = (value,dealy) => {
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setDebouncedValue(value)
        },dealy)
        return () => {
            clearTimeout(timeOut)
        }
    },[value, dealy])
    return debouncedValue
}