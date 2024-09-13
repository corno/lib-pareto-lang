import * as pd from 'pareto-core-data'

import {
    null_,
    array,
    string,
    boolean,
    typeReference,
    dictionary, group, member, taggedUnion, data
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as mglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: mglossary.T.Glossary<string> = {
    'imports': d({
        "common": "glo-pareto-common",
    }),
    'parameters': d({}),
    'types': d({
    }),
    'interfaces': d({
    }),
    'functions': d({
    }),
}