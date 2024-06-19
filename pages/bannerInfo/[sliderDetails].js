import React from 'react';
import { useRouter } from 'next/router';
import { withTranslation } from '../../i18n';

function SliderDetails() {
	const { query } = useRouter();
	console.log(query);
	const items = [
		{
			id: 1,
			title: 'One Stop Business Solution',
			desc: 'What are the things we’re good at? films, advertising, photography, live stream video production, visual brand strategy, and communication design, to name a few.',
		},
		{
			id: 2,
			title: 'Digital Marketing & Content',
			desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
			// img: imgApi.agency[0]
		},
		{
			id: 3,
			title: 'Product Design & Development',
			desc: 'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante.',
			// img: imgApi.agency[0]
		},
	];
	console.log(items);
	return (
		<div>
			<h2>this is for carousel slider information</h2>
		</div>
	);
}

export default withTranslation(['common'])(SliderDetails);
