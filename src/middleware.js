import {i18nRouter } from "next-i18n-router"
import i18next from "i18next"


export function Middle(request) {
    return i18nRouter(request, i18next)
}

export const config = {
    matcher: "/((?!api|static|.*\\..*|_next).*)"
}