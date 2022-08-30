
/*eslint
    "@typescript-eslint/no-unused-vars": 0,
    "camelcase": 0,
    "dot-notation": 0,
    "no-underscore-dangle": 0,
    "quote-props": 0,
    "max-len": 0
*/
import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"
import * as pm from "pareto-statemachine-core"


import * as t from "../../../interface"
import { createArray } from "pareto-core-lib"

export function createBuilder<TokenAnnotation>(
    intermediate: t.__root_B,
): t.__root_T {
    function _generateBuilder_builder_procedure_declaration(
        intermediate: t.__builder_procedure_declaration_B,
    ): t.__builder_procedure_declaration_T {
        return {
            "interfaces": intermediate["interfaces"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__interfaces_T> => {
                {
                    const source = intermediate["interfaces"]

                    return pl.createDictionary(source).map((entry, key) => {
                        return {
                            "interface": entry["interface"] === undefined ? _default_generateBuilder_interface_definition() : _generateBuilder_interface_definition(entry["interface"]),
                        }
                    })
                }
            })(),
            "return type": intermediate["return type"] === undefined ? ["void", {
            }] : ((): t.__return_type_TU => {
                switch (intermediate["return type"][0]) {
                    case "interface":
                        return ["interface", {
                            "interface": intermediate["return type"][1]["interface"] === undefined ? _default_generateBuilder_interface_definition() : _generateBuilder_interface_definition(intermediate["return type"][1]["interface"]),
                        }]
                    case "void":
                        return ["void", {
                        }]
                    default: return pl.au(intermediate["return type"][0])
                }
            })(),
        }
    }

    function _default_generateBuilder_builder_procedure_declaration(
    ): t.__builder_procedure_declaration_T {
        return {
            "interfaces": pl.createDictionary({}),
            "return type": ["void", {
            }],
        }
    }

    function _generateBuilder_context_selection(
        intermediate: t.__context_selection_B,
    ): t.__context_selection_T {
        return {
            "start": intermediate["start"] === undefined ? _default_generateBuilder_context_start() : _generateBuilder_context_start(intermediate["start"]),
            "steps": intermediate["steps"] === undefined ? createArray([]) : ((): pt.Array<t.__steps_T> => {
                {
                    const source = intermediate["steps"]
                    const target = pm.createArrayBuilder<t.__steps_T>()
                    pl.createArray(source).forEach((entry) => {
                        target.push({
                            "property": entry["property"] === undefined ? "*property*" : entry["property"],
                        })
                    })
                    return target.toArray()
                }
            })(),
        }
    }

    function _default_generateBuilder_context_selection(
    ): t.__context_selection_T {
        return {
            "start": _default_generateBuilder_context_start(),
            "steps": pl.createArray([]),
        }
    }

    function _generateBuilder_context_start(
        intermediate: t.__context_start_B,
    ): t.__context_start_T {
        return {
            "start": intermediate["start"] === undefined ? ["context", {
            }] : ((): t.__start_TU => {
                switch (intermediate["start"][0]) {
                    case "context":
                        return ["context", {
                        }]
                    case "function":
                        return ["function", {
                            "argument": intermediate["start"][1]["argument"] === undefined ? _default_generateBuilder_type_expression() : _generateBuilder_type_expression(intermediate["start"][1]["argument"]),
                            "context": intermediate["start"][1]["context"] === undefined ? ["argument", {
                                "function": "*function*",
                            }] : ((): t.__context_TU => {
                                switch (intermediate["start"][1]["context"][0]) {
                                    case "argument":
                                        return ["argument", {
                                            "function": intermediate["start"][1]["context"][1]["function"] === undefined ? "*function*" : intermediate["start"][1]["context"][1]["function"],
                                        }]
                                    case "local function":
                                        return ["local function", {
                                            "function": intermediate["start"][1]["context"][1]["function"] === undefined ? "*function*" : intermediate["start"][1]["context"][1]["function"],
                                        }]
                                    default: return pl.au(intermediate["start"][1]["context"][0])
                                }
                            })(),
                        }]
                    case "marked value":
                        return ["marked value", {
                            "marker": intermediate["start"][1]["marker"] === undefined ? "*marker*" : intermediate["start"][1]["marker"],
                        }]
                    case "state":
                        return ["state", {
                            "state": intermediate["start"][1]["state"] === undefined ? "*state*" : intermediate["start"][1]["state"],
                        }]
                    default: return pl.au(intermediate["start"][0])
                }
            })(),
        }
    }

    function _default_generateBuilder_context_start(
    ): t.__context_start_T {
        return {
            "start": ["context", {
            }],
        }
    }

    function _generateBuilder_function_declaration(
        intermediate: t.__function_declaration_B,
    ): t.__function_declaration_T {
        return {
            "in": intermediate["in"] === undefined ? _default_generateBuilder_type_reference() : _generateBuilder_type_reference(intermediate["in"]),
            "out": intermediate["out"] === undefined ? _default_generateBuilder_type_reference() : _generateBuilder_type_reference(intermediate["out"]),
        }
    }

    function _default_generateBuilder_function_declaration(
    ): t.__function_declaration_T {
        return {
            "in": _default_generateBuilder_type_reference(),
            "out": _default_generateBuilder_type_reference(),
        }
    }

    function _generateBuilder_guaranteed_context_selection(
        intermediate: t.__guaranteed_context_selection_B,
    ): t.__guaranteed_context_selection_T {
        return {
            "missing handler": intermediate["missing handler"] === undefined ? _default_generateBuilder_missing_handler() : _generateBuilder_missing_handler(intermediate["missing handler"]),
            "start": intermediate["start"] === undefined ? _default_generateBuilder_context_start() : _generateBuilder_context_start(intermediate["start"]),
            "steps": intermediate["steps"] === undefined ? pl.createArray([]) : ((): pt.Array<t.__steps_guaranteed_context_selection_T> => {
                {
                    const source = intermediate["steps"]
                    const target = pm.createArrayBuilder<t.__steps_guaranteed_context_selection_T>()
                    pl.createArray(source).forEach((entry) => {
                        target.push({
                            "missing handler": entry["missing handler"] === undefined ? _default_generateBuilder_missing_handler() : _generateBuilder_missing_handler(entry["missing handler"]),
                            "property": entry["property"] === undefined ? "*property*" : entry["property"],
                        })
                    })
                    return target.toArray()
                }
            })(),
        }
    }

    function _default_generateBuilder_guaranteed_context_selection(
    ): t.__guaranteed_context_selection_T {
        return {
            "missing handler": _default_generateBuilder_missing_handler(),
            "start": _default_generateBuilder_context_start(),
            "steps": pl.createArray([]),
        }
    }

    function _generateBuilder_interface_definition(
        intermediate: t.__interface_definition_B,
    ): t.__interface_definition_T {
        return {
            "type": intermediate["type"] === undefined ? ["group", {
                "members": pl.createDictionary({}),
            }] : ((): t.__type_TU => {
                switch (intermediate["type"][0]) {
                    case "dictionary":
                        return ["dictionary", {
                            "entry": intermediate["type"][1]["entry"] === undefined ? _default_generateBuilder_interface_definition() : _generateBuilder_interface_definition(intermediate["type"][1]["entry"]),
                        }]
                    case "group":
                        return ["group", {
                            "members": intermediate["type"][1]["members"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__members_T> => {
                                {
                                    const source = intermediate["type"][1]["members"]
                                    const target: { [key: string]: t.__members_T } = {}
                                    return pl.createDictionary(source).map((entry, key) => {
                                        return {
                                            "definition": entry["definition"] === undefined ? _default_generateBuilder_interface_definition() : _generateBuilder_interface_definition(entry["definition"]),
                                        }
                                    })
                                    return pl.createDictionary(target)
                                }
                            })(),
                        }]
                    case "method":
                        return ["method", {
                            "return type": intermediate["type"][1]["return type"] === undefined ? ["void", {
                            }] : ((): t.__return_type_method_TU => {
                                switch (intermediate["type"][1]["return type"][0]) {
                                    case "interface":
                                        return ["interface", {
                                            "interface": intermediate["type"][1]["return type"][1]["interface"] === undefined ? _default_generateBuilder_interface_definition() : _generateBuilder_interface_definition(intermediate["type"][1]["return type"][1]["interface"]),
                                        }]
                                    case "void":
                                        return ["void", {
                                        }]
                                    default: return pl.au(intermediate["type"][1]["return type"][0])
                                }
                            })(),
                            "type": intermediate["type"][1]["type"] === undefined ? _default_generateBuilder_type_reference() : _generateBuilder_type_reference(intermediate["type"][1]["type"]),
                        }]
                    case "reference":
                        return ["reference", {
                            "interface": intermediate["type"][1]["interface"] === undefined ? "*referenced interface*" : intermediate["type"][1]["interface"],
                            "namespace selection": intermediate["type"][1]["namespace selection"] === undefined ? _default_generateBuilder_namespace_selection() : _generateBuilder_namespace_selection(intermediate["type"][1]["namespace selection"]),
                        }]
                    default: return pl.au(intermediate["type"][0])
                }
            })(),
        }
    }

    function _default_generateBuilder_interface_definition(
    ): t.__interface_definition_T {
        return {
            "type": ["group", {
                "members": pl.createDictionary({}),
            }],
        }
    }

    function _generateBuilder_interface_expression(
        intermediate: t.__interface_expression_B,
    ): t.__interface_expression_T {
        return {
            "type": intermediate["type"] === undefined ? ["initialize", {
                "type": ["method", {
                    "strategy": ["procedure implementation", {
                        "block": _default_generateBuilder_procedure_block(),
                    }],
                }],
            }] : ((): t.__type_interface_expression_TU => {
                switch (intermediate["type"][0]) {
                    case "argument":
                        return ["argument", {
                            "argument": intermediate["type"][1]["argument"] === undefined ? "*argument*" : intermediate["type"][1]["argument"],
                        }]
                    case "initialize":
                        return ["initialize", {
                            "type": intermediate["type"][1]["type"] === undefined ? ["method", {
                                "strategy": ["procedure implementation", {
                                    "block": _default_generateBuilder_procedure_block(),
                                }],
                            }] : ((): t.__type_initialize_TU => {
                                switch (intermediate["type"][1]["type"][0]) {
                                    case "dictionary":
                                        return ["dictionary", {
                                            "entries": intermediate["type"][1]["type"][1]["entries"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__entries_T> => {
                                                {
                                                    const source = intermediate["type"][1]["type"][1]["entries"]
                                                    const target: { [key: string]: t.__entries_T } = {}
                                                    return pl.createDictionary(source).map((entry, key) => {
                                                        return {
                                                            "expression": entry["expression"] === undefined ? _default_generateBuilder_interface_expression() : _generateBuilder_interface_expression(entry["expression"]),
                                                        }
                                                    })
                                                    return pl.createDictionary(target)
                                                }
                                            })(),
                                        }]
                                    case "group":
                                        return ["group", {
                                            "strategy": intermediate["type"][1]["type"][1]["strategy"] === undefined ? ["inline", {
                                                "members": pl.createDictionary({}),
                                            }] : ((): t.__strategy_TU => {
                                                switch (intermediate["type"][1]["type"][1]["strategy"][0]) {
                                                    case "inline":
                                                        return ["inline", {
                                                            "members": intermediate["type"][1]["type"][1]["strategy"][1]["members"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__members_inline_T> => {
                                                                {
                                                                    const source = intermediate["type"][1]["type"][1]["strategy"][1]["members"]
                                                                    const target: { [key: string]: t.__members_inline_T } = {}
                                                                    return pl.createDictionary(source).map((entry, key) => {
                                                                        return {
                                                                            "expression": entry["expression"] === undefined ? _default_generateBuilder_interface_expression() : _generateBuilder_interface_expression(entry["expression"]),
                                                                        }
                                                                    })
                                                                    return pl.createDictionary(target)
                                                                }
                                                            })(),
                                                        }]
                                                    default: return pl.au(intermediate["type"][1]["type"][1]["strategy"][0])
                                                }
                                            })(),
                                        }]
                                    case "method":
                                        return ["method", {
                                            "strategy": intermediate["type"][1]["type"][1]["strategy"] === undefined ? ["procedure implementation", {
                                                "block": _default_generateBuilder_procedure_block(),
                                            }] : ((): t.__strategy_method_TU => {
                                                switch (intermediate["type"][1]["type"][1]["strategy"][0]) {
                                                    case "argument":
                                                        return ["argument", {
                                                            "argument": intermediate["type"][1]["type"][1]["strategy"][1]["argument"] === undefined ? "*argument*" : intermediate["type"][1]["type"][1]["strategy"][1]["argument"],
                                                        }]
                                                    case "inline procedure":
                                                        return ["inline procedure", {
                                                            "call": intermediate["type"][1]["type"][1]["strategy"][1]["call"] === undefined ? _default_generateBuilder_procedure_call() : _generateBuilder_procedure_call(intermediate["type"][1]["type"][1]["strategy"][1]["call"]),
                                                            "specification": intermediate["type"][1]["type"][1]["strategy"][1]["specification"] === undefined ? _default_generateBuilder_internal_procedure_specification() : _generateBuilder_internal_procedure_specification(intermediate["type"][1]["type"][1]["strategy"][1]["specification"]),
                                                        }]
                                                    case "procedure implementation":
                                                        return ["procedure implementation", {
                                                            "block": intermediate["type"][1]["type"][1]["strategy"][1]["block"] === undefined ? _default_generateBuilder_procedure_block() : _generateBuilder_procedure_block(intermediate["type"][1]["type"][1]["strategy"][1]["block"]),
                                                        }]
                                                    default: return pl.au(intermediate["type"][1]["type"][1]["strategy"][0])
                                                }
                                            })(),
                                        }]
                                    case "reference":
                                        return ["reference", {
                                            "strategy": intermediate["type"][1]["type"][1]["strategy"] === undefined ? ["procedure call6", {
                                                "procedure call": _default_generateBuilder_named_procedure_call(),
                                            }] : ((): t.__strategy_reference_TU => {
                                                switch (intermediate["type"][1]["type"][1]["strategy"][0]) {
                                                    case "procedure call6":
                                                        return ["procedure call6", {
                                                            "procedure call": intermediate["type"][1]["type"][1]["strategy"][1]["procedure call"] === undefined ? _default_generateBuilder_named_procedure_call() : _generateBuilder_named_procedure_call(intermediate["type"][1]["type"][1]["strategy"][1]["procedure call"]),
                                                        }]
                                                    default: return pl.au(intermediate["type"][1]["type"][1]["strategy"][0])
                                                }
                                            })(),
                                        }]
                                    default: return pl.au(intermediate["type"][1]["type"][0])
                                }
                            })(),
                        }]
                    default: return pl.au(intermediate["type"][0])
                }
            })(),
        }
    }

    function _default_generateBuilder_interface_expression(
    ): t.__interface_expression_T {
        return {
            "type": ["initialize", {
                "type": ["method", {
                    "strategy": ["procedure implementation", {
                        "block": _default_generateBuilder_procedure_block(),
                    }],
                }],
            }],
        }
    }

    function _generateBuilder_internal_procedure_specification(
        intermediate: t.__internal_procedure_specification_B,
    ): t.__internal_procedure_specification_T {
        return {
            "block": intermediate["block"] === undefined ? _default_generateBuilder_procedure_block() : _generateBuilder_procedure_block(intermediate["block"]),
            "parameters": intermediate["parameters"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__parameters_T> => {
                {
                    const source = intermediate["parameters"]
                    const target: { [key: string]: t.__parameters_T } = {}
                    return pl.createDictionary(source).map((entry, key) => {
                        return {
                            "type": entry["type"] === undefined ? ["group", {
                                "members": pl.createDictionary({}),
                            }] : ((): t.__type_parameters_TU => {
                                switch (entry["type"][0]) {
                                    case "group":
                                        return ["group", {
                                            "members": entry["type"][1]["members"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__members_group_T> => {
                                                {
                                                    const source = entry["type"][1]["members"]
                                                    const target: { [key: string]: t.__members_group_T } = {}
                                                    return pl.createDictionary(source).map((entry, key) => {
                                                        return {
                                                            "definition": entry["definition"] === undefined ? _default_generateBuilder_interface_definition() : _generateBuilder_interface_definition(entry["definition"]),
                                                        }
                                                    })
                                                    return pl.createDictionary(target)
                                                }
                                            })(),
                                        }]
                                    case "method":
                                        return ["method", {
                                            "return type": entry["type"][1]["return type"] === undefined ? ["void", {
                                            }] : ((): t.__return_type_method_type_TU => {
                                                switch (entry["type"][1]["return type"][0]) {
                                                    case "interface":
                                                        return ["interface", {
                                                            "interface": entry["type"][1]["return type"][1]["interface"] === undefined ? _default_generateBuilder_interface_definition() : _generateBuilder_interface_definition(entry["type"][1]["return type"][1]["interface"]),
                                                        }]
                                                    case "void":
                                                        return ["void", {
                                                        }]
                                                    default: return pl.au(entry["type"][1]["return type"][0])
                                                }
                                            })(),
                                            "type": entry["type"][1]["type"] === undefined ? _default_generateBuilder_nested_type_reference() : _generateBuilder_nested_type_reference(entry["type"][1]["type"]),
                                        }]
                                    case "reference":
                                        return ["reference", {
                                            "interface": entry["type"][1]["interface"] === undefined ? "*referenced interface*" : entry["type"][1]["interface"],
                                            "namespace selection": entry["type"][1]["namespace selection"] === undefined ? _default_generateBuilder_namespace_selection() : _generateBuilder_namespace_selection(entry["type"][1]["namespace selection"]),
                                        }]
                                    default: return pl.au(entry["type"][0])
                                }
                            })(),
                        }
                    })
                    return pl.createDictionary(target)
                }
            })(),
            "return type": intermediate["return type"] === undefined ? ["void", {
            }] : ((): t.__return_type_internal_procedure_specification_TU => {
                switch (intermediate["return type"][0]) {
                    case "interface":
                        return ["interface", {
                            "interface": intermediate["return type"][1]["interface"] === undefined ? _default_generateBuilder_interface_definition() : _generateBuilder_interface_definition(intermediate["return type"][1]["interface"]),
                        }]
                    case "void":
                        return ["void", {
                        }]
                    default: return pl.au(intermediate["return type"][0])
                }
            })(),
        }
    }

    function _default_generateBuilder_internal_procedure_specification(
    ): t.__internal_procedure_specification_T {
        return {
            "block": _default_generateBuilder_procedure_block(),
            "parameters": pl.createDictionary({}),
            "return type": ["void", {
            }],
        }
    }

    function _generateBuilder_missing_handler(
        intermediate: t.__missing_handler_B,
    ): t.__missing_handler_T {
        return {
            "guaranteed": intermediate["guaranteed"] === undefined ? ["yes", {
            }] : ((): t.__guaranteed_TU => {
                switch (intermediate["guaranteed"][0]) {
                    case "no":
                        return ["no", {
                            "on missing": intermediate["guaranteed"][1]["on missing"] === undefined ? _default_generateBuilder_type_expression() : _generateBuilder_type_expression(intermediate["guaranteed"][1]["on missing"]),
                        }]
                    case "yes":
                        return ["yes", {
                        }]
                    default: return pl.au(intermediate["guaranteed"][0])
                }
            })(),
        }
    }

    function _default_generateBuilder_missing_handler(
    ): t.__missing_handler_T {
        return {
            "guaranteed": ["yes", {
            }],
        }
    }

    function _generateBuilder_named_procedure_call(
        intermediate: t.__named_procedure_call_B,
    ): t.__named_procedure_call_T {
        return {
            "procedure call": intermediate["procedure call"] === undefined ? _default_generateBuilder_procedure_call() : _generateBuilder_procedure_call(intermediate["procedure call"]),
            "type": intermediate["type"] === undefined ? ["local", {
                "procedure": "*procedure*",
            }] : ((): t.__type_named_procedure_call_TU => {
                switch (intermediate["type"][0]) {
                    case "external":
                        return ["external", {
                            "builder": intermediate["type"][1]["builder"] === undefined ? "*builder*" : intermediate["type"][1]["builder"],
                            "method": intermediate["type"][1]["method"] === undefined ? "*method*" : intermediate["type"][1]["method"],
                        }]
                    case "local":
                        return ["local", {
                            "procedure": intermediate["type"][1]["procedure"] === undefined ? "*procedure*" : intermediate["type"][1]["procedure"],
                        }]
                    default: return pl.au(intermediate["type"][0])
                }
            })(),
        }
    }

    function _default_generateBuilder_named_procedure_call(
    ): t.__named_procedure_call_T {
        return {
            "procedure call": _default_generateBuilder_procedure_call(),
            "type": ["local", {
                "procedure": "*procedure*",
            }],
        }
    }

    function _generateBuilder_namespace_reference(
        intermediate: t.__namespace_reference_B,
    ): t.__namespace_reference_T {
        return {
            "namespace": intermediate["namespace"] === undefined ? "*namespace*" : intermediate["namespace"],
            "type arguments": intermediate["type arguments"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__type_arguments_T> => {
                {
                    const source = intermediate["type arguments"]
                    const target: { [key: string]: t.__type_arguments_T } = {}
                    return pl.createDictionary(source).map((entry, key) => {
                        return {
                            "type": entry["type"] === undefined ? "*type argument type*" : entry["type"],
                        }
                    })
                    return pl.createDictionary(target)
                }
            })(),
        }
    }

    function _default_generateBuilder_namespace_reference(
    ): t.__namespace_reference_T {
        return {
            "namespace": "*namespace*",
            "type arguments": pl.createDictionary({}),
        }
    }

    function _generateBuilder_namespace_selection(
        intermediate: t.__namespace_selection_B,
    ): t.__namespace_selection_T {
        return {
            "which": intermediate["which"] === undefined ? ["current", {
            }] : ((): t.__which_TU => {
                switch (intermediate["which"][0]) {
                    case "current":
                        return ["current", {
                        }]
                    case "other":
                        return ["other", {
                            "namespace reference": intermediate["which"][1]["namespace reference"] === undefined ? _default_generateBuilder_namespace_reference() : _generateBuilder_namespace_reference(intermediate["which"][1]["namespace reference"]),
                        }]
                    default: return pl.au(intermediate["which"][0])
                }
            })(),
        }
    }

    function _default_generateBuilder_namespace_selection(
    ): t.__namespace_selection_T {
        return {
            "which": ["current", {
            }],
        }
    }

    function _generateBuilder_nested_type_reference(
        intermediate: t.__nested_type_reference_B,
    ): t.__nested_type_reference_T {
        return {
            "namespace reference": intermediate["namespace reference"] === undefined ? _default_generateBuilder_namespace_reference() : _generateBuilder_namespace_reference(intermediate["namespace reference"]),
            "steps": intermediate["steps"] === undefined ? pl.createArray([]) : ((): pt.Array<t.__steps_nested_type_reference_T> => {
                {
                    const source = intermediate["steps"]
                    const target = pm.createArrayBuilder<t.__steps_nested_type_reference_T>()
                    pl.createArray(source).forEach((entry) => {
                        target.push({
                            "type": entry["type"] === undefined ? ["dictionary", {
                            }] : ((): t.__type_steps_TU => {
                                switch (entry["type"][0]) {
                                    case "dictionary":
                                        return ["dictionary", {
                                        }]
                                    case "group":
                                        return ["group", {
                                            "property": entry["type"][1]["property"] === undefined ? "*property*" : entry["type"][1]["property"],
                                        }]
                                    case "list":
                                        return ["list", {
                                        }]
                                    case "tagged union option":
                                        return ["tagged union option", {
                                            "option": entry["type"][1]["option"] === undefined ? "*option*" : entry["type"][1]["option"],
                                        }]
                                    default: return pl.au(entry["type"][0])
                                }
                            })(),
                        })
                    })
                    return target.toArray()
                }
            })(),
            "type": intermediate["type"] === undefined ? "*type reference*" : intermediate["type"],
        }
    }

    function _default_generateBuilder_nested_type_reference(
    ): t.__nested_type_reference_T {
        return {
            "namespace reference": _default_generateBuilder_namespace_reference(),
            "steps": pl.createArray([]),
            "type": "*type reference*",
        }
    }

    function _generateBuilder_procedure_block(
        intermediate: t.__procedure_block_B,
    ): t.__procedure_block_T {
        return {
            "effects": intermediate["effects"] === undefined ?pl.createArray([] ): ((): pt.Array<t.__effects_T> => {
                {
                    const source = intermediate["effects"]
                    const target = pm.createArrayBuilder<t.__effects_T>()
                    pl.createArray(source).forEach((entry) => {
                        target.push({
                            "type": entry["type"] === undefined ? ["external interface call", {
                                "expression": _default_generateBuilder_type_expression(),
                                "interface": "*interface*",
                            }] : ((): t.__type_effects_TU => {
                                switch (entry["type"][0]) {
                                    case "external interface call":
                                        return ["external interface call", {
                                            "expression": entry["type"][1]["expression"] === undefined ? _default_generateBuilder_type_expression() : _generateBuilder_type_expression(entry["type"][1]["expression"]),
                                            "interface": entry["type"][1]["interface"] === undefined ? "*interface*" : entry["type"][1]["interface"],
                                        }]
                                    case "internal interface call":
                                        return ["internal interface call", {
                                            "expression": entry["type"][1]["expression"] === undefined ? _default_generateBuilder_type_expression() : _generateBuilder_type_expression(entry["type"][1]["expression"]),
                                            "interface": entry["type"][1]["interface"] === undefined ? "*interface*" : entry["type"][1]["interface"],
                                        }]
                                    case "state change":
                                        return ["state change", {
                                            "state": entry["type"][1]["state"] === undefined ? "*state*" : entry["type"][1]["state"],
                                            "type": entry["type"][1]["type"] === undefined ? ["string", {
                                                "initializer": _default_generateBuilder_string_expression(),
                                            }] : ((): t.__type_state_change_TU => {
                                                switch (entry["type"][1]["type"][0]) {
                                                    case "dictionary":
                                                        return ["dictionary", {
                                                            "strategy": entry["type"][1]["type"][1]["strategy"] === undefined ? ["add entry", {
                                                                "expression": _default_generateBuilder_type_expression(),
                                                                "key": _default_generateBuilder_string_expression(),
                                                            }] : ((): t.__strategy_dictionary_TU => {
                                                                switch (entry["type"][1]["type"][1]["strategy"][0]) {
                                                                    case "add entry":
                                                                        return ["add entry", {
                                                                            "expression": entry["type"][1]["type"][1]["strategy"][1]["expression"] === undefined ? _default_generateBuilder_type_expression() : _generateBuilder_type_expression(entry["type"][1]["type"][1]["strategy"][1]["expression"]),
                                                                            "key": entry["type"][1]["type"][1]["strategy"][1]["key"] === undefined ? _default_generateBuilder_string_expression() : _generateBuilder_string_expression(entry["type"][1]["type"][1]["strategy"][1]["key"]),
                                                                        }]
                                                                    default: return pl.au(entry["type"][1]["type"][1]["strategy"][0])
                                                                }
                                                            })(),
                                                        }]
                                                    case "list":
                                                        return ["list", {
                                                            "strategy": entry["type"][1]["type"][1]["strategy"] === undefined ? ["add element", {
                                                                "expression": _default_generateBuilder_type_expression(),
                                                            }] : ((): t.__strategy_list_TU => {
                                                                switch (entry["type"][1]["type"][1]["strategy"][0]) {
                                                                    case "add element":
                                                                        return ["add element", {
                                                                            "expression": entry["type"][1]["type"][1]["strategy"][1]["expression"] === undefined ? _default_generateBuilder_type_expression() : _generateBuilder_type_expression(entry["type"][1]["type"][1]["strategy"][1]["expression"]),
                                                                        }]
                                                                    default: return pl.au(entry["type"][1]["type"][1]["strategy"][0])
                                                                }
                                                            })(),
                                                        }]
                                                    case "string":
                                                        return ["string", {
                                                            "initializer": entry["type"][1]["type"][1]["initializer"] === undefined ? _default_generateBuilder_string_expression() : _generateBuilder_string_expression(entry["type"][1]["type"][1]["initializer"]),
                                                        }]
                                                    case "type4":
                                                        return ["type4", {
                                                            "expression": entry["type"][1]["type"][1]["expression"] === undefined ? _default_generateBuilder_type_expression() : _generateBuilder_type_expression(entry["type"][1]["type"][1]["expression"]),
                                                        }]
                                                    default: return pl.au(entry["type"][1]["type"][0])
                                                }
                                            })(),
                                        }]
                                    default: return pl.au(entry["type"][0])
                                }
                            })(),
                        })
                    })
                    return target.toArray()
                }
            })(),
            "markers": intermediate["markers"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__markers_T> => {
                {
                    const source = intermediate["markers"]
                    const target: { [key: string]: t.__markers_T } = {}
                    return pl.createDictionary(source).map((entry, key) => {
                        return {
                            "selection": entry["selection"] === undefined ? _default_generateBuilder_context_selection() : _generateBuilder_context_selection(entry["selection"]),
                        }
                    })
                    return pl.createDictionary(target)
                }
            })(),
            "nested procedures": intermediate["nested procedures"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__nested_procedures_T> => {
                {
                    const source = intermediate["nested procedures"]
                    const target: { [key: string]: t.__nested_procedures_T } = {}
                    return pl.createDictionary(source).map((entry, key) => {
                        return {
                            "specification": entry["specification"] === undefined ? _default_generateBuilder_internal_procedure_specification() : _generateBuilder_internal_procedure_specification(entry["specification"]),
                        }
                    })
                    return pl.createDictionary(target)
                }
            })(),
            "return value": intermediate["return value"] === undefined ? ["void", {
            }] : ((): t.__return_value_TU => {
                switch (intermediate["return value"][0]) {
                    case "interface":
                        return ["interface", {
                            "expression": intermediate["return value"][1]["expression"] === undefined ? _default_generateBuilder_interface_expression() : _generateBuilder_interface_expression(intermediate["return value"][1]["expression"]),
                        }]
                    case "void":
                        return ["void", {
                        }]
                    default: return pl.au(intermediate["return value"][0])
                }
            })(),
            "states": intermediate["states"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__states_T> => {
                {
                    const source = intermediate["states"]
                    const target: { [key: string]: t.__states_T } = {}
                    return pl.createDictionary(source).map((entry, key) => {
                        return {
                            "type": entry["type"] === undefined ? ["string", {
                                "initial value": "",
                            }] : ((): t.__type_states_TU => {
                                switch (entry["type"][0]) {
                                    case "dictionary":
                                        return ["dictionary", {
                                            "type": entry["type"][1]["type"] === undefined ? _default_generateBuilder_nested_type_reference() : _generateBuilder_nested_type_reference(entry["type"][1]["type"]),
                                        }]
                                    case "list":
                                        return ["list", {
                                            "type": entry["type"][1]["type"] === undefined ? _default_generateBuilder_nested_type_reference() : _generateBuilder_nested_type_reference(entry["type"][1]["type"]),
                                        }]
                                    case "string":
                                        return ["string", {
                                            "initial value": entry["type"][1]["initial value"] === undefined ? "" : entry["type"][1]["initial value"],
                                        }]
                                    case "type5":
                                        return ["type5", {
                                            "expression": entry["type"][1]["expression"] === undefined ? _default_generateBuilder_type_expression() : _generateBuilder_type_expression(entry["type"][1]["expression"]),
                                            "nested type": entry["type"][1]["nested type"] === undefined ? _default_generateBuilder_nested_type_reference() : _generateBuilder_nested_type_reference(entry["type"][1]["nested type"]),
                                        }]
                                    default: return pl.au(entry["type"][0])
                                }
                            })(),
                        }
                    })
                    return pl.createDictionary(target)
                }
            })(),
        }
    }

    function _default_generateBuilder_procedure_block(
    ): t.__procedure_block_T {
        return {
            "effects": pl.createArray([]),
            "markers": pl.createDictionary({}),
            "nested procedures": pl.createDictionary({}),
            "return value": ["void", {
            }],
            "states": pl.createDictionary({}),
        }
    }

    function _generateBuilder_procedure_call(
        intermediate: t.__procedure_call_B,
    ): t.__procedure_call_T {
        return {
            "interface arguments": intermediate["interface arguments"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__interface_arguments_T> => {
                {
                    const source = intermediate["interface arguments"]
                    const target: { [key: string]: t.__interface_arguments_T } = {}
                    return pl.createDictionary(source).map((entry, key) => {
                        return {
                            "expression": entry["expression"] === undefined ? _default_generateBuilder_interface_expression() : _generateBuilder_interface_expression(entry["expression"]),
                        }
                    })
                    return pl.createDictionary(target)
                }
            })(),
        }
    }

    function _default_generateBuilder_procedure_call(
    ): t.__procedure_call_T {
        return {
            "interface arguments": pl.createDictionary({}),
        }
    }

    function _generateBuilder_root(
        intermediate: t.__root_B,
    ): t.__root_T {
        return {
            "function implementations": intermediate["function implementations"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__function_implementations_T> => {
                {
                    const source = intermediate["function implementations"]
                    const target: { [key: string]: t.__function_implementations_T } = {}
                    return pl.createDictionary(source).map((entry, key) => {
                        return {
                            "block": entry["block"] === undefined ? _default_generateBuilder_type_expression_block() : _generateBuilder_type_expression_block(entry["block"]),
                            "declaration": entry["declaration"] === undefined ? "*function declaration*" : entry["declaration"],
                            "namespace reference": entry["namespace reference"] === undefined ? _default_generateBuilder_namespace_reference() : _generateBuilder_namespace_reference(entry["namespace reference"]),
                            "type parameters": entry["type parameters"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__type_parameters_T> => {
                                {
                                    const source = entry["type parameters"]
                                    const target: { [key: string]: t.__type_parameters_T } = {}
                                    return pl.createDictionary(source).map((entry, key) => {
                                        return {
                                        }
                                    })
                                    return pl.createDictionary(target)
                                }
                            })(),
                        }
                    })
                    return pl.createDictionary(target)
                }
            })(),
            "namespaces": intermediate["namespaces"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__namespaces_T> => {
                {
                    const source = intermediate["namespaces"]
                    const target: { [key: string]: t.__namespaces_T } = {}
                    return pl.createDictionary(source).map((entry, key) => {
                        return {
                            "function declarations": entry["function declarations"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__function_declarations_T> => {
                                {
                                    const source = entry["function declarations"]
                                    const target: { [key: string]: t.__function_declarations_T } = {}
                                    return pl.createDictionary(source).map((entry, key) => {
                                        return {
                                            "declaration": entry["declaration"] === undefined ? _default_generateBuilder_function_declaration() : _generateBuilder_function_declaration(entry["declaration"]),
                                        }
                                    })
                                    return pl.createDictionary(target)
                                }
                            })(),
                            "interface builders": entry["interface builders"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__interface_builders_T> => {
                                {
                                    const source = entry["interface builders"]
                                    const target: { [key: string]: t.__interface_builders_T } = {}
                                    return pl.createDictionary(source).map((entry, key) => {
                                        return {
                                            "methods": entry["methods"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__methods_T> => {
                                                {
                                                    const source = entry["methods"]
                                                    const target: { [key: string]: t.__methods_T } = {}
                                                    return pl.createDictionary(source).map((entry, key) => {
                                                        return {
                                                            "declaration": entry["declaration"] === undefined ? _default_generateBuilder_builder_procedure_declaration() : _generateBuilder_builder_procedure_declaration(entry["declaration"]),
                                                        }
                                                    })
                                                    return pl.createDictionary(target)
                                                }
                                            })(),
                                        }
                                    })
                                    return pl.createDictionary(target)
                                }
                            })(),
                            "interfaces": entry["interfaces"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__interfaces_namespaces_T> => {
                                {
                                    const source = entry["interfaces"]
                                    const target: { [key: string]: t.__interfaces_namespaces_T } = {}
                                    return pl.createDictionary(source).map((entry, key) => {
                                        return {
                                            "definition": entry["definition"] === undefined ? _default_generateBuilder_interface_definition() : _generateBuilder_interface_definition(entry["definition"]),
                                        }
                                    })
                                    return pl.createDictionary(target)
                                }
                            })(),
                            "procedure declarations": entry["procedure declarations"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__procedure_declarations_T> => {
                                {
                                    const source = entry["procedure declarations"]
                                    const target: { [key: string]: t.__procedure_declarations_T } = {}
                                    return pl.createDictionary(source).map((entry, key) => {
                                        return {
                                            "builders": entry["builders"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__builders_T> => {
                                                {
                                                    const source = entry["builders"]
                                                    const target: { [key: string]: t.__builders_T } = {}
                                                    return pl.createDictionary(source).map((entry, key) => {
                                                        return {
                                                            "builder": entry["builder"] === undefined ? "*referenced builder*" : entry["builder"],
                                                            "namespace selection": entry["namespace selection"] === undefined ? _default_generateBuilder_namespace_selection() : _generateBuilder_namespace_selection(entry["namespace selection"]),
                                                        }
                                                    })
                                                    return pl.createDictionary(target)
                                                }
                                            })(),
                                            "context": entry["context"] === undefined ? _default_generateBuilder_type_reference() : _generateBuilder_type_reference(entry["context"]),
                                            "functions": entry["functions"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__functions_T> => {
                                                {
                                                    const source = entry["functions"]
                                                    const target: { [key: string]: t.__functions_T } = {}
                                                    return pl.createDictionary(source).map((entry, key) => {
                                                        return {
                                                            "declaration": entry["declaration"] === undefined ? _default_generateBuilder_function_declaration() : _generateBuilder_function_declaration(entry["declaration"]),
                                                        }
                                                    })
                                                    return pl.createDictionary(target)
                                                }
                                            })(),
                                            "interfaces": entry["interfaces"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__interfaces_procedure_declarations_T> => {
                                                {
                                                    const source = entry["interfaces"]
                                                    const target: { [key: string]: t.__interfaces_procedure_declarations_T } = {}
                                                    return pl.createDictionary(source).map((entry, key) => {
                                                        return {
                                                            "interface": entry["interface"] === undefined ? _default_generateBuilder_interface_definition() : _generateBuilder_interface_definition(entry["interface"]),
                                                        }
                                                    })
                                                    return pl.createDictionary(target)
                                                }
                                            })(),
                                            "return type": entry["return type"] === undefined ? ["void", {
                                            }] : ((): t.__return_type_procedure_declarations_TU => {
                                                switch (entry["return type"][0]) {
                                                    case "interface":
                                                        return ["interface", {
                                                            "interface": entry["return type"][1]["interface"] === undefined ? _default_generateBuilder_interface_definition() : _generateBuilder_interface_definition(entry["return type"][1]["interface"]),
                                                        }]
                                                    case "void":
                                                        return ["void", {
                                                        }]
                                                    default: return pl.au(entry["return type"][0])
                                                }
                                            })(),
                                        }
                                    })
                                    return pl.createDictionary(target)
                                }
                            })(),
                            "type parameters": entry["type parameters"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__type_parameters_namespaces_T> => {
                                {
                                    const source = entry["type parameters"]
                                    const target: { [key: string]: t.__type_parameters_namespaces_T } = {}
                                    return pl.createDictionary(source).map((entry, key) => {
                                        return {
                                        }
                                    })
                                    return pl.createDictionary(target)
                                }
                            })(),
                            "types": entry["types"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__types_T> => {
                                {
                                    const source = entry["types"]
                                    const target: { [key: string]: t.__types_T } = {}
                                    return pl.createDictionary(source).map((entry, key) => {
                                        return {
                                            "type": entry["type"] === undefined ? _default_generateBuilder_type() : _generateBuilder_type(entry["type"]),
                                        }
                                    })
                                    return pl.createDictionary(target)
                                }
                            })(),
                        }
                    })
                    return pl.createDictionary(target)
                }
            })(),
            "procedure implementations": intermediate["procedure implementations"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__procedure_implementations_T> => {
                {
                    const source = intermediate["procedure implementations"]
                    const target: { [key: string]: t.__procedure_implementations_T } = {}
                    return pl.createDictionary(source).map((entry, key) => {
                        return {
                            "block": entry["block"] === undefined ? _default_generateBuilder_procedure_block() : _generateBuilder_procedure_block(entry["block"]),
                            "declaration": entry["declaration"] === undefined ? "*procedure declaration*" : entry["declaration"],
                            "namespace reference": entry["namespace reference"] === undefined ? _default_generateBuilder_namespace_reference() : _generateBuilder_namespace_reference(entry["namespace reference"]),
                            "type parameters": entry["type parameters"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__type_parameters_procedure_implementations_T> => {
                                {
                                    const source = entry["type parameters"]
                                    const target: { [key: string]: t.__type_parameters_procedure_implementations_T } = {}
                                    return pl.createDictionary(source).map((entry, key) => {
                                        return {
                                        }
                                    })
                                    return pl.createDictionary(target)
                                }
                            })(),
                        }
                    })
                    return pl.createDictionary(target)
                }
            })(),
        }
    }

    function _default_generateBuilder_root(
    ): t.__root_T {
        return {
            "function implementations": pl.createDictionary({}),
            "namespaces": pl.createDictionary({}),
            "procedure implementations": pl.createDictionary({}),
        }
    }

    function _generateBuilder_string_expression(
        intermediate: t.__string_expression_B,
    ): t.__string_expression_T {
        return {
            "strategy": intermediate["strategy"] === undefined ? ["literal", {
                "value": "",
            }] : ((): t.__strategy_string_expression_TU => {
                switch (intermediate["strategy"][0]) {
                    case "literal":
                        return ["literal", {
                            "value": intermediate["strategy"][1]["value"] === undefined ? "" : intermediate["strategy"][1]["value"],
                        }]
                    case "select":
                        return ["select", {
                            "context": intermediate["strategy"][1]["context"] === undefined ? _default_generateBuilder_context_selection() : _generateBuilder_context_selection(intermediate["strategy"][1]["context"]),
                        }]
                    case "state":
                        return ["state", {
                            "state": intermediate["strategy"][1]["state"] === undefined ? "*state*" : intermediate["strategy"][1]["state"],
                        }]
                    default: return pl.au(intermediate["strategy"][0])
                }
            })(),
        }
    }

    function _default_generateBuilder_string_expression(
    ): t.__string_expression_T {
        return {
            "strategy": ["literal", {
                "value": "",
            }],
        }
    }

    function _generateBuilder_type(
        intermediate: t.__type_B,
    ): t.__type_T {
        return {
            "occurence": intermediate["occurence"] === undefined ? ["required", {
            }] : ((): t.__occurence_TU => {
                switch (intermediate["occurence"][0]) {
                    case "optional":
                        return ["optional", {
                        }]
                    case "required":
                        return ["required", {
                        }]
                    default: return pl.au(intermediate["occurence"][0])
                }
            })(),
            "type": intermediate["type"] === undefined ? ["string", {
            }] : ((): t.__type_type_TU => {
                switch (intermediate["type"][0]) {
                    case "boolean":
                        return ["boolean", {
                        }]
                    case "dictionary":
                        return ["dictionary", {
                            "entry": intermediate["type"][1]["entry"] === undefined ? _default_generateBuilder_type() : _generateBuilder_type(intermediate["type"][1]["entry"]),
                        }]
                    case "group":
                        return ["group", {
                            "properties": intermediate["type"][1]["properties"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__properties_T> => {
                                {
                                    const source = intermediate["type"][1]["properties"]
                                    const target: { [key: string]: t.__properties_T } = {}
                                    return pl.createDictionary(source).map((entry, key) => {
                                        return {
                                            "type": entry["type"] === undefined ? _default_generateBuilder_type() : _generateBuilder_type(entry["type"]),
                                        }
                                    })
                                    return pl.createDictionary(target)
                                }
                            })(),
                        }]
                    case "list":
                        return ["list", {
                            "element": intermediate["type"][1]["element"] === undefined ? _default_generateBuilder_type() : _generateBuilder_type(intermediate["type"][1]["element"]),
                        }]
                    case "number":
                        return ["number", {
                        }]
                    case "string":
                        return ["string", {
                        }]
                    case "tagged union":
                        return ["tagged union", {
                            "options": intermediate["type"][1]["options"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__options_T> => {
                                {
                                    const source = intermediate["type"][1]["options"]
                                    const target: { [key: string]: t.__options_T } = {}
                                    return pl.createDictionary(source).map((entry, key) => {
                                        return {
                                            "type": entry["type"] === undefined ? _default_generateBuilder_type() : _generateBuilder_type(entry["type"]),
                                        }
                                    })
                                    return pl.createDictionary(target)
                                }
                            })(),
                        }]
                    case "type argument":
                        return ["type argument", {
                            "argument": intermediate["type"][1]["argument"] === undefined ? "*type argument*" : intermediate["type"][1]["argument"],
                        }]
                    case "type reference":
                        return ["type reference", {
                            "type": intermediate["type"][1]["type"] === undefined ? _default_generateBuilder_type_reference() : _generateBuilder_type_reference(intermediate["type"][1]["type"]),
                        }]
                    default: return pl.au(intermediate["type"][0])
                }
            })(),
        }
    }

    function _default_generateBuilder_type(
    ): t.__type_T {
        return {
            "occurence": ["required", {
            }],
            "type": ["string", {
            }],
        }
    }

    function _generateBuilder_type_expression(
        intermediate: t.__type_expression_B,
    ): t.__type_expression_T {
        return {
            "strategy": intermediate["strategy"] === undefined ? ["literal", {
                "type": ["string", {
                    "value": "",
                }],
            }] : ((): t.__strategy_type_expression_TU => {
                switch (intermediate["strategy"][0]) {
                    case "copy":
                        return ["copy", {
                            "context": intermediate["strategy"][1]["context"] === undefined ? _default_generateBuilder_guaranteed_context_selection() : _generateBuilder_guaranteed_context_selection(intermediate["strategy"][1]["context"]),
                        }]
                    case "dictionary from state":
                        return ["dictionary from state", {
                            "state": intermediate["strategy"][1]["state"] === undefined ? "*state*" : intermediate["strategy"][1]["state"],
                        }]
                    case "literal":
                        return ["literal", {
                            "type": intermediate["strategy"][1]["type"] === undefined ? ["string", {
                                "value": "",
                            }] : ((): t.__type_literal_TU => {
                                switch (intermediate["strategy"][1]["type"][0]) {
                                    case "boolean":
                                        return ["boolean", {
                                            "value": intermediate["strategy"][1]["type"][1]["value"] === undefined ? "true" : intermediate["strategy"][1]["type"][1]["value"],
                                        }]
                                    case "dictionary":
                                        return ["dictionary", {
                                        }]
                                    case "group":
                                        return ["group", {
                                            "properties": intermediate["strategy"][1]["type"][1]["properties"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__properties_group_T> => {
                                                {
                                                    const source = intermediate["strategy"][1]["type"][1]["properties"]
                                                    const target: { [key: string]: t.__properties_group_T } = {}
                                                    return pl.createDictionary(source).map((entry, key) => {
                                                        return {
                                                            "expression": entry["expression"] === undefined ? _default_generateBuilder_type_expression() : _generateBuilder_type_expression(entry["expression"]),
                                                        }
                                                    })
                                                    return pl.createDictionary(target)
                                                }
                                            })(),
                                        }]
                                    case "list":
                                        return ["list", {
                                        }]
                                    case "number":
                                        return ["number", {
                                            "value": intermediate["strategy"][1]["type"][1]["value"] === undefined ? "0" : intermediate["strategy"][1]["type"][1]["value"],
                                        }]
                                    case "string":
                                        return ["string", {
                                            "value": intermediate["strategy"][1]["type"][1]["value"] === undefined ? "" : intermediate["strategy"][1]["type"][1]["value"],
                                        }]
                                    case "tagged union":
                                        return ["tagged union", {
                                            "data": intermediate["strategy"][1]["type"][1]["data"] === undefined ? _default_generateBuilder_type_expression() : _generateBuilder_type_expression(intermediate["strategy"][1]["type"][1]["data"]),
                                            "option": intermediate["strategy"][1]["type"][1]["option"] === undefined ? "*option*" : intermediate["strategy"][1]["type"][1]["option"],
                                        }]
                                    case "type argument":
                                        return ["type argument", {
                                        }]
                                    case "type reference":
                                        return ["type reference", {
                                            "expression": intermediate["strategy"][1]["type"][1]["expression"] === undefined ? _default_generateBuilder_type_expression() : _generateBuilder_type_expression(intermediate["strategy"][1]["type"][1]["expression"]),
                                        }]
                                    default: return pl.au(intermediate["strategy"][1]["type"][0])
                                }
                            })(),
                        }]
                    case "map":
                        return ["map", {
                            "context": intermediate["strategy"][1]["context"] === undefined ? _default_generateBuilder_guaranteed_context_selection() : _generateBuilder_guaranteed_context_selection(intermediate["strategy"][1]["context"]),
                            "entry": intermediate["strategy"][1]["entry"] === undefined ? _default_generateBuilder_type_expression() : _generateBuilder_type_expression(intermediate["strategy"][1]["entry"]),
                        }]
                    case "switch":
                        return ["switch", {
                            "context": intermediate["strategy"][1]["context"] === undefined ? _default_generateBuilder_guaranteed_context_selection() : _generateBuilder_guaranteed_context_selection(intermediate["strategy"][1]["context"]),
                            "options": intermediate["strategy"][1]["options"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__options_switch_T> => {
                                {
                                    const source = intermediate["strategy"][1]["options"]
                                    const target: { [key: string]: t.__options_switch_T } = {}
                                    return pl.createDictionary(source).map((entry, key) => {
                                        return {
                                            "expression": entry["expression"] === undefined ? _default_generateBuilder_type_expression() : _generateBuilder_type_expression(entry["expression"]),
                                        }
                                    })
                                    return pl.createDictionary(target)
                                }
                            })(),
                        }]
                    default: return pl.au(intermediate["strategy"][0])
                }
            })(),
        }
    }

    function _default_generateBuilder_type_expression(
    ): t.__type_expression_T {
        return {
            "strategy": ["literal", {
                "type": ["string", {
                    "value": "",
                }],
            }],
        }
    }

    function _generateBuilder_type_expression_block(
        intermediate: t.__type_expression_block_B,
    ): t.__type_expression_block_T {
        return {
            "expression": intermediate["expression"] === undefined ? _default_generateBuilder_type_expression() : _generateBuilder_type_expression(intermediate["expression"]),
            "functions": intermediate["functions"] === undefined ? pl.createDictionary({}) : ((): pt.Dictionary<t.__functions_type_expression_block_T> => {
                {
                    const source = intermediate["functions"]
                    const target: { [key: string]: t.__functions_type_expression_block_T } = {}
                    return pl.createDictionary(source).map((entry, key) => {
                        return {
                            "block": entry["block"] === undefined ? _default_generateBuilder_type_expression_block() : _generateBuilder_type_expression_block(entry["block"]),
                            "declaration": entry["declaration"] === undefined ? _default_generateBuilder_function_declaration() : _generateBuilder_function_declaration(entry["declaration"]),
                        }
                    })
                    return pl.createDictionary(target)
                }
            })(),
        }
    }

    function _default_generateBuilder_type_expression_block(
    ): t.__type_expression_block_T {
        return {
            "expression": _default_generateBuilder_type_expression(),
            "functions": pl.createDictionary({}),
        }
    }

    function _generateBuilder_type_reference(
        intermediate: t.__type_reference_B,
    ): t.__type_reference_T {
        return {
            "namespace selection": intermediate["namespace selection"] === undefined ? _default_generateBuilder_namespace_selection() : _generateBuilder_namespace_selection(intermediate["namespace selection"]),
            "type": intermediate["type"] === undefined ? "*type reference*" : intermediate["type"],
        }
    }

    function _default_generateBuilder_type_reference(
    ): t.__type_reference_T {
        return {
            "namespace selection": _default_generateBuilder_namespace_selection(),
            "type": "*type reference*",
        }
    }

    return _generateBuilder_root(intermediate)
}
