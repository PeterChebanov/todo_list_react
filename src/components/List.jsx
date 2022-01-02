import React from 'react';


const List = ({  items  }) => {
	return (
		<ul className="todo__list">
			{ items.map(item => (

				<li class="active">
					<i> {item.icon}	</i>
					<span>{item.title}</span>
				</li>

			))};
		</ul>

	);
};





export default List;