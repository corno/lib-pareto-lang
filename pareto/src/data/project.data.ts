import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pr.wrapRawDictionary

import { $ as api } from "./api.data"

export const $: mproject.TProject = {
    'name': "XXX",

    'author': "Corno",
    'description': "functions that can be used by an IDE to support ASTN",
    'license': "ISC",

    'pubdependencies': d({
    }),
    'type': ['library', {
        'main': {
            'definition': api,
        },
        'submodules': d({
        }),
        'test': {
            'dependencies': d({
            }),
        }
    }],
}