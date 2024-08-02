import React from 'react';

const Filters = ({ setFilterSelected, filterSelected }) => {
    const filtersList = ['HTML', 'CSS', 'SCSS', 'JS', 'nodeJS', 'ReactJs', 'SEO', 'Python', 'Django', 'testing', 'algorithmes'];

    return (
        <div className='btn_containers'>
            {filtersList.map((filter, index) => (
                <div key={index} onClick={() => setFilterSelected(filter)}>
                    <button className='btn_filter' >
                        {filter}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Filters;
