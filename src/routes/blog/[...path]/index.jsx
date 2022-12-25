import {
    component$,
    Resource,
} from '@builder.io/qwik'
import { useEndpoint } from '@builder.io/qwik-city';
import { onGet } from 'Blog'
import { Layout } from 'BlogPage'

const Blog = component$(() => {
    const blogData = useEndpoint();

    return <Resource
        value={blogData}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Error</div>}
        onResolved={(data) => {
            const {
                categories,
                latest,
                mostViewed,
                popular,
                posts,
                seo,
                tags,
            } = data
            return <Layout {...data} />
        }}
    />
})

export default Blog

export { onGet }
