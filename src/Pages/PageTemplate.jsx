import React from 'react'
import DefaultLayout from 'Layout/DefaultLayout'

const PageTemplate = (props) => {
	const { pageTitle } = props;
	return (
		<DefaultLayout pageTitle={pageTitle}>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga maiores, exercitationem illo, veritatis ad possimus laborum, labore accusamus deleniti non voluptatem? Facilis harum totam nam explicabo illo adipisci, ad soluta.
		</DefaultLayout>
	)
}

export default PageTemplate
