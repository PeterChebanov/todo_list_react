import React from 'react';


import './list.scss';

const List = ({ items }) => {
	return (
		<ul className="list">
			{items.map(item => (

				<li class={item.active ? 'active' : {}}>
					<i> {item.icon ? (
						item.icon
					) : (
						<i className={`bage bage--${item.color}`}></i>

					)}
					</i>
					<span>{item.title}</span>
				</li>

			))};
		</ul>

	);
};

export default List;




