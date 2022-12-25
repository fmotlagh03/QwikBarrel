import {
    component$,
    Slot,
} from '@builder.io/qwik'

import { Footer } from 'Shared'
// import Footer from '../components/Shared/Footer'

const Layout = component$(() => {
    return <>
        <Slot />
        <Footer />
    </>
})

export default Layout
