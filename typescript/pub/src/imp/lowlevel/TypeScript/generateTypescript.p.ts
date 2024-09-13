// import * as pt from 'pareto-core-types'
// import * as pl from 'pareto-core-lib'
// import * as ll from "../generated/types"
// import * as fp from "fountain-pen-lib"

// function findImp<T>(
//     dict: pt.Dictionary<T>,
//     name: string,
//     onNotFound: (options: string[]) => T,
// ): T {
//     let res: T | null = null
//     const options: string[] = []
//     dict.forEach(() => false, ($, key) => {
//         options.push(key)
//         if (key === name) {
//             res = $
//         }
//     })
//     if (res !== null) {
//         return res
//     } else {
//         return onNotFound(options)
//     }
// }

// function find<T>(
//     dict: pt.Dictionary<T>,
//     name: string,
// ): T {
//     return findImp(
//         dict,
//         name,
//         (options) => {
//             throw new Error(`missing: ${name}, options: ${options.map((o) => `'${o}'`).join(", ")}`)
//         }
//     )
// }

// function findInStack<T>(
//     stack: pt.Dictionary<T>[],
//     name: string,
// ): T {
//     const opts: { [key: string]: null } = {}
//     for (let i = 0; i !== stack.length; i += 1) {
//         const tmp = findImp(
//             stack[i],
//             name,
//             (options) => {
//                 options.forEach(($) => {
//                     opts[$] = null
//                 })
//                 return null
//             },
//         )
//         if (tmp !== null) {
//             return tmp
//         }
//     }
//     throw new Error(`missing: ${name}, options: ${Object.keys(opts).map(($) => `'${$}'`).join(`, `)}`)
// }

// function generateIdentifier(str: string) {
//     return str.replace(/ /g, "_").replace(/\-/g, "_")
// }

// function generateQuoted(str: string) {
//     return `"${str.replace(/\\/g, "\\\\").replace(/"/g, "\\\"")}"`
// }

// interface TypeNameBuilder {
//     dictionary(): TypeNameBuilder
//     list(): TypeNameBuilder
//     group(): GroupNameBuilder
//     taggedUnion(): TaggedUnionNameBuilder
//     getIdentifier(): string
//     getNamespaceName(): string
// }

// interface GroupNameBuilder {
//     property(name: string): TypeNameBuilder
// }

// interface TaggedUnionNameBuilder {
//     option(name: string): TypeNameBuilder
// }

// function createNameBuilder(
//     schema: ll.__root_T,
//     namespaceName: string,
// ) {
//     const ns = find(schema.namespaces, namespaceName)
//     function createTypeNameBuilder(
//         path: string,
//         type: ll.__type_T
//     ): TypeNameBuilder {
//         return {
//             dictionary: () => {
//                 if (type.type[0] !== "dictionary") {
//                     throw new Error(`Not a dictionary: ${generateIdentifier(path)}`)
//                 }
//                 return createTypeNameBuilder(`${path}_D`, type.type[1].entry)
//             },
//             list: () => {
//                 if (type.type[0] !== "list") {
//                     throw new Error(`Not a list: ${generateIdentifier(path)}`)
//                 }
//                 return createTypeNameBuilder(`${path}_L`, type.type[1].element)
//             },
//             group: () => {
//                 if (type.type[0] !== "group") {
//                     throw new Error(`Not a group: ${generateIdentifier(path)}`)
//                 }
//                 const $ = type.type[1]
//                 return {
//                     property: (name) => {
//                         return createTypeNameBuilder(`${path}_G_${name}_P`, find($.properties, name).type)
//                     },
//                 }
//             },
//             taggedUnion: () => {
//                 if (type.type[0] !== "tagged union") {
//                     throw new Error(`Not a tagged union: ${generateIdentifier(path)}`)
//                 }
//                 const $ = type.type[1]
//                 return {
//                     option: (optName) => {
//                         return createTypeNameBuilder(`${path}_TU_${optName}_O`, find($.options, optName).type)
//                     },
//                 }
//             },
//             getIdentifier: () => {
//                 return `${generateIdentifier(path)}`
//             },
//             getNamespaceName: () => {
//                 return namespaceName
//             },
//         }
//     }

//     return {
//         type: (name: string) => {
//             return createTypeNameBuilder(`${generateIdentifier(namespaceName)}_${name}`, find(ns.types, name).type)
//         },
//     }
// }

// function createUntypedNameBuilder(
//     schema: ll.__root_T,
//     namespaceName: string,
// ) {
//     const ns = find(schema.namespaces, namespaceName)
//     function createTypeNameBuilder(
//         path: string,
//     ): TypeNameBuilder {

//         return {
//             dictionary: () => {
//                 return createTypeNameBuilder(`${path}_D`)
//             },
//             list: () => {
//                 return createTypeNameBuilder(`${path}_L`)
//             },
//             group: () => {
//                 return {
//                     property: (name) => {
//                         return createTypeNameBuilder(`${path}_G_${name}_P`)
//                     },
//                 }
//             },
//             taggedUnion: () => {
//                 return {
//                     option: (optName) => {
//                         return createTypeNameBuilder(`${path}_TU_${optName}_O`)
//                     },
//                 }
//             },
//             getIdentifier: () => {
//                 return `${generateIdentifier(path)}`
//             },
//             getNamespaceName: () => {
//                 return namespaceName
//             },
//         }
//     }

//     return {
//         type: (name: string) => {
//             find(ns.types, name)
//             return createTypeNameBuilder(`${generateIdentifier(namespaceName)}_${name}`)
//         },
//     }
// }

// function booleanToString($: string) { //FIX this should be a boolean
//     return $
// }

// function numberToString($: string) { //FIX this should be a number
//     return $
// }

// export function generateTypeScript(
//     $: ll.__root_T,
//     $w: fp.IBlock,
// ): void {
//     const $root = $
//     function generateProcedureDeclaration(
//         $: ll.__procedure_declarations_T,
//         $w: fp.ILine,
//         arrowOrColon: string,
//         namespaceName: string,
//         typeArgumentsCallback: ($w: fp.ILine) => void,
//     ) {
//         $w.snippet(`(`)
//         $w.indent({}, ($w) => {
//             $w.line({}, ($w) => {
//                 $w.snippet(`$c: `)
//                 generateTypeReference(
//                     $.context,
//                     $w,
//                     namespaceName,
//                     ($w) => {
//                         $w.snippet(`FIXME CONTEXT`)
//                     },
//                 )
//                 $w.snippet(`,`)
//             })
//             $w.line({}, ($w) => {
//                 $w.snippet(`$i: `)
//                 $w.snippet(`{`)
//                 $w.indent({}, ($w) => {
//                     $.interfaces.forEach(() => false, ($, key) => {
//                         $w.line({}, ($w) => {
//                             $w.snippet(`${generateQuoted(key)}: `)
//                             generateInterfaceDefinition(
//                                 $.interface,
//                                 $w,
//                                 namespaceName,
//                                 typeArgumentsCallback,
//                             )
//                         })
//                     })
//                 })
//                 $w.snippet(`},`)
//             })
//             $w.line({}, ($w) => {
//                 $w.snippet(`$b: `)
//                 $w.snippet(`{`)
//                 $w.indent({}, ($w) => {
//                     $.builders.forEach(() => false, ($, key) => {
//                         $w.line({}, ($w) => {
//                             $w.snippet(`${generateQuoted(key)}: `)
//                             generateNamespacedIdentifier(
//                                 $["namespace selection"],
//                                 $w,
//                                 ($w) => {
//                                     $w.snippet(`_${$.builder}_IB`)
//                                 },
//                                 namespaceName,
//                                 typeArgumentsCallback,
//                             )
//                         })
//                     })
//                 })
//                 $w.snippet(`},`)
//             })
//             $w.line({}, ($w) => {
//                 $w.snippet(`$f: `)
//                 $w.snippet(`{`)
//                 $w.indent({}, ($w) => {
//                     $.functions.forEach(() => false, ($, key) => {
//                         $w.line({}, ($w) => {
//                             $w.snippet(`${generateQuoted(key)}: `)
//                             generateFunctionDeclaration(
//                                 $.declaration,
//                                 $w,
//                                 ` =>`,
//                                 namespaceName,
//                                 typeArgumentsCallback,
//                             )
//                         })
//                     })
//                 })
//                 $w.snippet(`},`)
//             })
//         })
//         $w.snippet(`)${arrowOrColon} `)
//         switch ($["return type"][0]) {
//             case "interface":
//                 pl.cc($["return type"][1], ($) => {
//                     generateInterfaceDefinition(
//                         $.interface,
//                         $w,
//                         namespaceName,
//                         typeArgumentsCallback,
//                     )
//                 })
//                 break
//             case "void":
//                 pl.cc($["return type"][1], ($) => {
//                     $w.snippet(`void`)
//                 })
//                 break
//             default:
//                 pl.au($["return type"][0])
//         }
//     }
//     function generateNamespacedIdentifier(
//         $: ll.__namespace_selection_T,
//         $w: fp.ILine,
//         identifier: ($w: fp.ILine) => void,
//         namespaceName: string,
//         typeArgumentsCallback: ($w: fp.ILine) => void,
//     ) {
//         switch ($.which[0]) {
//             case "current":
//                 pl.cc($.which[1], ($) => {
//                     $w.snippet(`${generateIdentifier(namespaceName)}`)
//                     identifier($w)
//                     typeArgumentsCallback($w)
//                 })
//                 break
//             case "other":
//                 pl.cc($.which[1], ($) => {
//                     function generateNamespaceReference(
//                         $: ll.__namespace_reference_T,
//                         $w: fp.ILine,
//                     ) {
//                         $w.snippet(`${generateIdentifier($.namespace)}`)
//                         identifier($w)
//                         doDictionary(
//                             $["type arguments"],
//                             () => {
//                                 //
//                             },
//                             () => {
//                                 $w.snippet(`<`)
//                             },
//                             () => {
//                                 $w.snippet(`>`)
//                             },
//                             ($, key) => {
//                                 $w.snippet(`${generateIdentifier(key)}`)
//                             },
//                             () => {
//                                 $w.snippet(`, `)
//                             },
//                         )
//                     }
//                     generateNamespaceReference(
//                         $["namespace reference"],
//                         $w,
//                     )
//                 })
//                 break
//             default:
//                 pl.au($.which[0])
//         }
//     }
//     function generateFunctionDeclaration(
//         $: ll.__function_declaration_T,
//         $w: fp.ILine,
//         arrowOrColon: string,
//         namespaceName: string,
//         typeArgumentsCallback: ($w: fp.ILine) => void,
//     ) {
//         $w.snippet(`($c: `)
//         generateTypeReference(
//             $.in,
//             $w,
//             namespaceName,
//             typeArgumentsCallback,
//         )
//         $w.snippet(`)${arrowOrColon} `)
//         generateTypeReference(
//             $.out,
//             $w,
//             namespaceName,
//             typeArgumentsCallback,
//         )

//     }
//     function generateTypeReference(
//         $: ll.__type_reference_T,
//         $w: fp.ILine,
//         namespaceName: string,
//         typeArgumentsCallback: ($w: fp.ILine) => void,
//     ) {
//         const $$ = $
//         generateNamespacedIdentifier(
//             $["namespace selection"],
//             $w,
//             ($w) => {
//                 $w.snippet(`_${generateIdentifier($.type)}_T`)
//             },
//             namespaceName,
//             typeArgumentsCallback,
//         )
//     }
//     function generateInterfaceDefinition(
//         $: ll.__interface_definition_T,
//         $w: fp.ILine,
//         namespaceName: string,
//         typeArgumentsCallback: ($w: fp.ILine) => void,
//     ) {
//         switch ($.type[0]) {
//             case "dictionary":
//                 pl.cc($.type[1], ($) => {
//                     $w.snippet(`{`)
//                     $w.indent({}, ($w) => {
//                         $w.line({}, ($w) => {
//                             $w.snippet(`[key: string]: `)
//                             generateInterfaceDefinition(
//                                 $.entry,
//                                 $w,
//                                 namespaceName,
//                                 typeArgumentsCallback,
//                             )
//                         })
//                     })
//                     $w.snippet(`}`)
//                 })
//                 break
//             case "group":
//                 pl.cc($.type[1], ($) => {
//                     $w.snippet(`{`)
//                     $w.indent({}, ($w) => {
//                         $.members.forEach(() => false, ($, key) => {
//                             $w.line({}, ($w) => {
//                                 $w.snippet(`${generateQuoted(key)}: `)
//                                 generateInterfaceDefinition(
//                                     $.definition,
//                                     $w,
//                                     namespaceName,
//                                     typeArgumentsCallback,
//                                 )
//                             })
//                         })
//                     })
//                     $w.snippet(`}`)
//                 })
//                 break
//             case "method":
//                 pl.cc($.type[1], ($) => {
//                     $w.snippet(`($: `)
//                     generateTypeReference(
//                         $.type,
//                         $w,
//                         namespaceName,
//                         typeArgumentsCallback,
//                     )
//                     $w.snippet(`) => `)
//                     switch ($["return type"][0]) {
//                         case "interface":
//                             pl.cc($["return type"][1], ($) => {
//                                 generateInterfaceDefinition(
//                                     $.interface,
//                                     $w,
//                                     namespaceName,
//                                     typeArgumentsCallback,
//                                 )
//                             })
//                             break
//                         case "void":
//                             pl.cc($["return type"][1], () => {
//                                 $w.snippet(`void`)
//                             })
//                             break
//                         default:
//                             pl.au($["return type"][0])
//                     }
//                 })
//                 break
//             case "reference":
//                 pl.cc($.type[1], ($) => {
//                     const x = $.interface
//                     generateNamespacedIdentifier(
//                         $["namespace selection"],
//                         $w,
//                         ($w) => {
//                             $w.snippet(`_${x}_I`)
//                         },
//                         namespaceName,
//                         typeArgumentsCallback,
//                     )
//                 })
//                 break
//             default:
//                 pl.au($.type[0])
//         }
//     }
//     function generateMissingHandler(
//         $: ll.__missing_handler_T,
//         $w: fp.IBlock,
//         $r: {
//             context: TypeNameBuilder
//             target: TypeNameBuilder
//             markedValues: pt.Dictionary<ll.__markers_T>[]
//             states: pt.Dictionary<ll.__states_T>[]
//             nestedFunctions: pt.Dictionary<ll.__functions_type_expression_block_T>[]
//             externalFunctions: pt.Dictionary<ll.__functions_T> | null
//             namespaceName: string
//         },
//     ) {
//         switch ($.guaranteed[0]) {
//             case "no":
//                 pl.cc($.guaranteed[1], ($) => {
//                     $w.line({}, ($w) => {

//                         $w.snippet(`if ($c === undefined) {`)
//                         $w.indent({}, ($w) => {
//                             $w.line({}, ($w) => {
//                                 $w.snippet(`return `)
//                                 generateTypeExpression(
//                                     $["on missing"],
//                                     $w,
//                                     {
//                                         context: $r.context,
//                                         target: $r.target,
//                                         markedValues: $r.markedValues,
//                                         states: $r.states,
//                                         nestedFunctions: $r.nestedFunctions,
//                                         externalFunctions: $r.externalFunctions,
//                                         namespaceName: $r.namespaceName,
//                                     },
//                                 )
//                             })
//                         })
//                         $w.snippet(`}`)
//                     })
//                 })
//                 break
//             case "yes":
//                 pl.cc($.guaranteed[1], ($) => {
//                 })
//                 break
//             default:
//                 pl.au($.guaranteed[0])
//         }
//     }
//     function getNestedType(
//         $: ll.__nested_type_reference_T,
//     ): TypeNameBuilder {
//         let nameBuilder = createUntypedNameBuilder($root, $["namespace reference"].namespace).type($.type)
//         $.steps.forEach(($) => {
//             switch ($.type[0]) {
//                 case "dictionary":
//                     pl.cc($.type[1], ($) => {
//                         nameBuilder = nameBuilder.dictionary()
//                     })
//                     break
//                 case "group":
//                     pl.cc($.type[1], ($) => {
//                         nameBuilder = nameBuilder.group().property($.property)
//                     })
//                     break
//                 case "list":
//                     pl.cc($.type[1], ($) => {
//                         nameBuilder = nameBuilder.list()
//                     })
//                     break
//                 case "tagged union option":
//                     pl.cc($.type[1], ($) => {
//                         nameBuilder = nameBuilder.taggedUnion().option($.option)
//                     })
//                     break
//                 default:
//                     pl.au($.type[0])
//             }
//         })
//         return nameBuilder
//     }
//     function getContextStart(
//         $: ll.__context_start_T,
//         $r: {
//             context: TypeNameBuilder
//             markedValues: pt.Dictionary<ll.__markers_T>[]
//             states: pt.Dictionary<ll.__states_T>[]
//             nestedFunctions: pt.Dictionary<ll.__functions_type_expression_block_T>[]
//             externalFunctions: pt.Dictionary<ll.__functions_T> | null
//             currentNamespaceName: string
//         },
//     ): TypeNameBuilder {
//         switch ($.start[0]) {
//             case "marked value":
//                 return pl.cc($.start[1], ($) => {
//                     return getContextSelection(
//                         findInStack($r.markedValues, $.marker).selection,
//                         {
//                             context: $r.context,
//                             markedValues: $r.markedValues,
//                             states: $r.states,
//                             nestedFunctions: $r.nestedFunctions,
//                             externalFunctions: $r.externalFunctions,
//                             namespaceName: $r.currentNamespaceName,
//                         },
//                     )
//                 })
//             case "context":
//                 return pl.cc($.start[1], ($) => {
//                     return $r.context
//                 })
//             case "function":
//                 return pl.cc($.start[1], ($) => {
//                     switch ($.context[0]) {
//                         case "local function":
//                             return pl.cc($.context[1], ($) => {
//                                 return getTypeReference(
//                                     findInStack($r.nestedFunctions, $.function).declaration.out,
//                                     $r.currentNamespaceName,
//                                 )
//                             })
//                         case "argument":
//                             return pl.cc($.context[1], ($) => {
//                                 if ($r.externalFunctions === null) {
//                                     throw new Error(`unexpected missing external functions`)
//                                 }
//                                 return getTypeReference(
//                                     find($r.externalFunctions, $.function).declaration.out,
//                                     $r.currentNamespaceName,
//                                 )
//                             })
//                         default:
//                             return pl.au($.context[0])
//                     }
//                 })
//             case "state":
//                 return pl.cc($.start[1], ($) => {
//                     const $$ = $
//                     const $state = findInStack($r.states, $.state)
//                     if ($state.type[0] !== "type5") {
//                         throw new Error(`unexpected state: not a type, ${$.state}`)
//                     }
//                     const $type5 = $state.type[1]
//                     return getNestedType($type5["nested type"])
//                 })
//             default:
//                 return pl.au($.start[0])
//         }
//     }
//     function generateContextStart(
//         $: ll.__context_start_T,
//         $w: fp.IBlock,
//         $r: {
//             context: TypeNameBuilder
//             markedValues: pt.Dictionary<ll.__markers_T>[]
//             states: pt.Dictionary<ll.__states_T>[]
//             nestedFunctions: pt.Dictionary<ll.__functions_type_expression_block_T>[]
//             externalFunctions: pt.Dictionary<ll.__functions_T> | null
//             currentNamespaceName: string
//         },
//     ) {
//         let context = $r.context
//         $w.line({}, ($w) => {
//             $w.snippet(`const FOO = `)
//             switch ($.start[0]) {
//                 case "marked value":
//                     pl.cc($.start[1], ($) => {
//                         //console.error("SET CONTEXT")
//                         $w.snippet(`${$.marker}_m`)
//                     })
//                     break
//                 case "context":
//                     pl.cc($.start[1], ($) => {
//                         context = context
//                         $w.snippet(`$c`)
//                     })
//                     break
//                 case "function":
//                     pl.cc($.start[1], ($) => {
//                         function x2(
//                             functionTarget: TypeNameBuilder
//                         ) {
//                             $w.snippet(`(`)
//                             generateTypeExpression(
//                                 $.argument,
//                                 $w,
//                                 {
//                                     context: $r.context, //FIXME!!!!!!
//                                     target: functionTarget,
//                                     markedValues: $r.markedValues,
//                                     states: $r.states,
//                                     nestedFunctions: $r.nestedFunctions,
//                                     externalFunctions: $r.externalFunctions,
//                                     namespaceName: $r.currentNamespaceName,
//                                 },
//                             )
//                             $w.snippet(`)`)
//                         }
//                         switch ($.context[0]) {
//                             case "local function":
//                                 pl.cc($.context[1], ($) => {
//                                     $w.snippet(`${generateIdentifier($.function)}_fi`)
//                                     x2(
//                                         getTypeReference(
//                                             findInStack($r.nestedFunctions, $.function).declaration.out,
//                                             $r.currentNamespaceName,
//                                         )
//                                     )
//                                 })
//                                 break
//                             case "argument":
//                                 pl.cc($.context[1], ($) => {
//                                     if ($r.externalFunctions === null) {
//                                         throw new Error(`unexpected missing external functions`)
//                                     }
//                                     $w.snippet(`$f[${generateQuoted($.function)}]`)
//                                     x2(
//                                         getTypeReference(
//                                             find($r.externalFunctions, $.function).declaration.out,
//                                             $r.currentNamespaceName,
//                                         )
//                                     )
//                                 })
//                                 break
//                             default:
//                                 pl.au($.context[0])
//                         }
//                     })
//                     break
//                 case "state":
//                     pl.cc($.start[1], ($) => {
//                         $w.snippet(`${generateIdentifier($.state)}_s`)
//                     })
//                     break
//                 default:
//                     pl.au($.start[0])
//             }
//         })
//     }
//     function getContextSelection(
//         $: ll.__context_selection_T,
//         $r: {
//             context: TypeNameBuilder
//             markedValues: pt.Dictionary<ll.__markers_T>[]
//             states: pt.Dictionary<ll.__states_T>[]
//             nestedFunctions: pt.Dictionary<ll.__functions_type_expression_block_T>[]
//             externalFunctions: pt.Dictionary<ll.__functions_T> | null
//             namespaceName: string
//         },
//     ): TypeNameBuilder {

//         let context = getContextStart(
//             $["start"],
//             {
//                 context: $r.context,
//                 markedValues: $r.markedValues,
//                 states: $r.states,
//                 nestedFunctions: $r.nestedFunctions,
//                 externalFunctions: $r.externalFunctions,
//                 currentNamespaceName: $r.namespaceName,
//             },
//         )
//         $.steps.forEach(($) => {
//             context = context//FIXME
//         })
//         return context
//     }
//     function generateContextSelection(
//         $: ll.__context_selection_T,
//         $w: fp.ILine,
//         $r: {
//             context: TypeNameBuilder
//             markedValues: pt.Dictionary<ll.__markers_T>[]
//             states: pt.Dictionary<ll.__states_T>[]
//             nestedFunctions: pt.Dictionary<ll.__functions_type_expression_block_T>[]
//             externalFunctions: pt.Dictionary<ll.__functions_T> | null
//             namespaceName: string
//         },
//     ) {

//         $w.snippet(`(() => {`)
//         $w.indent({}, ($w) => {
//             generateContextStart(
//                 $["start"],
//                 $w,
//                 {
//                     context: $r.context,
//                     markedValues: $r.markedValues,
//                     states: $r.states,
//                     nestedFunctions: $r.nestedFunctions,
//                     externalFunctions: $r.externalFunctions,
//                     currentNamespaceName: $r.namespaceName,
//                 },
//             )
//             $.steps.forEach(($) => {
//                 $w.line({}, ($w) => {
//                     $w.snippet(`FIXME STEP ${$.property}`)
//                 })
//                 //console.error("SET CONTEXT")
//             })
//         })
//         $w.snippet(`})()`)
//     }
//     function getGuaranteedContextSelection(
//         $: ll.__guaranteed_context_selection_T,
//         $r: {
//             context: TypeNameBuilder
//             target: TypeNameBuilder
//             markedValues: pt.Dictionary<ll.__markers_T>[]
//             states: pt.Dictionary<ll.__states_T>[]
//             nestedFunctions: pt.Dictionary<ll.__functions_type_expression_block_T>[]
//             externalFunctions: pt.Dictionary<ll.__functions_T> | null
//             namespaceName: string
//         },
//     ): TypeNameBuilder {

//         let context = getContextStart(
//             $["start"],
//             {
//                 context: $r.context,
//                 markedValues: $r.markedValues,
//                 states: $r.states,
//                 nestedFunctions: $r.nestedFunctions,
//                 externalFunctions: $r.externalFunctions,
//                 currentNamespaceName: $r.namespaceName,
//             },
//         )
//         $.steps.forEach(($) => {
//             context = context//FIXME
//         })
//         return context
//     }
//     function generateGuaranteedContextSelection(
//         $: ll.__guaranteed_context_selection_T,
//         $w: fp.ILine,
//         $r: {
//             context: TypeNameBuilder
//             target: TypeNameBuilder
//             markedValues: pt.Dictionary<ll.__markers_T>[]
//             states: pt.Dictionary<ll.__states_T>[]
//             nestedFunctions: pt.Dictionary<ll.__functions_type_expression_block_T>[]
//             externalFunctions: pt.Dictionary<ll.__functions_T> | null
//             namespaceName: string
//         },
//     ) {

//         $w.snippet(`((): ${$r.target.getIdentifier()} => {`)
//         $w.indent({}, ($w) => {
//             generateMissingHandler(
//                 $["missing handler"],
//                 $w,
//                 {
//                     context: $r.context,
//                     target: $r.target,
//                     markedValues: $r.markedValues,
//                     states: $r.states,
//                     nestedFunctions: $r.nestedFunctions,
//                     externalFunctions: $r.externalFunctions,
//                     namespaceName: $r.namespaceName,
//                 },
//             )
//             generateContextStart(
//                 $["start"],
//                 $w,
//                 {
//                     context: $r.context,
//                     markedValues: $r.markedValues,
//                     states: $r.states,
//                     nestedFunctions: $r.nestedFunctions,
//                     externalFunctions: $r.externalFunctions,
//                     currentNamespaceName: $r.namespaceName,
//                 },
//             )
//             $.steps.forEach(($) => {
//                 generateMissingHandler(
//                     $["missing handler"],
//                     $w,
//                     {
//                         context: $r.context, //FIXME!!!!!!!!!!!!!!!
//                         target: $r.target,
//                         states: $r.states,
//                         markedValues: $r.markedValues,
//                         nestedFunctions: $r.nestedFunctions,
//                         externalFunctions: $r.externalFunctions,
//                         namespaceName: $r.namespaceName,
//                     },
//                 )
//                 $w.line({}, ($w) => {
//                     $w.snippet(`FIXME STEP ${$.property}`)
//                 })
//             })
//         })
//         $w.snippet(`})()`)
//     }
//     function generateStringExpression(
//         $: ll.__string_expression_T,
//         $w: fp.ILine,
//         $r: {
//             context: TypeNameBuilder
//             markedValues: pt.Dictionary<ll.__markers_T>[]
//             states: pt.Dictionary<ll.__states_T>[]
//             nestedFunctions: pt.Dictionary<ll.__functions_type_expression_block_T>[]
//             externalFunctions: pt.Dictionary<ll.__functions_T> | null
//             namespaceName: string
//         },
//     ) {
//         switch ($.strategy[0]) {
//             case "literal":
//                 pl.cc($.strategy[1], ($) => {
//                     $w.snippet(`${generateQuoted($.value)}`)
//                 })
//                 break
//             case "state":
//                 pl.cc($.strategy[1], ($) => {
//                     const $$ = $
//                     const $state = findInStack($r.states, $.state)
//                     if ($state.type[0] !== "string") {
//                         throw new Error(`unexpected state: not a string, ${$.state}`)
//                     }
//                     $w.snippet(`${generateIdentifier($$.state)}`)
//                 })
//                 break
//             case "select":
//                 pl.cc($.strategy[1], ($) => {
//                     generateContextSelection(
//                         $.context,
//                         $w,
//                         {
//                             context: $r.context,
//                             markedValues: $r.markedValues,
//                             states: $r.states,
//                             nestedFunctions: $r.nestedFunctions,
//                             externalFunctions: $r.externalFunctions,
//                             namespaceName: $r.namespaceName,
//                         },
//                     )
//                     $w.snippet(`FIXME COPY STRING`)

//                 })
//                 break
//             default:
//                 pl.au($.strategy[0])
//         }
//     }
//     function generateTypeExpression(
//         $: ll.__type_expression_T,
//         $w: fp.ILine,
//         $r: {
//             context: TypeNameBuilder
//             target: TypeNameBuilder
//             markedValues: pt.Dictionary<ll.__markers_T>[]
//             states: pt.Dictionary<ll.__states_T>[]
//             nestedFunctions: pt.Dictionary<ll.__functions_type_expression_block_T>[]
//             externalFunctions: pt.Dictionary<ll.__functions_T> | null
//             namespaceName: string
//         }
//     ) {
//         switch ($.strategy[0]) {
//             case "copy":
//                 pl.cc($.strategy[1], ($) => {
//                     const x = $
//                     generateGuaranteedContextSelection(
//                         x["context"],
//                         $w,
//                         {
//                             context: $r.context,
//                             target: $r.target,
//                             markedValues: $r.markedValues,
//                             states: $r.states,
//                             nestedFunctions: $r.nestedFunctions,
//                             externalFunctions: $r.externalFunctions,
//                             namespaceName: $r.namespaceName,
//                         },
//                     )
//                     $w.snippet(`FIXME COPY`)
//                 })
//                 break
//             case "literal":
//                 pl.cc($.strategy[1], ($) => {
//                     //console.error(`>LITERAL`)
//                     switch ($.type[0]) {
//                         case "boolean":
//                             pl.cc($.type[1], ($) => {
//                                 $w.snippet(`${booleanToString($.value)}`)
//                             })
//                             break
//                         case "dictionary":
//                             pl.cc($.type[1], ($) => {
//                                 $w.snippet(`{}`)
//                             })
//                             break
//                         case "group":
//                             pl.cc($.type[1], ($) => {
//                                 $w.snippet(`{`)
//                                 $w.indent({}, ($w) => {
//                                     $.properties.forEach(() => false, ($, key) => {
//                                         $w.line({}, ($w) => {
//                                             $w.snippet(`${generateQuoted(key)}: `)
//                                             generateTypeExpression(
//                                                 $.expression,
//                                                 $w,
//                                                 {
//                                                     context: $r.context,
//                                                     target: $r.target.group().property(key),
//                                                     markedValues: $r.markedValues,
//                                                     states: $r.states,
//                                                     nestedFunctions: $r.nestedFunctions,
//                                                     externalFunctions: $r.externalFunctions,
//                                                     namespaceName: $r.namespaceName,
//                                                 },
//                                             )
//                                             $w.snippet(`,`)
//                                         })
//                                     })
//                                 })
//                                 $w.snippet(`}`)
//                             })
//                             break
//                         case "list":
//                             pl.cc($.type[1], ($) => {
//                                 $w.snippet(`[]`)
//                             })
//                             break
//                         case "number":
//                             pl.cc($.type[1], ($) => {
//                                 $w.snippet(`${numberToString($.value)}`)
//                             })
//                             break
//                         case "string":
//                             pl.cc($.type[1], ($) => {
//                                 $w.snippet(`${generateQuoted($.value)}`)
//                             })
//                             break
//                         case "type argument":
//                             pl.cc($.type[1], ($) => {
//                                 $w.snippet(`FIXME`)
//                             })
//                             break
//                         case "type reference":
//                             pl.cc($.type[1], ($) => {
//                                 generateTypeExpression(
//                                     $.expression,
//                                     $w,
//                                     {
//                                         context: $r.context,
//                                         target: createUntypedNameBuilder($root, "XYZ1").type("xxx1"), //FIXME Have to have the type
//                                         markedValues: $r.markedValues,
//                                         states: $r.states,
//                                         nestedFunctions: $r.nestedFunctions,
//                                         externalFunctions: $r.externalFunctions,
//                                         namespaceName: $r.namespaceName,
//                                     },
//                                 )
//                             })
//                             break
//                         case "tagged union":
//                             pl.cc($.type[1], ($) => {
//                                 $w.snippet(`[${generateQuoted($.option)}, `)
//                                 generateTypeExpression(
//                                     $.data,
//                                     $w,
//                                     {
//                                         context: $r.context,
//                                         target: $r.target.taggedUnion().option($.option),
//                                         markedValues: $r.markedValues,
//                                         states: $r.states,
//                                         nestedFunctions: $r.nestedFunctions,
//                                         externalFunctions: $r.externalFunctions,
//                                         namespaceName: $r.namespaceName,
//                                     },
//                                 )
//                                 $w.snippet(`]`)
//                             })
//                             break
//                         default:
//                             pl.au($.type[0])
//                     }
//                 })
//                 break
//             case "map":
//                 pl.cc($.strategy[1], ($) => {
//                     generateGuaranteedContextSelection(
//                         $.context,
//                         $w,
//                         {
//                             context: $r.context,
//                             target: $r.target,
//                             markedValues: $r.markedValues,
//                             states: $r.states,
//                             nestedFunctions: $r.nestedFunctions,
//                             externalFunctions: $r.externalFunctions,
//                             namespaceName: $r.namespaceName,
//                         },
//                     )
//                     $w.snippet(`FIXMEMAP`)
//                     generateTypeExpression(
//                         $.entry,
//                         $w,
//                         {
//                             context: getGuaranteedContextSelection(
//                                 $.context,
//                                 {
//                                     context: $r.context,
//                                     target: $r.target,
//                                     markedValues: $r.markedValues,
//                                     states: $r.states,
//                                     nestedFunctions: $r.nestedFunctions,
//                                     externalFunctions: $r.externalFunctions,
//                                     namespaceName: $r.namespaceName,
//                                 },
//                             ),
//                             target: $r.target.dictionary(),
//                             markedValues: $r.markedValues,
//                             states: $r.states,
//                             nestedFunctions: $r.nestedFunctions,
//                             externalFunctions: $r.externalFunctions,
//                             namespaceName: $r.namespaceName,
//                         },
//                     )
//                 })
//                 break
//             case "switch":
//                 pl.cc($.strategy[1], ($) => {
//                     const $context = $.context
//                     generateGuaranteedContextSelection(
//                         $.context,
//                         $w,
//                         {
//                             context: $r.context,
//                             target: $r.target,
//                             markedValues: $r.markedValues,
//                             states: $r.states,
//                             nestedFunctions: $r.nestedFunctions,
//                             externalFunctions: $r.externalFunctions,
//                             namespaceName: $r.namespaceName,
//                         },
//                     )
//                     $w.snippet(`switch ($c[0]) {`)
//                     $w.indent({}, ($w) => {
//                         $.options.forEach(() => false, ($, key) => {
//                             $w.line({}, ($w) => {
//                                 $w.snippet(`case ${generateQuoted(key)}: {`)
//                                 $w.indent({}, ($w) => {
//                                     $w.line({}, ($w) => {
//                                         $w.snippet(`return pl.cc($c[1], ($c) => {`)
//                                         $w.indent({}, ($w) => {
//                                             $w.line({}, ($w) => {
//                                                 $w.snippet(`return `)
//                                                 generateTypeExpression(
//                                                     $.expression,
//                                                     $w,
//                                                     {
//                                                         context: getGuaranteedContextSelection(
//                                                             $context,
//                                                             {
//                                                                 context: $r.context,
//                                                                 target: $r.target,
//                                                                 markedValues: $r.markedValues,
//                                                                 states: $r.states,
//                                                                 nestedFunctions: $r.nestedFunctions,
//                                                                 externalFunctions: $r.externalFunctions,
//                                                                 namespaceName: $r.namespaceName,
//                                                             },
//                                                         ).taggedUnion().option(key),
//                                                         target: $r.target,
//                                                         markedValues: $r.markedValues,
//                                                         states: $r.states,
//                                                         nestedFunctions: $r.nestedFunctions,
//                                                         externalFunctions: $r.externalFunctions,
//                                                         namespaceName: $r.namespaceName,
//                                                     },
//                                                 )
//                                             })
//                                         })
//                                         $w.snippet(`})`)
//                                     })
//                                 })
//                                 $w.snippet(`}`)
//                             })
//                         })
//                         $w.line({}, ($w) => {
//                             $w.snippet(`default: return pl.au($c[0])`)
//                         })
//                     })
//                     $w.snippet(`}`)
//                 })
//                 break
//             case "dictionary from state":
//                 pl.cc($.strategy[1], ($) => {
//                     $w.snippet(`createDictionary(${generateIdentifier($.state)})`)
//                 })
//                 break
//             default:
//                 pl.au($.strategy[0])
//         }
//     }
//     function getTypeReference(
//         $: ll.__type_reference_T,
//         currentNamespaceName: string,
//     ): TypeNameBuilder {
//         function getNamespace(
//             $: ll.__namespace_selection_T,
//             currentNamespaceName: string,
//         ): string {
//             switch ($.which[0]) {
//                 case "current":
//                     return pl.cc($.which[1], ($) => {
//                         return currentNamespaceName
//                     })
//                 case "other":
//                     return pl.cc($.which[1], ($) => {
//                         return $["namespace reference"].namespace
//                     })
//                 default:
//                     return pl.au($.which[0])
//             }
//         }
//         return createUntypedNameBuilder($root, getNamespace($["namespace selection"], currentNamespaceName)).type($.type)
//     }
//     function generateTypeExpressionBlock(
//         $: ll.__type_expression_block_T,
//         $w: fp.ILine,
//         $r: {
//             context: TypeNameBuilder
//             target: TypeNameBuilder
//             currentNamespaceName: string
//             markedValues: pt.Dictionary<ll.__markers_T>[]
//             states: pt.Dictionary<ll.__states_T>[]
//             nestedFunctions: pt.Dictionary<ll.__functions_type_expression_block_T>[]
//             externalFunctions: pt.Dictionary<ll.__functions_T> | null
//         },
//     ) {
//         $w.snippet(`{`)
//         $w.indent({}, ($w) => {
//             const $teb = $
//             $["functions"].forEach(() => false, ($, key) => {
//                 $w.line({}, () => { })
//                 $w.line({}, ($w) => {
//                     $w.snippet(`function ${generateIdentifier(key)}_fi`)
//                     // generateFunctionDeclaration(
//                     //     $.declaration,
//                     //     $w,
//                     //     $["namespace reference"].namespace,
//                     //     ($w) => {
//                     //         doDictionary(
//                     //             //should be parameters
//                     //             $.namespace["type arguments"],
//                     //             () => {
//                     //                 //
//                     //             },
//                     //             () => {
//                     //                 $w.snippet(`<`)
//                     //             },
//                     //             () => {
//                     //                 $w.snippet(`>`)
//                     //             },
//                     //             ($, key) => {
//                     //                 $w.snippet(`${generateIdentifier(key)}`)
//                     //             },
//                     //             () => {
//                     //                 $w.snippet(`, `)
//                     //             },
//                     //         )

//                     //     }
//                     // )
//                     $w.snippet(` `)
//                     generateTypeExpressionBlock(
//                         $.block,
//                         $w,
//                         {
//                             context: getTypeReference(
//                                 $.declaration.in,
//                                 $r.currentNamespaceName,
//                             ),
//                             target: getTypeReference(
//                                 $.declaration.out,
//                                 $r.currentNamespaceName,
//                             ),
//                             currentNamespaceName: $r.currentNamespaceName,
//                             markedValues: $r.markedValues,
//                             states: $r.states,
//                             nestedFunctions: $r.nestedFunctions.concat([$teb.functions]),
//                             externalFunctions: $r.externalFunctions,
//                         },
//                     )
//                 })
//             })
//             $w.line({}, ($w) => {
//                 $w.snippet(`return `)
//                 generateTypeExpression(
//                     $.expression,
//                     $w,
//                     {
//                         context: $r.context,
//                         target: $r.target,
//                         markedValues: $r.markedValues,
//                         states: $r.states,
//                         nestedFunctions: $r.nestedFunctions.concat([$.functions]),
//                         externalFunctions: $r.externalFunctions,
//                         namespaceName: $r.currentNamespaceName,
//                     },
//                 )
//             })
//         })
//         $w.snippet(`}`)
//     }
//     $w.line({}, ($w) => { })
//     $w.line({}, ($w) => {
//         $w.snippet(`interface pa.Dictionary<T> {`)
//         // $w.indent({}, ($w) => {
//         //     $w.line({}, ($w) => {
//         //     })
//         // })
//         $w.indent({}, ($w) => {
//             $w.line({}, ($w) => {
//                 $w.snippet(`forEach(callback: (e: T, key: string) => void): void`)
//             })
//         })
//         $w.snippet(`}`)
//     })
//     $w.line({}, ($w) => { })
//     $w.line({}, ($w) => {
//         $w.snippet(`function assertUnreachable<RT>(_x: never): RT {`)
//         $w.indent({}, ($w) => {
//             $w.line({}, ($w) => {
//                 $w.snippet(`throw new Error("unreachable")`)
//             })
//         })
//         $w.snippet(`}`)
//     })
//     $w.line({}, ($w) => { })
//     $w.line({}, ($w) => {
//         $w.snippet(`function cc<T, RT>(input: T, callback: (output: T) => RT): RT {`)
//         $w.indent({}, ($w) => {
//             $w.line({}, ($w) => {
//                 $w.snippet(`return callback(input)`)
//             })
//         })
//         $w.snippet(`}`)
//     })
//     $w.line({}, ($w) => { })
//     $w.line({}, ($w) => {
//         $w.snippet(`function createDictionary<T>(raw: { [key: string]: T }): pa.Dictionary<T> {`)
//         $w.indent({}, ($w) => {
//             $w.line({}, ($w) => {
//                 $w.snippet(`return {`)
//                 $w.indent({}, ($w) => {
//                     $w.line({}, ($w) => {
//                         $w.snippet(`forEach: (callback: (e: T, key: string) => void) => { Object.keys(raw).sort().forEach((key) => { callback(raw[key], key) }) },`)
//                     })
//                 })
//                 $w.snippet(`}`)
//             })
//         })
//         $w.snippet(`}`)
//     })
//     $w.line({}, ($w) => { })
//     $w.line({}, ($w) => {
//         $w.snippet(`function mapDictionary<T, RT>(source: pa.Dictionary<T>, convert: (v: T) => RT): pa.Dictionary<RT> {`)
//         $w.indent({}, ($w) => {
//             $w.line({}, ($w) => {
//                 $w.snippet(`return {`)
//                 $w.indent({}, ($w) => {
//                     $w.line({}, ($w) => {
//                         $w.snippet(`forEach: (callback: (e: RT, key: string) => void) => { source.forEach((e, key) => { callback(convert(e), key) }) },`)
//                     })
//                 })
//                 $w.snippet(`}`)
//             })
//         })
//         $w.snippet(`}`)
//     })
//     $.namespaces.forEach(() => false, (xx, key) => {
//         const ns = xx
//         const namespaceName = key
//         //console.error(`NAMESPACE: ${namespaceName}`)
//         function generateTypeParameters(
//             $w: fp.ILine
//         ) {
//             doDictionary(
//                 ns["type parameters"],
//                 () => {
//                     //
//                 },
//                 () => {
//                     $w.snippet(`<`)
//                 },
//                 () => {
//                     $w.snippet(`>`)
//                 },
//                 ($, key) => {
//                     $w.snippet(`${generateIdentifier(key)}`)
//                 },
//                 () => {
//                     $w.snippet(`, `)
//                 },
//             )
//         }

//         ns.types.forEach(() => false, ($, key) => {
//             function generateTypeUsage(
//                 $: ll.__type_T,
//                 x: TypeNameBuilder,
//                 $w: fp.ILine,
//             ) {
//                 switch ($.occurence[0]) {
//                     case "required": {
//                         break
//                     }
//                     case "optional": {
//                         $w.snippet(`undefined | `)
//                         break
//                     }
//                     default:
//                         pl.au($.occurence[0])
//                 }
//                 switch ($.type[0]) {
//                     case "boolean": {
//                         $w.snippet(`boolean`)
//                         break
//                     }
//                     case "dictionary": {
//                         $w.snippet(`${x.getIdentifier()}`)
//                         generateTypeParameters($w)
//                         break
//                     }
//                     case "group": {
//                         $w.snippet(`${x.getIdentifier()}`)
//                         generateTypeParameters($w)
//                         break
//                     }
//                     case "list": {
//                         $w.snippet(`${x.getIdentifier()}`)
//                         generateTypeParameters($w)
//                         break
//                     }
//                     case "number": {
//                         $w.snippet(`number`)
//                         break
//                     }
//                     case "string": {
//                         $w.snippet(`string`)
//                         break
//                     }
//                     case "tagged union": {
//                         $w.snippet(`${x.getIdentifier()}`)
//                         generateTypeParameters($w)
//                         break
//                     }
//                     case "type argument":
//                         pl.cc($.type[1], ($) => {
//                             $w.snippet(`${$.argument}`)
//                         })
//                         break
//                     case "type reference": {
//                         pl.cc($.type[1], ($) => {
//                             generateTypeReference(
//                                 $.type,
//                                 $w,
//                                 namespaceName,
//                                 ($w) => {
//                                     doDictionary(
//                                         ns["type parameters"],
//                                         () => {
//                                             //
//                                         },
//                                         () => {
//                                             $w.snippet(`<`)
//                                         },
//                                         () => {
//                                             $w.snippet(`>`)
//                                         },
//                                         ($, key) => {
//                                             $w.snippet(`${generateIdentifier(key)}`)
//                                         },
//                                         () => {
//                                             $w.snippet(`, `)
//                                         },
//                                     )
//                                 }
//                             )
//                         })
//                         break
//                     }
//                     default:
//                         pl.au($.type[0])
//                 }
//             }
//             function generateCodeForTypeTree(
//                 $$: ll.__type_T,
//                 x: TypeNameBuilder,
//             ) {
//                 //navigate all types
//                 switch ($$.type[0]) {
//                     case "boolean": {
//                         break
//                     }
//                     case "dictionary": {
//                         const $ = $$.type[1]
//                         //generate code for this type
//                         generateCodeForTypeTree(
//                             $.entry,
//                             x.dictionary(),
//                         )
//                         $w.line({}, () => { })
//                         $w.line({}, ($w) => {
//                             $w.snippet(`type ${x.getIdentifier()}`)
//                             generateTypeParameters($w)
//                             $w.snippet(` = pa.Dictionary<`)
//                             generateTypeUsage(
//                                 $.entry,
//                                 x.dictionary(),
//                                 $w,
//                             )
//                             $w.snippet(`>`)
//                         })
//                         break
//                     }
//                     case "group": {
//                         const $ = $$.type[1]
//                         $.properties.forEach(() => false, ($$, key) => {
//                             generateCodeForTypeTree(
//                                 $$.type,
//                                 x.group().property(key),
//                             )
//                         })
//                         //generate code for this type
//                         $w.line({}, () => { })
//                         $w.line({}, ($w) => {
//                             $w.snippet(`type ${x.getIdentifier()}`)
//                             generateTypeParameters($w)
//                             $w.snippet(` = {`)
//                             $w.indent({}, ($w) => {
//                                 $.properties.forEach(() => false, ($$) => {
//                                     $w.line({}, ($w) => {
//                                         $w.snippet(`readonly ${generateQuoted(key)}`)
//                                         $w.snippet(`: `)
//                                         generateTypeUsage(
//                                             $$.type,
//                                             x.group().property(key),
//                                             $w,
//                                         )
//                                     })
//                                 })
//                             })
//                             $w.snippet(`}`)
//                         })
//                         break
//                     }
//                     case "list": {
//                         const $ = $$.type[1]
//                         generateCodeForTypeTree(
//                             $.element,
//                             x.list(),
//                         )
//                         //generate code for this type
//                         $w.line({}, () => { })
//                         $w.line({}, ($w) => {
//                             $w.snippet(`type ${x.getIdentifier()}`)
//                             generateTypeParameters($w)
//                             $w.snippet(` = `)
//                             generateTypeUsage(
//                                 $.element,
//                                 x.list(),
//                                 $w,
//                             )
//                             $w.snippet(`[]`)
//                         })
//                         break
//                     }
//                     case "number": {
//                         break
//                     }
//                     case "string": {
//                         break
//                     }
//                     case "tagged union": {
//                         const $ = $$.type[1]
//                         const tu = x.taggedUnion()
//                         $.options.forEach(() => false, ($$, key) => {
//                             generateCodeForTypeTree(
//                                 $$.type,
//                                 tu.option(key)
//                             )
//                         })
//                         $w.line({}, () => { })
//                         $w.line({}, ($w) => {
//                             $w.snippet(`type ${x.getIdentifier()}`)
//                             generateTypeParameters($w)
//                             $w.snippet(` = `)
//                             $w.indent({}, ($w) => {
//                                 $.options.forEach(() => false, ($, key) => {
//                                     $w.line({}, ($w) => {
//                                         $w.snippet(`| [${generateQuoted(key)}, `)
//                                         generateTypeUsage(
//                                             $.type,
//                                             tu.option(key),
//                                             $w,
//                                         )
//                                         $w.snippet(`]`)
//                                     })
//                                 })
//                             })
//                         })
//                         break
//                     }
//                     case "type argument":
//                         break
//                     case "type reference": {
//                         break
//                     }
//                     default:
//                         pl.au($$.type[0])
//                 }
//             }
//             generateCodeForTypeTree(
//                 $.type,
//                 createNameBuilder($root, namespaceName).type(key),
//             )
//             //generate code for this type
//             $w.line({}, () => { })
//             $w.line({}, ($w) => {
//                 $w.snippet(`type ${generateIdentifier(namespaceName)}_${generateIdentifier(key)}_T`)
//                 generateTypeParameters($w)
//                 $w.snippet(` = `)
//                 generateTypeUsage(
//                     $.type,
//                     createNameBuilder($root, namespaceName).type(key),
//                     $w,
//                 )
//             })
//         })
//         ns.interfaces.forEach(() => false, ($, key) => {
//             $w.line({}, () => { })
//             $w.line({}, ($w) => {
//                 $w.snippet(`export type ${generateIdentifier(namespaceName)}_${generateIdentifier(key)}_I`)
//                 generateTypeParameters($w)
//                 $w.snippet(` = `)
//                 generateInterfaceDefinition(
//                     $["definition"],
//                     $w,
//                     namespaceName,
//                     ($w) => {
//                         doDictionary(
//                             ns["type parameters"],
//                             () => {
//                                 //
//                             },
//                             () => {
//                                 $w.snippet(`<`)
//                             },
//                             () => {
//                                 $w.snippet(`>`)
//                             },
//                             ($, key) => {
//                                 $w.snippet(`${generateIdentifier(key)}`)
//                             },
//                             () => {
//                                 $w.snippet(`, `)
//                             },
//                         )
//                     }
//                 )
//             })
//         })
//         ns["interface builders"].forEach(() => false, ($, key) => {
//             $w.line({}, () => { })
//             $w.line({}, ($w) => {
//                 $w.snippet(`export interface ${generateIdentifier(namespaceName)}_${generateIdentifier(key)}_IB`)
//                 generateTypeParameters($w)
//                 $w.snippet(` `)
//                 $w.snippet(`{`)
//                 $w.indent({}, ($w) => {
//                     $.methods.forEach(() => false, ($, key) => {
//                         function generateBuilderProcedureDeclaration(
//                             $: ll.__builder_procedure_declaration_T,
//                             $w: fp.ILine,
//                             arrowOrColon: string,
//                             namespaceName: string,
//                             typeArgumentsCallback: ($w: fp.ILine) => void,
//                         ) {
//                             $w.snippet(`(`)
//                             $w.indent({}, ($w) => {
//                                 $w.line({}, ($w) => {
//                                     $w.snippet(`$i: `)
//                                     $w.snippet(`{`)
//                                     $w.indent({}, ($w) => {
//                                         $.interfaces.forEach(() => false, ($, key) => {
//                                             $w.line({}, ($w) => {
//                                                 $w.snippet(`${generateQuoted(key)}: `)
//                                                 generateInterfaceDefinition(
//                                                     $.interface,
//                                                     $w,
//                                                     namespaceName,
//                                                     typeArgumentsCallback,
//                                                 )
//                                             })
//                                         })
//                                     })
//                                     $w.snippet(`},`)
//                                 })
//                             })
//                             $w.snippet(`)${arrowOrColon} `)
//                             switch ($["return type"][0]) {
//                                 case "interface":
//                                     pl.cc($["return type"][1], ($) => {
//                                         generateInterfaceDefinition(
//                                             $.interface,
//                                             $w,
//                                             namespaceName,
//                                             typeArgumentsCallback,
//                                         )
//                                     })
//                                     break
//                                 case "void":
//                                     pl.cc($["return type"][1], ($) => {
//                                         $w.snippet(`void`)
//                                     })
//                                     break
//                                 default:
//                                     pl.au($["return type"][0])
//                             }
//                         }
//                         $w.line({}, ($w) => {
//                             $w.snippet(`${generateQuoted(key)}`)
//                             generateBuilderProcedureDeclaration(
//                                 $.declaration,
//                                 $w,
//                                 `:`,
//                                 namespaceName,
//                                 ($w) => {
//                                     doDictionary(
//                                         ns["type parameters"],
//                                         () => {
//                                             //
//                                         },
//                                         () => {
//                                             $w.snippet(`<`)
//                                         },
//                                         () => {
//                                             $w.snippet(`>`)
//                                         },
//                                         ($, key) => {
//                                             $w.snippet(`${generateIdentifier(key)}`)
//                                         },
//                                         () => {
//                                             $w.snippet(`, `)
//                                         },
//                                     )
//                                 }
//                             )
//                         })
//                     })
//                 })
//                 $w.snippet(`}`)
//             })
//         })
//         ns["function declarations"].forEach(() => false, ($, key) => {
//             $w.line({}, () => { })
//             $w.line({}, ($w) => {
//                 $w.snippet(`export type ${generateIdentifier(namespaceName)}_${generateIdentifier(key)}_PD`)
//                 generateTypeParameters($w)
//                 $w.snippet(` = `)
//                 generateFunctionDeclaration(
//                     $.declaration,
//                     $w,
//                     ` =>`,
//                     namespaceName,
//                     ($w) => {
//                         doDictionary(
//                             ns["type parameters"],
//                             () => {
//                                 //
//                             },
//                             () => {
//                                 $w.snippet(`<`)
//                             },
//                             () => {
//                                 $w.snippet(`>`)
//                             },
//                             ($, key) => {
//                                 $w.snippet(`${generateIdentifier(key)}`)
//                             },
//                             () => {
//                                 $w.snippet(`, `)
//                             },
//                         )
//                     }
//                 )
//             })
//         })
//         ns["procedure declarations"].forEach(() => false, ($, key) => {
//             $w.line({}, () => { })
//             $w.line({}, ($w) => {
//                 $w.snippet(`export type ${generateIdentifier(namespaceName)}_${generateIdentifier(key)}_PD`)
//                 generateTypeParameters($w)
//                 $w.snippet(` = `)
//                 generateProcedureDeclaration(
//                     $,
//                     $w,
//                     ` =>`,
//                     namespaceName,
//                     ($w) => {
//                         doDictionary(
//                             ns["type parameters"],
//                             () => {
//                                 //
//                             },
//                             () => {
//                                 $w.snippet(`<`)
//                             },
//                             () => {
//                                 $w.snippet(`>`)
//                             },
//                             ($, key) => {
//                                 $w.snippet(`${generateIdentifier(key)}`)
//                             },
//                             () => {
//                                 $w.snippet(`, `)
//                             },
//                         )
//                     }
//                 )
//             })
//         })
//     })
//     $["function implementations"].forEach(() => false, ($, key) => {
//         //console.error(`FUNCTION IMP: ${key}`)
//         const ns2 = $["namespace reference"]
//         $w.line({}, () => { })
//         $w.line({}, ($w) => {
//             const decl = find(find($root.namespaces, ns2.namespace)["function declarations"], $.declaration)
//             $w.snippet(`export function ${generateIdentifier(key)}_fi`)
//             doDictionary(
//                 $["type parameters"],
//                 () => {
//                     //
//                 },
//                 () => {
//                     $w.snippet(`<`)
//                 },
//                 () => {
//                     $w.snippet(`>`)
//                 },
//                 ($, key) => {
//                     $w.snippet(`${generateIdentifier(key)}`)
//                 },
//                 () => {
//                     $w.snippet(`, `)
//                 },
//             )
//             generateFunctionDeclaration(
//                 decl.declaration,
//                 $w,
//                 `:`,
//                 $["namespace reference"].namespace,
//                 ($w) => {
//                     doDictionary(
//                         //should be parameters
//                         $["namespace reference"]["type arguments"],
//                         () => {
//                             //
//                         },
//                         () => {
//                             $w.snippet(`<`)
//                         },
//                         () => {
//                             $w.snippet(`>`)
//                         },
//                         ($, key) => {
//                             $w.snippet(`${generateIdentifier(key)}`)
//                         },
//                         () => {
//                             $w.snippet(`, `)
//                         },
//                     )

//                 }
//             )
//             $w.snippet(` `)
//             generateTypeExpressionBlock(
//                 $.block,
//                 $w,
//                 {
//                     context: getTypeReference(decl.declaration.in, ns2.namespace),
//                     target: getTypeReference(decl.declaration.in, ns2.namespace),
//                     currentNamespaceName: ns2.namespace,
//                     markedValues: [],
//                     states: [],
//                     nestedFunctions: [],
//                     externalFunctions: null,
//                 },
//             )
//         })
//     })
//     $["procedure implementations"].forEach(() => false, ($, key) => {
//         //console.error(`PROCEDURE IMP: ${key}`)
//         const $pi = $
//         const decl = find(find($root.namespaces, $pi["namespace reference"].namespace)["procedure declarations"], $.declaration)

//         function generateprocedureBlock(
//             $: ll.__procedure_block_T,
//             $w: fp.ILine,
//             $r: {
//                 context: TypeNameBuilder
//                 interfaces: pt.Dictionary<ll.__interfaces_procedure_declarations_T>
//                 parameters: pt.Dictionary<ll.__parameters_T>[]
//                 markedValues: pt.Dictionary<ll.__markers_T>[]
//                 states: pt.Dictionary<ll.__states_T>[]
//             }
//         ) {
//             const pb$r = $r
//             const allStates = $r.states.concat([$.states])
//             const allMarkers = $r.markedValues.concat([$.markers])
//             function generateInternalProcedureSpecification(
//                 $: ll.__internal_procedure_specification_T,
//                 $w: fp.ILine,
//                 arrowOrNothing: string,
//                 $r: {
//                 }
//             ) {
//                 $w.snippet(`($ip: `)
//                 $w.snippet(`{`)
//                 $w.indent({}, ($w) => {
//                     $.parameters.forEach(() => false, ($, key) => {
//                         $w.line({}, ($w) => {
//                             $w.snippet(`${generateQuoted(key)}: `)
//                             switch ($.type[0]) {
//                                 case "group":
//                                     pl.cc($.type[1], ($) => {
//                                         $w.snippet(`{`)
//                                         $w.indent({}, ($w) => {
//                                             $.members.forEach(() => false, ($, key) => {
//                                                 $w.line({}, ($w) => {
//                                                     $w.snippet(`${generateQuoted(key)}: `)
//                                                     generateInterfaceDefinition(
//                                                         $.definition,
//                                                         $w,
//                                                         $pi["namespace reference"].namespace,
//                                                         () => { },
//                                                     )
//                                                 })
//                                             })
//                                         })
//                                         $w.snippet(`}`)
//                                     })
//                                     break
//                                 case "method":
//                                     pl.cc($.type[1], ($) => {
//                                         $w.snippet(`($: ${getNestedType($.type).getIdentifier()}`)

//                                         $w.snippet(`) => `)
//                                         switch ($["return type"][0]) {
//                                             case "interface":
//                                                 pl.cc($["return type"][1], ($) => {
//                                                     generateInterfaceDefinition(
//                                                         $.interface,
//                                                         $w,
//                                                         $pi["namespace reference"].namespace,
//                                                         () => { },
//                                                     )
//                                                 })
//                                                 break
//                                             case "void":
//                                                 pl.cc($["return type"][1], () => {
//                                                     $w.snippet(`void`)
//                                                 })
//                                                 break
//                                             default:
//                                                 pl.au($["return type"][0])
//                                         }
//                                     })
//                                     break
//                                 case "reference":
//                                     pl.cc($.type[1], ($) => {
//                                         generateNamespacedIdentifier(
//                                             $["namespace selection"],
//                                             $w,
//                                             ($w) => {
//                                                 $w.snippet(`_${$.interface}_I`)
//                                             },
//                                             $pi["namespace reference"].namespace,
//                                             () => { },
//                                         )
//                                     })
//                                     break
//                                 default:
//                                     pl.au($.type[0])
//                             }
//                         })
//                     })
//                 })
//                 $w.snippet(`}`)
//                 $w.snippet(`): `)
//                 switch ($["return type"][0]) {
//                     case "interface":
//                         pl.cc($["return type"][1], ($) => {
//                             generateInterfaceDefinition(
//                                 $.interface,
//                                 $w,
//                                 $pi["namespace reference"].namespace,
//                                 ($w) => {

//                                 },
//                             )
//                         })
//                         break
//                     case "void":
//                         pl.cc($["return type"][1], ($) => {
//                             $w.snippet(`void`)
//                         })
//                         break
//                     default:
//                         pl.au($["return type"][0])
//                 }
//                 $w.snippet(`${arrowOrNothing} `)
//                 generateprocedureBlock(
//                     $.block,
//                     $w,
//                     {
//                         context: pb$r.context,
//                         interfaces: pb$r.interfaces,
//                         parameters: pb$r.parameters.concat([$.parameters]),
//                         markedValues: allMarkers,
//                         states: allStates,
//                     },
//                 )
//             }
//             function generateInterfaceExpression(
//                 $: ll.__interface_expression_T,
//                 $w: fp.ILine,
//                 $r: {
//                 },
//             ) {
//                 function generateProcedureCall(
//                     $: ll.__procedure_call_T,
//                     $w: fp.ILine,
//                     $r: {
//                     },
//                 ) {
//                     $w.snippet(`(`)
//                     $w.snippet(`{`)
//                     $w.indent({}, ($w) => {
//                         $["interface arguments"].forEach(() => false, ($, key) => {
//                             $w.line({}, ($w) => {
//                                 $w.snippet(`${generateQuoted(key)}: `)

//                                 generateInterfaceExpression(
//                                     $.expression,
//                                     $w,
//                                     {},
//                                 )
//                                 $w.snippet(`,`)
//                             })
//                         })
//                     })
//                     $w.snippet(`}`)

//                     $w.snippet(`)`)
//                 }
//                 switch ($.type[0]) {
//                     case "argument":
//                         pl.cc($.type[1], ($) => {
//                             $w.snippet(`$i[${generateQuoted($.argument)}]`)
//                         })
//                         break
//                     case "initialize":
//                         pl.cc($.type[1], ($) => {
//                             switch ($.type[0]) {
//                                 case "method": {
//                                     pl.cc($.type[1], ($) => {
//                                         switch ($.strategy[0]) {
//                                             case "argument": {
//                                                 pl.cc($.strategy[1], ($) => {
//                                                     $w.snippet(`$ip[${generateQuoted($.argument)}]`)
//                                                 })
//                                                 break
//                                             }
//                                             case "procedure implementation": {
//                                                 pl.cc($.strategy[1], ($) => {
//                                                     $w.snippet(`($c) => `)
//                                                     generateprocedureBlock(
//                                                         $.block,
//                                                         $w,
//                                                         {
//                                                             context: pb$r.context,
//                                                             interfaces: decl.interfaces,
//                                                             parameters: pb$r.parameters,
//                                                             markedValues: allMarkers,
//                                                             states: allStates,
//                                                         }
//                                                     )
//                                                 })
//                                                 break
//                                             }
//                                             case "inline procedure": {
//                                                 //console.error("Inline procedure")
//                                                 pl.cc($.strategy[1], ($) => {
//                                                     $w.snippet(`(`)
//                                                     generateInternalProcedureSpecification(
//                                                         $.specification,
//                                                         $w,
//                                                         ` =>`,
//                                                         {
//                                                         },
//                                                     )
//                                                     $w.snippet(`)`)
//                                                     generateProcedureCall(
//                                                         $.call,
//                                                         $w,
//                                                         {},
//                                                     )
//                                                 })
//                                                 break
//                                             }
//                                             default:
//                                                 pl.au($.strategy[0])
//                                         }
//                                     })
//                                     break
//                                 }
//                                 case "group": {
//                                     pl.cc($.type[1], ($) => {
//                                         switch ($.strategy[0]) {
//                                             case "inline":
//                                                 pl.cc($.strategy[1], ($) => {
//                                                     $w.snippet(`{`)
//                                                     $w.indent({}, ($w) => {
//                                                         $.members.forEach(() => false, ($, key) => {
//                                                             $w.line({}, ($w) => {
//                                                                 $w.snippet(`${generateQuoted(key)}: `)
//                                                                 generateInterfaceExpression(
//                                                                     $.expression,
//                                                                     $w,
//                                                                     {},
//                                                                 )
//                                                                 $w.snippet(`,`)
//                                                             })
//                                                         })
//                                                     })
//                                                     $w.snippet(`}`)
//                                                 })
//                                                 break
//                                             default:
//                                                 pl.au($.strategy[0])
//                                         }
//                                     })
//                                     break
//                                 }
//                                 case "reference": {
//                                     pl.cc($.type[1], ($) => {
//                                         switch ($.strategy[0]) {
//                                             case "procedure call6":
//                                                 pl.cc($.strategy[1], ($) => {
//                                                     function generateNamedprocedureCall(
//                                                         $: ll.__named_procedure_call_T,
//                                                         $w: fp.ILine,
//                                                     ) {
//                                                         switch ($.type[0]) {
//                                                             case "external":
//                                                                 pl.cc($.type[1], ($) => {
//                                                                     $w.snippet(`$b.${$.builder}.${$.method}`)
//                                                                 })
//                                                                 break
//                                                             case "local":
//                                                                 pl.cc($.type[1], ($) => {
//                                                                     $w.snippet(`${$.procedure}_NIC`)
//                                                                 })
//                                                                 break
//                                                             // case "from marked":
//                                                             //     pl.cc($.type[1], ($) => {
//                                                             //         $w.snippet(`${$.marker}_m${$.path}`)
//                                                             //     })
//                                                             //     break
//                                                             default:
//                                                                 pl.au($.type[0])
//                                                         }
//                                                         generateProcedureCall(
//                                                             $["procedure call"],
//                                                             $w,
//                                                             {},
//                                                         )
//                                                     }
//                                                     generateNamedprocedureCall(
//                                                         $["procedure call"],
//                                                         $w,
//                                                     )
//                                                 })
//                                                 break
//                                             default:
//                                                 pl.au($.strategy[0])
//                                         }
//                                     })
//                                     break
//                                 }
//                                 case "dictionary":
//                                     pl.cc($.type[1], ($) => {
//                                         $w.snippet(`{`)
//                                         $w.indent({}, ($w) => {
//                                             $.entries.forEach(() => false, ($, key) => {
//                                                 $w.line({}, ($w) => {
//                                                     $w.snippet(`${generateQuoted(key)}: `)
//                                                     generateInterfaceExpression(
//                                                         $.expression,
//                                                         $w,
//                                                         {},
//                                                     )
//                                                     $w.snippet(`,`)
//                                                 })
//                                             })
//                                         })
//                                         $w.snippet(`}`)
//                                     })
//                                     break
//                                 default:
//                                     pl.au($.type[0])
//                             }
//                         })
//                         break
//                     default:
//                         pl.au($.type[0])
//                 }
//             }
//             $w.snippet(`{`)
//             $w.indent({}, ($w) => {
//                 const $block = $
//                 $.markers.forEach(() => false, ($, key) => {
//                     $w.line({}, ($w) => {
//                         $w.snippet(`const ${generateIdentifier(key)}_m = `)
//                         generateContextSelection(
//                             $.selection,
//                             $w,
//                             {
//                                 context: $r.context,
//                                 markedValues: $r.markedValues.concat([$block.markers]),
//                                 states: $r.states.concat([$block.states]),
//                                 nestedFunctions: [],
//                                 externalFunctions: decl.functions,
//                                 namespaceName: $pi["namespace reference"].namespace,
//                             },
//                         )
//                     })
//                 })
//                 $.states.forEach(() => false, ($, key) => {
//                     $w.line({}, ($w) => {
//                         switch ($.type[0]) {
//                             case "dictionary":
//                                 pl.cc($.type[1], ($) => {
//                                     $w.snippet(`const ${generateIdentifier(key)}_s: { [key: string]: `)
//                                     $w.snippet(`${getNestedType($.type).dictionary().getIdentifier()}`)
//                                     $w.snippet(` } = {}`)
//                                 })
//                                 break
//                             case "list":
//                                 pl.cc($.type[1], ($) => {
//                                     $w.snippet(`const ${generateIdentifier(key)}_s: `)
//                                     $w.snippet(`${getNestedType($.type).list().getIdentifier()}`)
//                                     $w.snippet(`[] = []`)
//                                 })
//                                 break
//                             case "string":
//                                 pl.cc($.type[1], ($) => {
//                                     $w.snippet(`let ${generateIdentifier(key)}_s = ${generateQuoted($["initial value"])}`)
//                                 })
//                                 break
//                             case "type5":
//                                 pl.cc($.type[1], ($) => {
//                                     $w.snippet(`let ${generateIdentifier(key)}_s: `)
//                                     $w.snippet(`${getNestedType($["nested type"]).getIdentifier()}`)
//                                     doDictionary(
//                                         $["nested type"]["namespace reference"]["type arguments"],
//                                         () => {
//                                         },
//                                         () => {
//                                             $w.snippet(`<`)
//                                         },
//                                         () => {
//                                             $w.snippet(`>`)
//                                         },
//                                         ($, key) => {
//                                             $w.snippet(`${generateIdentifier(key)}`)
//                                         },
//                                         () => {
//                                             $w.snippet(`, `)
//                                         },
//                                     )
//                                     $w.snippet(` = `)
//                                     generateTypeExpression(
//                                         $.expression,
//                                         $w,
//                                         {
//                                             context: $r.context,
//                                             target: getNestedType($["nested type"]),
//                                             markedValues: $r.markedValues.concat([$block.markers]),
//                                             states: $r.states.concat([$block.states]),
//                                             nestedFunctions: [],
//                                             externalFunctions: decl.functions,
//                                             namespaceName: $pi["namespace reference"].namespace,
//                                         },
//                                     )
//                                 })
//                                 break
//                             default:
//                                 pl.au($.type[0])
//                         }
//                     })
//                 })
//                 $["nested procedures"].forEach(() => false, ($, key) => {
//                     //console.error(`NESTED PROCEDURE: ${key}`)
//                     $w.line({}, ($w) => {
//                         $w.snippet(`function ${generateIdentifier(key)}_NIC`)
//                         generateInternalProcedureSpecification(
//                             $.specification,
//                             $w,
//                             ``,
//                             {},
//                         )
//                     })
//                 })
//                 $.effects.forEach(($) => {
//                     $w.line({}, ($w) => {
//                         switch ($.type[0]) {
//                             case "internal interface call":
//                                 pl.cc($.type[1], ($) => {
//                                     $w.snippet(`$ip.${$.interface}(`)
//                                     const $p = findInStack($r.parameters, $.interface)
//                                     if ($p.type[0] !== "method") {
//                                         throw new Error(`Not a method: ${$.interface}`)
//                                     }
//                                     const $m = $p.type[1]
//                                     generateTypeExpression(
//                                         $.expression,
//                                         $w,
//                                         {
//                                             context: $r.context,
//                                             target: getNestedType($m.type),
//                                             markedValues: allMarkers,
//                                             states: allStates,
//                                             nestedFunctions: [],
//                                             externalFunctions: decl.functions,
//                                             namespaceName: $pi["namespace reference"].namespace,
//                                         },
//                                     )
//                                     $w.snippet(`)`)
//                                 })
//                                 break
//                             case "external interface call":
//                                 pl.cc($.type[1], ($) => {
//                                     $w.snippet(`$ip.${$.interface}(`)
//                                     const $interface = find($r.interfaces, $.interface)
//                                     if ($interface.interface.type[0] !== "method") {
//                                         throw new Error(`Not a method: ${$.interface}`)
//                                     }
//                                     const $method = $interface.interface.type[1]
//                                     generateTypeExpression(
//                                         $.expression,
//                                         $w,
//                                         {
//                                             context: $r.context,
//                                             target: getTypeReference(
//                                                 $method.type,
//                                                 $pi["namespace reference"].namespace,
//                                             ),
//                                             markedValues: allMarkers,
//                                             states: allStates,
//                                             nestedFunctions: [],
//                                             externalFunctions: decl.functions,
//                                             namespaceName: $pi["namespace reference"].namespace,
//                                         },
//                                     )
//                                     $w.snippet(`)`)
//                                 })
//                                 break
//                             case "state change":
//                                 pl.cc($.type[1], ($) => {
//                                     //console.error("SIZE", allStates.length)
//                                     const $state = findInStack(allStates, $.state)
//                                     $w.snippet(`${generateIdentifier($.state)}`)
//                                     switch ($.type[0]) {
//                                         case "type4":
//                                             pl.cc($.type[1], ($) => {
//                                                 if ($state.type[0] !== "type5") {
//                                                     throw new Error(`unexpected: state not dictionary`)
//                                                 }
//                                                 const $type = $state.type[1]["nested type"]
//                                                 $w.snippet(` = `)
//                                                 generateTypeExpression(
//                                                     $.expression,
//                                                     $w,
//                                                     {
//                                                         context: $r.context,
//                                                         target: getNestedType(
//                                                             $type,
//                                                         ),
//                                                         markedValues: allMarkers,
//                                                         states: allStates,
//                                                         nestedFunctions: [],
//                                                         externalFunctions: decl.functions,
//                                                         namespaceName: $pi["namespace reference"].namespace,
//                                                     },
//                                                 )
//                                             })
//                                             break
//                                         case "string":
//                                             pl.cc($.type[1], ($) => {
//                                                 $w.snippet(` = `)
//                                                 generateStringExpression(
//                                                     $.initializer,
//                                                     $w,
//                                                     {
//                                                         context: $r.context,
//                                                         markedValues: allMarkers,
//                                                         states: allStates,
//                                                         nestedFunctions: [],
//                                                         externalFunctions: decl.functions,
//                                                         namespaceName: $pi["namespace reference"].namespace,
//                                                     },
//                                                 )
//                                             })
//                                             break
//                                         case "dictionary":
//                                             pl.cc($.type[1], ($) => {
//                                                 if ($state.type[0] !== "dictionary") {
//                                                     throw new Error(`unexpected: state not dictionary`)
//                                                 }
//                                                 const $dict = $state.type[1].type

//                                                 switch ($.strategy[0]) {
//                                                     case "add entry":
//                                                         pl.cc($.strategy[1], ($) => {
//                                                             $w.snippet(`[`)
//                                                             generateStringExpression(
//                                                                 $.key,
//                                                                 $w,
//                                                                 {
//                                                                     context: $r.context,
//                                                                     markedValues: allMarkers,
//                                                                     states: allStates,
//                                                                     nestedFunctions: [],
//                                                                     externalFunctions: decl.functions,
//                                                                     namespaceName: $pi["namespace reference"].namespace,
//                                                                 },
//                                                             )
//                                                             $w.snippet(`] = `)
//                                                             generateTypeExpression(
//                                                                 $.expression,
//                                                                 $w,
//                                                                 {
//                                                                     context: $r.context,
//                                                                     target: getNestedType(
//                                                                         $dict,
//                                                                     ),
//                                                                     markedValues: allMarkers,
//                                                                     states: allStates,
//                                                                     nestedFunctions: [],
//                                                                     externalFunctions: decl.functions,
//                                                                     namespaceName: $pi["namespace reference"].namespace,
//                                                                 },
//                                                             )
//                                                         })
//                                                         break
//                                                     default:
//                                                         pl.au($.strategy[0])
//                                                 }
//                                             })
//                                             break
//                                         case "list":
//                                             pl.cc($.type[1], ($) => {
//                                                 if ($state.type[0] !== "list") {
//                                                     throw new Error(`unexpected: state not list`)
//                                                 }
//                                                 const $list = $state.type[1].type
//                                                 switch ($.strategy[0]) {
//                                                     case "add element":
//                                                         pl.cc($.strategy[1], ($) => {
//                                                             $w.snippet(`.push(`)
//                                                             generateTypeExpression(
//                                                                 $.expression,
//                                                                 $w,
//                                                                 {
//                                                                     context: $r.context,
//                                                                     target: getNestedType(
//                                                                         $list,
//                                                                     ),
//                                                                     markedValues: allMarkers,
//                                                                     states: allStates,
//                                                                     nestedFunctions: [],
//                                                                     externalFunctions: decl.functions,
//                                                                     namespaceName: $pi["namespace reference"].namespace,
//                                                                 },
//                                                             )
//                                                             $w.snippet(`)`)
//                                                         })
//                                                         break
//                                                     default:
//                                                         pl.au($.strategy[0])
//                                                 }
//                                             })
//                                             break
//                                         default:
//                                             pl.au($.type[0])
//                                     }
//                                 })
//                                 break
//                             default:
//                                 pl.au($.type[0])
//                         }
//                     })
//                 })
//                 switch ($["return value"][0]) {
//                     case "interface":
//                         pl.cc($["return value"][1], ($) => {
//                             $w.line({}, ($w) => {
//                                 $w.snippet(`return `)
//                                 generateInterfaceExpression(
//                                     $.expression,
//                                     $w,
//                                     {},
//                                 )
//                             })
//                         })
//                         break
//                     case "void":
//                         break
//                     default:
//                         pl.au($["return value"][0])
//                 }
//             })
//             $w.snippet(`}`)
//         }
//         $w.line({}, () => { })
//         $w.line({}, ($w) => {
//             $w.snippet(`export function ${generateIdentifier(key)}_pi`)
//             doDictionary(
//                 $["type parameters"],
//                 () => {
//                     //
//                 },
//                 () => {
//                     $w.snippet(`<`)
//                 },
//                 () => {
//                     $w.snippet(`>`)
//                 },
//                 ($, key) => {
//                     $w.snippet(`${generateIdentifier(key)}`)
//                 },
//                 () => {
//                     $w.snippet(`, `)
//                 },
//             )
//             generateProcedureDeclaration(
//                 decl,
//                 $w,
//                 ":",
//                 $["namespace reference"].namespace,
//                 ($w) => {
//                     doDictionary(
//                         //should be parameters
//                         $["namespace reference"]["type arguments"],
//                         () => {
//                             //
//                         },
//                         () => {
//                             $w.snippet(`<`)
//                         },
//                         () => {
//                             $w.snippet(`>`)
//                         },
//                         ($, key) => {
//                             $w.snippet(`${generateIdentifier(key)}`)
//                         },
//                         () => {
//                             $w.snippet(`, `)
//                         },
//                     )

//                 }
//             )
//             $w.snippet(` `)
//             generateprocedureBlock(
//                 $.block,
//                 $w,
//                 {
//                     context: getTypeReference(decl.context, $pi["namespace reference"].namespace),
//                     interfaces: decl.interfaces,
//                     parameters: [],
//                     markedValues: [],
//                     states: [],
//                 }
//             )
//         })
//     })
// }
