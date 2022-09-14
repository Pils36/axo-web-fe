import React, {useState, useRef, useEffect} from 'react'
import './styles.js'
import { Container, IconMagnifyingGlass, IconRightArrow, SearchInput } from './styles.js'

const Search = () => {
    const targetRef = useRef (null)
    const [isHovered, setIsHovered] = useState (false)
    const [isFocused, setIsFocused] = useState (false)
    const showSearchInput = isHovered || isFocused

    useEffect(() => {
        targetRef.current.value = "";
      }, [showSearchInput]);
    

    return (
        <Container
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        hover={showSearchInput}
      >
        <SearchInput ref={targetRef} showSearchInput={showSearchInput} />
        {showSearchInput ? <IconRightArrow /> : <IconMagnifyingGlass />}
      </Container>
    )
}

export default Search
