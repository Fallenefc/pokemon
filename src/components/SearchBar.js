import React from 'react';

const SearchBar = props => {
    const [searchTerm, setSearchTerm] = React.useState('')

    const onChangeHandler = e => {
        setSearchTerm(e.target.value.toLowerCase())
    }

    const onFormSubmit = e => {
        e.preventDefault();
        props.SubmitFunction(searchTerm)
    }

    return (
        <div className="search-bar">
            <form onSubmit={onFormSubmit}>
            <input
                        className="search-bar-input"
						type='text'
						value={searchTerm}
						onChange={onChangeHandler}
						placeholder='Pokemon Search'
					/>
            </form>
        </div>
    )
}

export default SearchBar