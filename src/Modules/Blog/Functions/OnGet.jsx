import { getFromCacheOrApi } from 'Base'

const onGet = async ({
    params,
    response,
}) => {

    const { slug, pageNumber } = params || {}

    const { resolvedUrl, res } = context

    var url = '/blog/data?'

    if (resolvedUrl.startsWith('/blog/category')) {
        if (slug) {
            url += `&category=${encodeURI(slug)}`
        }
    }

    if (resolvedUrl.startsWith('/blog/tag')) {
        if (slug) {
            url += `&tag=${encodeURI(slug)}`
        }
    }

    if (pageNumber) {
        url += `&pageNumber=${pageNumber[0]}`
    }

    const data = await getFromCacheOrApi(url)

    // console.log(params, response.status)
    // if (pageNumber && isNaN(pageNumber)) {
    //     console.log(pageNumber, isNaN(pageNumber))
    //     response.status = 400
    //     return
    // }

    const { seoParameters } = data

    return data
}

export { onGet }
