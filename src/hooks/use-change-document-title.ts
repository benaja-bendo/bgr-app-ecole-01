import { useRef } from 'react'

import { useIsomorphicLayoutEffect, useUnmount } from 'usehooks-ts'

type Options = {
    preserveTitleOnUnmount?: boolean
}

const APP_NAME = import.meta.env.VITE_APP_TITLE

/**
 * A hook to set the document title.
 * @param {string} title - The title to set.
 * @param {?Options} [options] - The options.
 * @param {?boolean} [options.preserveTitleOnUnmount] - Whether to keep the title after unmounting the component (default is `true`).
 * @see [Documentation](https://usehooks-ts.com/react-hook/use-document-title)
 * @example
 * useDocumentTitle('My new title');
 */
export function useChangeDocumentTitle(title: string, options: Options = {}): void {
    const { preserveTitleOnUnmount = true } = options
    const defaultTitle = useRef<string | null>(null)

    useIsomorphicLayoutEffect(() => {
        defaultTitle.current = window.document.title
    }, [])

    useIsomorphicLayoutEffect(() => {
        window.document.title = APP_NAME ? `${title} - ${APP_NAME}` : title
    }, [title])

    useUnmount(() => {
        if (!preserveTitleOnUnmount && defaultTitle.current) {
            window.document.title = defaultTitle.current
        }
    })
}